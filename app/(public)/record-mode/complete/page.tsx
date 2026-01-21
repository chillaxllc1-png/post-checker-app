export default function RecordModeCompletePage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-8 text-center">

                {/* サービス名（最小・固定） */}
                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                {/* 行為完了（評価しない・事実のみ） */}
                <h1 className="text-base text-zinc-800">
                    運用記録として記録されました
                </h1>

                {/* 完了説明 */}
                <p className="text-sm text-zinc-600 leading-relaxed">
                    この投稿は、
                    <br />
                    運用記録モードで
                    <br />
                    確認を行った履歴として記録されました。
                </p>

                {/* 注意書き（必須・FIX） */}
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                    ※ 本記録は、投稿の結果や
                    <br />
                    アカウント状態を保証するものではありません。
                </p>

                {/* 行動は1つだけ：戻る */}
                <a
                    href="/"
                    className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
                >
                    戻る
                </a>

            </div>
        </main>
    );
}