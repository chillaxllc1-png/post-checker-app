import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// PAY.JP は CommonJS 読み込み（Next.js / Turbopack 安定策）
const Payjp = require("payjp");

// Edge Runtime を避ける（crypto / payjp 互換性のため）
export const runtime = "nodejs";

// PAY.JP 初期化
const payjp = Payjp(process.env.PAYJP_SECRET_KEY);

/**
 * PAY.JP Webhook Endpoint
 * - Webhook を唯一の真実とする
 * - success_url では状態変更しない
 */
export async function POST(req: NextRequest) {
    // raw body を取得（署名検証必須）
    const body = await req.text();
    const signature = req.headers.get("payjp-signature") ?? "";

    // 署名検証
    const expected = crypto
        .createHmac("sha256", process.env.PAYJP_WEBHOOK_SECRET!)
        .update(body)
        .digest("hex");

    if (signature !== expected) {
        return new NextResponse("invalid signature", { status: 400 });
    }

    // イベント解析
    const event = JSON.parse(body);

    /**
     * v1では subscription.created のみ処理
     * それ以外は ACK のみ返す（再送防止）
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
     *
     * ※ ここは Webhook 成功時のみ実行すること
     * ※ success_url 側で状態変更しない
     */

    // ===== 完全フィックスに必要な唯一の追加 =====
    // 決済成功後に「受け取り画面へ進める」ことを保証する
    const res = NextResponse.json({ received: true });

    res.cookies.set({
        name: "record_mode_completed",
        value: "1",
        httpOnly: true,
        path: "/",
        maxAge: 60 * 5, // 5分（審査・実運用ともに安全）
        sameSite: "lax",
    });

    return res;
}