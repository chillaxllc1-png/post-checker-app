import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * 🔹 POST：決済開始（既存そのまま・一切変更なし）
 */
export async function POST() {
    const cookieStore = await cookies();
    const sessionUser = cookieStore.get("session_user")?.value;

    if (!sessionUser) {
        return NextResponse.json(
            { error: "unauthorized" },
            { status: 401 }
        );
    }

    const secretKey = process.env.PAYJP_SECRET_KEY;
    const planId = process.env.PAYJP_PLAN_ID;
    const appUrl = process.env.APP_URL;

    // 🔴 審査中でも build を落とさない
    if (!secretKey || !planId || !appUrl) {
        return NextResponse.json(
            {
                error:
                    "Payment is not available yet. (PAY.JP configuration incomplete)",
            },
            { status: 503 }
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

    return NextResponse.json({
        checkoutUrl: session.url,
    });
}

/**
 * 🔹 GET：誤アクセス・二重実行時の保険
 * - 405 を出さない
 * - 審査・UX対策
 * - ロジックには一切影響しない
 */
export async function GET() {
    return NextResponse.json(
        {
            error: "Method not allowed",
        },
        { status: 200 }
    );
}