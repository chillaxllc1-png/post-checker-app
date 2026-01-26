// app/api/billing/checkout/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ===== v1: サーバ側の二重実行防止（10分）=====
// ※ 本番はDBで管理するが、審査段階はこれで「二重クリック」を100%潰せる
const pendingByUser = new Map<string, { url: string; createdAt: number }>();
const TTL_MS = 10 * 60 * 1000;

// GETで叩かれても「405のHTMLページ」を出さない（事故防止）
export async function GET() {
    return NextResponse.json(
        { ok: false, error: "method_not_allowed" },
        { status: 405 }
    );
}

export async function POST() {
    const cookieStore = await cookies();
    const sessionUser = cookieStore.get("session_user")?.value;

    if (!sessionUser) {
        return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
    }

    // 直近に作ったcheckoutUrlがあれば再利用（＝二重クリックでも同じURL返す）
    const existing = pendingByUser.get(sessionUser);
    if (existing && Date.now() - existing.createdAt < TTL_MS) {
        return NextResponse.json(
            { ok: true, checkoutUrl: existing.url, reused: true },
            { status: 200, headers: { "Cache-Control": "no-store" } }
        );
    }

    const secretKey = process.env.PAYJP_SECRET_KEY;
    const planId = process.env.PAYJP_PLAN_ID;
    const appUrl = process.env.APP_URL;

    // 審査前・未設定でも build を落とさない
    if (!secretKey || !planId || !appUrl) {
        return NextResponse.json(
            {
                ok: false,
                error: "payment_not_enabled",
                message:
                    "決済機能は現在有効化されていません（審査・設定完了後に利用可能です）",
            },
            { status: 503, headers: { "Cache-Control": "no-store" } }
        );
    }

    const Payjp = require("payjp");
    const payjp = Payjp(secretKey);

    const session = await payjp.checkout.sessions.create({
        mode: "subscription",
        success_url: `${appUrl}/checkout/complete`,
        cancel_url: `${appUrl}/checkout`,
        subscription_data: {
            items: [{ plan: planId }],
        },
        metadata: {
            service: "postchecker",
            type: "monthly",
            user: sessionUser,
        },
    });

    const checkoutUrl: string | undefined = session?.url;

    if (!checkoutUrl) {
        return NextResponse.json(
            { ok: false, error: "checkout_url_missing" },
            { status: 500, headers: { "Cache-Control": "no-store" } }
        );
    }

    // 保存（10分）
    pendingByUser.set(sessionUser, { url: checkoutUrl, createdAt: Date.now() });

    return NextResponse.json(
        { ok: true, checkoutUrl },
        { status: 200, headers: { "Cache-Control": "no-store" } }
    );
}