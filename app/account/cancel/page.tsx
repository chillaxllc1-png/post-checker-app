// app/account/cancel/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CancelClient from "./CancelClient";

export const dynamic = "force-dynamic";

export default async function CancelPage() {
    const cookieStore = await cookies();
    const sessionUser = cookieStore.get("session_user")?.value;

    if (!sessionUser) {
        redirect("/login");
    }

    // ❌ sub_status による分岐はしない
    // 状態判断は API / Webhook 側の責務

    return <CancelClient />;
}