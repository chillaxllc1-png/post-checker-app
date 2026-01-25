import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function RecordModeCompletePage() {
    // cookies() は Promise を返すため await 必須
    const cookieStore = await cookies();
    const recordCompleted = cookieStore.get("record_mode_completed");

    // Webhook 完了後でない場合は入れない
    if (!recordCompleted) {
        redirect("/record-mode");
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-8 text-center">

                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                <h1 className="text-base text-zinc-800">
                    運用記録が保存されました
                </h1>

                <p className="text-sm text-zinc-600 leading-relaxed">
                    この投稿は、
                    <br />
                    運用記録モードで
                    <br />
                    確認を行った履歴として記録されました。
                </p>

                <p className="text-[11px] text-zinc-400 leading-relaxed">
                    ※ 本記録は、投稿の結果や
                    <br />
                    アカウント状態を保証するものではありません。
                </p>

                <a
                    href="/result?type=pass"
                    className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
                >
                    確認結果に戻る
                </a>

            </div>
        </main>
    );
}