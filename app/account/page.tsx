// app/account/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { subscriptions } from "@/app/api/billing/_store";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
    const cookieStore = await cookies();
    const sessionUser = cookieStore.get("session_user")?.value;

    if (!sessionUser) {
        redirect("/login");
    }

    // === 課金状態は billing/_store を唯一の真実とする ===
    const subscription = subscriptions.get(sessionUser);

    const planName = "月額 1,280円（税込）";

    const isActive = subscription?.status === "active";
    const isCanceled = subscription?.status === "canceled";

    const statusLabel = isCanceled
        ? "解約済み（有効期限まで利用可能）"
        : isActive
            ? "有効"
            : "未契約";

    const nextBillingDate =
        subscription?.nextBillingDate ?? "—";

    const canDelete = isCanceled;

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-6">
                <div className="text-center text-xs text-zinc-400 tracking-wide">
                    PostChecker
                </div>

                <h1 className="text-center text-base text-zinc-800">
                    アカウント
                </h1>

                <div className="rounded-xl border border-zinc-200 p-4 text-sm flex flex-col gap-3">
                    <div className="flex justify-between gap-4">
                        <span className="text-zinc-500">現在のプラン</span>
                        <span className="text-zinc-800 text-right">
                            {subscription ? planName : "未契約"}
                        </span>
                    </div>

                    <div className="flex justify-between gap-4">
                        <span className="text-zinc-500">ステータス</span>
                        <span className="text-zinc-800 text-right">
                            {statusLabel}
                        </span>
                    </div>

                    <div className="flex justify-between gap-4">
                        <span className="text-zinc-500">次回更新日</span>
                        <span className="text-zinc-800 text-right">
                            {nextBillingDate}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    {/* 有効なときだけ解約 */}
                    {isActive ? (
                        <a
                            href="/account/cancel"
                            className="w-full rounded-xl border border-zinc-300 py-3 text-center text-sm"
                        >
                            解約する
                        </a>
                    ) : (
                        <div className="w-full rounded-xl border border-zinc-200 py-3 text-center text-sm text-zinc-500">
                            解約手続きは完了しています
                        </div>
                    )}

                    <a
                        href={canDelete ? "/account/delete" : "/account"}
                        className={`w-full rounded-xl py-3 text-center text-sm ${canDelete
                                ? "text-zinc-800 underline underline-offset-4"
                                : "text-zinc-400"
                            }`}
                    >
                        退会する
                    </a>

                    {!canDelete && (
                        <div className="text-center text-[11px] text-zinc-400 leading-relaxed">
                            ※ 退会は「解約済み」の場合のみ行えます
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}