// app/api/billing/webhook/payjp/route.ts
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { subscriptions } from "@/app/api/billing/_store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    const webhookSecret = process.env.PAYJP_WEBHOOK_SECRET;

    /**
     * === 審査前・未設定フェーズ完全ガード ===
     * - PAY.JP から来ても 200 を返す
     * - 再送ループを防ぐ
     */
    if (!webhookSecret) {
        return NextResponse.json(
            {
                ok: false,
                reason: "webhook_not_enabled",
            },
            { status: 200 }
        );
    }

    // raw body（署名検証用）
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

    /**
     * v1: subscription.created のみ扱う
     */
    if (event.type !== "subscription.created") {
        return NextResponse.json({ received: true });
    }

    const subscription = event.data.object;

    /**
     * PAY.JP 側で metadata.user に
     * session_user（userId）を入れている前提
     */
    const userId = subscription.metadata?.user;

    if (!userId) {
        // ユーザー特定不可でも ACK（再送防止）
        return NextResponse.json({ received: true });
    }

    /**
     * === v1 仮保存（真実はここ）===
     * - Cookieは一切触らない
     * - Account / Cancel はこの Map を参照
     */
    subscriptions.set(userId, {
        subscriptionId: subscription.id,
        status: "active",
        nextBillingDate: subscription.current_period_end
            ? new Date(subscription.current_period_end * 1000)
                .toISOString()
                .slice(0, 10)
            : undefined,
    });

    return NextResponse.json({ received: true });
}