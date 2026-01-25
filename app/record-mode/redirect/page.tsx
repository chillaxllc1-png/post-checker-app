import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function RecordModeRedirectPage() {
    const cookieStore = await cookies();
    const completed = cookieStore.get("record_mode_completed");

    if (!completed) {
        redirect("/record-mode");
    }

    redirect("/record-mode/complete");
}