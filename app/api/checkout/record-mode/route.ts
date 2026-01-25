import { NextResponse } from "next/server";

// Edge を避ける（payjp / crypto 互換性のため）
export const runtime = "nodejs";
// ルートを静的最適化させない（安全側）
export const dynamic = "force-dynamic";

export async function POST() {
    const secretKey = process.env.PAYJP_SECRET_KEY;
    const planId = process.env.PAYJP_PLAN_ID;
    const appUrl = process.env.APP_URL;

    // 環境変数未設定でも「ビルドでは落とさない」
    if (!secretKey || !planId || !appUrl) {
        return NextResponse.json(
            {
                error:
                    "Missing env vars: PAYJP_SECRET_KEY / PAYJP_PLAN_ID / APP_URL",
            },
            { status: 500 }
        );
    }

    // PAY.JP は CommonJS 読み込み（Next.js / Turbopack 安定策）
    const Payjp = require("payjp");
    const payjp = Payjp(secretKey);

    const checkout = await payjp.checkout.sessions.create({
        mode: "subscription",
        success_url: `${appUrl}/record-mode/redirect`,
        cancel_url: `${appUrl}/record-mode`,
        subscription_data: {
            items: [{ plan: planId }],
        },
        metadata: {
            service: "post-checker",
            mode: "record",
        },
    });

    return NextResponse.redirect(checkout.url!, { status: 303 });
}