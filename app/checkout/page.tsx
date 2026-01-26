// app/checkout/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import CheckoutClient from "./CheckoutClient";

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
    const cookieStore = await cookies();
    const sessionUser = cookieStore.get("session_user")?.value;

    // ログイン必須
    if (!sessionUser) {
        redirect("/login");
    }

    // v1（審査提出段階）では「サブスク状態判定」や「自動振り分け」はしない。
    // ここでは常に CheckoutClient を出す（審査用に挙動を固定する）。
    return <CheckoutClient />;
}