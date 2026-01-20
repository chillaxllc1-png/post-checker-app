export default function ResultActionsFree() {
    return (
        <div className="flex flex-col gap-4">

            {/* 第1層 線引き文言（FIX） */}
            <p className="text-sm text-zinc-600">
                この投稿は確認されましたが、
                <br />
                運用記録の対象ではありません。
            </p>

            {/* 行動分岐 */}
            <div className="flex flex-col gap-3">

                {/* X投稿 */}
                <a
                    href="https://twitter.com/intent/tweet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
                >
                    Xの投稿画面を開く
                </a>

                {/* 第2層導線（売らない・FIX） */}
                <button
                    type="button"
                    className="w-full rounded-xl border border-zinc-300 py-4 text-sm text-zinc-800"
                >
                    運用記録モードで確認を通す
                    <br />
                    <span className="text-xs text-zinc-500">
                        （月額1,280円）
                    </span>
                </button>

            </div>
        </div>
    );
}