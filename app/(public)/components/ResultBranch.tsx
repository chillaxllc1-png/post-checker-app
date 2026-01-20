type Props = {
    mode: "free" | "paid";
};

export default function ResultBranch({ mode }: Props) {
    if (mode === "paid") {
        return (
            <div className="flex flex-col gap-4">
                <p className="text-sm text-zinc-600">
                    この投稿は、
                    <br />
                    運用記録モードで確認された履歴として保存されています。
                </p>

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

    // 第1層（無料）
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm text-zinc-600">
                この投稿は確認されましたが、
                <br />
                運用記録の対象ではありません。
            </p>

            {/* 行為の完了 */}
            <a
                href="https://twitter.com/intent/tweet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
            >
                Xの投稿画面を開く
            </a>

            {/* 
        将来ここに：
        ・運用記録モードで確認を通す
        （月額1,280円）
        を差し込む
        ※ 今は絶対に出さない
      */}
        </div>
    );
}