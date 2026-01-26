// app/api/account/cancel/route.ts
import { NextRequest, NextResponse } from "next/server";
import { subscriptions } from "@/app/api/billing/_store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    const sessionUser = req.cookies.get("session_user")?.value;

    // ログイン必須
    if (!sessionUser) {
        return NextResponse.json(
            { error: "unauthorized" },
            { status: 401 }
        );
    }

    /**
     * === v1 FIX 方針 ===
     * - 解約の「意思」を受け取る
     * - 課金状態の真実は billing/_store に保存
     * - Cookie は一切使わない
     * - 本番では PAY.JP cancel → Webhook で同期
     */

    const current = subscriptions.get(sessionUser);

    // 未契約 or すでに解約済み
    if (!current || current.status === "canceled") {
        return NextResponse.json({ ok: true });
    }

    /**
     * v1（審査前・PAY.JP未接続）
     * - 即時 canceled 扱い
     * - 有効期限は仮で保持（将来Webhookで上書き）
     */
    subscriptions.set(sessionUser, {
        ...current,
        status: "canceled",
        // nextBillingDate は保持（表示用）
    });

    return NextResponse.json({ ok: true });
}