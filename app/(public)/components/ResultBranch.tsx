type Props = {
    mode: "free" | "paid";
    intentUrl: string;
};

export default function ResultBranch({ mode, intentUrl }: Props) {
    // 第2層（有料）
    if (mode === "paid") {
        return (
            <div className="flex flex-col gap-4">
                <p className="text-sm text-zinc-600">
                    この投稿は、
                    <br />
                    運用記録モードで確認された履歴として保存されています。
                </p>

                <a
                    href={intentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
                >
                    Xの投稿画面を開く
                </a>
            </div>
        );
    }

    // 第1層（無料）FIX
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm text-zinc-600">
                この投稿は確認されましたが、
                <br />
                運用記録の対象ではありません。
            </p>

            {/* 有料導線（FIX・売らない・説明しない） */}
            <a
                href="/record-mode"
                className="w-full rounded-xl border border-zinc-300 py-4 text-zinc-700 text-sm text-center"
            >
                運用記録モードで確認を通す
                <br />
                <span className="text-xs text-zinc-500">
                    （月額1,280円）
                </span>
            </a>

            {/* 行為の完了 */}
            <a
                href={intentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
            >
                Xの投稿画面を開く
            </a>
        </div>
    );
}