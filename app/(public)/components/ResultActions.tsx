type Props = {
    mode: "free" | "paid";
};

export default function ResultActions({ mode }: Props) {
    if (mode === "paid") {
        // 有料時：1ボタン（今は表示だけ、実装しない）
        return (
            <div className="flex flex-col gap-3">
                <a
                    href="https://twitter.com/intent/tweet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
                >
                    Xの投稿画面を開く
                </a>
            </div>
        );
    }

    // 無料時：2択（今は“存在させるだけ”）
    return (
        <div className="flex flex-col gap-3">
            <a
                href="https://twitter.com/intent/tweet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
            >
                Xの投稿画面を開く
            </a>

            {/* 将来ここが課金導線になる */}
            <button
                disabled
                className="w-full rounded-xl border border-zinc-300 py-4 text-sm text-zinc-400"
            >
                運用記録モードで確認を通す
                <br />
                （月額1,280円）
            </button>
        </div>
    );
}