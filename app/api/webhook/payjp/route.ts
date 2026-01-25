import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    const webhookSecret = process.env.PAYJP_WEBHOOK_SECRET;

    // これも未設定で「ビルド落ち」しないようにする
    if (!webhookSecret) {
        return NextResponse.json(
            { error: "Missing env var: PAYJP_WEBHOOK_SECRET" },
            { status: 500 }
        );
    }

    const body = await req.text();
    const signature = req.headers.get("payjp-signature") ?? "";

    const expected = crypto
        .createHmac("sha256", webhookSecret)
        .update(body)
        .digest("hex");

    if (signature !== expected) {
        return new NextResponse("invalid signature", { status: 400 });
    }

    const event = JSON.parse(body);

    // v1: subscription.created だけ処理。他はACK
    if (event.type !== "subscription.created") {
        return NextResponse.json({ received: true });
    }

    const subscription = event.data.object;

    /**
     * ここでやること（保持）
     * - subscription.id をDB保存
     * - record_mode = true
     * - paid_at を保存
     * - record_mode_completed Cookie をセット（またはサーバ側状態で redirect を許可）
     */

    return NextResponse.json({ received: true });
}