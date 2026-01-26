// app/api/account/delete/route.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
    const cookieStore = await cookies();
    const sessionUser = cookieStore.get("session_user")?.value;

    if (!sessionUser) {
        return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const subStatus = cookieStore.get("sub_status")?.value ?? "active";
    if (subStatus !== "canceled") {
        return NextResponse.json({ error: "must_cancel_first" }, { status: 403 });
    }

    // v1仮：退会＝Cookie削除（本番はDB削除＋PAY.JP解約済み確認）
    const res = NextResponse.json({ ok: true });

    res.cookies.delete("session_user");
    res.cookies.delete("sub_status");
    res.cookies.delete("sub_next_billing");

    return res;
}