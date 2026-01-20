type Props = {
    mode: "free" | "paid";
    intentUrl: string; // ★ここが追加：ResultClientが作ったURLを受け取る
};

export default function ResultBranch({ mode, intentUrl }: Props) {
    if (mode === "paid") {
        // 第2層（有料）※今はまだ運用しない想定。表示だけの器として残す。
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

    // 第1層（無料）※今はこちらだけを使う
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm text-zinc-600">
                この投稿は確認されましたが、
                <br />
                運用記録の対象ではありません。
            </p>

            <a
                href={intentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
            >
                Xの投稿画面を開く
            </a>

            {/* 将来ここに有料導線ボタンを足す（今は絶対に出さない） */}
            {/*
      <button className="w-full rounded-xl border border-zinc-200 py-4 text-sm">
        運用記録モードで確認を通す（月額1,280円）
      </button>
      */}
        </div>
    );
}