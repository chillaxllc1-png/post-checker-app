import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

/**
 * Node.js Runtime 固定
 * - crypto / PAY.JP Webhook 互換性のため Edge を避ける
 */
export const runtime = "nodejs";

/**
 * 動的ルート固定
 * - 静的最適化を防ぐ（審査・本番安全策）
 */
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    const webhookSecret = process.env.PAYJP_WEBHOOK_SECRET;

    /**
     * === 申請前・未設定フェーズ完全ガード ===
     * - ビルドを落とさない
     * - PAY.JP 再送ループを防ぐ
     * - 本番で有効化されたら自動で動作
     */
    if (!webhookSecret) {
        return NextResponse.json(
            {
                ok: false,
                reason: "webhook_not_enabled",
                message:
                    "PAY.JP Webhook は現在有効化されていません（審査・設定完了後に有効）",
            },
            { status: 200 } // ← 500/400 にしない（PAY.JP 再送防止）
        );
    }

    /**
     * raw body 取得（署名検証のため必須）
     */
    const body = await req.text();
    const signature = req.headers.get("payjp-signature") ?? "";

    /**
     * 署名検証
     */
    const expected = crypto
        .createHmac("sha256", webhookSecret)
        .update(body)
        .digest("hex");

    if (signature !== expected) {
        // 署名不一致でも 400（PAY.JP 仕様上 OK）
        return new NextResponse("invalid signature", { status: 400 });
    }

    /**
     * イベント解析
     */
    const event = JSON.parse(body);

    /**
     * v1: subscription.created のみ処理
     * それ以外は ACK のみ（再送防止）
     */
    if (event.type !== "subscription.created") {
        return NextResponse.json({ received: true });
    }

    const subscription = event.data.object;

    /**
     * === 実装者FIXポイント（思想保持）===
     * - subscription.id をDB保存
     * - record_mode = true
     * - paid_at を保存
     * - record_mode_completed 状態をサーバ側で成立させる
     *
     * ※ success_url では状態変更しない
     * ※ Webhook を唯一の真実とする
     */

    return NextResponse.json({ received: true });
}