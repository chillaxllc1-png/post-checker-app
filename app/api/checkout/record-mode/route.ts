import { NextResponse } from "next/server";

/**
 * Node.js Runtime 固定
 * - payjp / crypto 互換性のため Edge を避ける
 */
export const runtime = "nodejs";

/**
 * 動的ルート固定
 * - 静的最適化させない（審査・本番安全策）
 */
export const dynamic = "force-dynamic";

export async function POST() {
    const secretKey = process.env.PAYJP_SECRET_KEY;
    const planId = process.env.PAYJP_PLAN_ID;
    const appUrl = process.env.APP_URL;

    /**
     * === 申請前・鍵未設定フェーズの完全ガード ===
     * - ビルドを絶対に落とさない
     * - 決済は成立させない
     * - UX / 審査ロジックは保持
     */
    if (!secretKey || !planId || !appUrl) {
        return NextResponse.json(
            {
                ok: false,
                reason: "payment_not_enabled",
                message:
                    "決済機能は現在有効化されていません（審査・設定完了後に利用可能です）",
            },
            { status: 503 } // ← 500ではなく503（一時的に利用不可）
        );
    }

    /**
     * PAY.JP 初期化
     * - 環境変数が揃った場合のみロード
     * - Turbopack 安定のため CommonJS require
     */
    const Payjp = require("payjp");
    const payjp = Payjp(secretKey);

    /**
     * Checkout Session 作成
     * - subscription モード
     * - success_url では状態変更しない
     * - Webhook を唯一の真実とする
     */
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

    /**
     * PAY.JP Checkout へリダイレクト
     */
    return NextResponse.redirect(checkout.url!, { status: 303 });
}