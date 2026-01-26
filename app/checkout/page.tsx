// app/checkout/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CheckoutClient from "./CheckoutClient";

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
    const cookieStore = await cookies();
    const sessionUser = cookieStore.get("session_user")?.value;

    if (!sessionUser) {
        redirect("/login");
    }

    // 🔒 v1（審査提出段階）ではサブスク状態判定は行わない
    // 状態管理は Webhook 実装後に有効化する

    return <CheckoutClient />;
}