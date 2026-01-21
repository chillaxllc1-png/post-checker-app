export default function RecordModeCompletePage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-8 text-center">

                {/* サービス名（最小・固定） */}
                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                {/* 行為完了の見出し（FIX） */}
                <h1 className="text-base text-zinc-800">
                    運用記録として保存されました
                </h1>

                {/* 完了説明（事実のみ） */}
                <p className="text-sm text-zinc-600 leading-relaxed">
                    この投稿は、
                    <br />
                    運用記録モードで確認を通した履歴として
                    <br />
                    保存されました。
                </p>

                {/* 注意書き（必須・FIX） */}
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                    ※ 本記録は、
                    投稿の結果やアカウント状態を
                    保証するものではありません。
                </p>

                {/* メインアクション */}
                <a
                    href="https://twitter.com/intent/tweet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
                >
                    Xの投稿画面を開く
                </a>

                {/* サブアクション（戻る） */}
                <a
                    href="/result?type=pass"
                    className="text-xs text-zinc-400 underline underline-offset-4"
                >
                    確認結果に戻る
                </a>

            </div>
        </main>
    );
}