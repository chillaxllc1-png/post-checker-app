type Props = {
    mode: "free" | "paid";
    intentUrl: string;
};

export default function ResultBranch({ mode, intentUrl }: Props) {
    // 第2層（運用記録モード）
    if (mode === "paid") {
        return (
            <div className="flex flex-col gap-4">
                <p className="text-sm text-zinc-600 leading-relaxed">
                    この投稿は、
                    <br />
                    運用記録モードで確認行為を行った履歴として
                    <br />
                    記録されています。
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

    // 第1層（無料）
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm text-zinc-600 leading-relaxed">
                この投稿は、
                <br />
                確認行為を行った事実が表示されています。
                <br />
                記録は行われていません。
            </p>

            {/* 運用記録モード導線（審査用に必須） */}
            <a
                href="/record-mode"
                className="w-full rounded-xl border border-zinc-300 py-4 text-zinc-700 text-sm text-center"
            >
                運用記録モードで確認を通す
                <br />
                <span className="text-xs text-zinc-500">
                    （月額 1,280円・税込）
                </span>
            </a>

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