// app/account/delete/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import DeleteClient from "./DeleteClient";

export const dynamic = "force-dynamic";

export default async function DeletePage() {
    const cookieStore = await cookies();
    const sessionUser = cookieStore.get("session_user")?.value;

    if (!sessionUser) redirect("/login");

    const subStatus = cookieStore.get("sub_status")?.value ?? "active";

    // 解約済みのみ退会可
    if (subStatus !== "canceled") redirect("/account");

    return <DeleteClient />;
}