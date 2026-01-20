type Props = {
    mode: "free" | "paid";
};

export default function RecordGate({ mode }: Props) {
    if (mode === "paid") {
        return (
            <p className="text-sm text-zinc-600">
                この投稿は、
                <br />
                運用記録モードで確認された履歴として保存されています。
            </p>
        );
    }

    // free（第1層）
    return (
        <p className="text-sm text-zinc-600">
            この投稿は確認されましたが、
            <br />
            運用記録の対象ではありません。
        </p>
    );
}