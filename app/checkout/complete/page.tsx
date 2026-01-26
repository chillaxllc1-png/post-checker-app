// app/checkout/complete/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function CheckoutCompletePage() {
    const cookieStore = await cookies();
    const sessionUser = cookieStore.get("session_user")?.value;

    if (!sessionUser) {
        redirect("/login");
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-6 text-center">

                <div className="text-xs text-zinc-400 tracking-wide">
                    PostChecker
                </div>

                <h1 className="text-base text-zinc-800">
                    決済が完了しました
                </h1>

                <p className="text-sm text-zinc-600 leading-relaxed">
                    引き続き PostChecker をご利用いただけます。
                </p>

                <p className="text-[11px] text-zinc-400">
                    ※ 課金状態の反映は決済会社の通知をもとに行われます
                </p>

                <a
                    href="/account"
                    className="w-full rounded-xl bg-black py-3 text-white text-sm"
                >
                    アカウントページへ
                </a>
            </div>
        </main>
    );
}