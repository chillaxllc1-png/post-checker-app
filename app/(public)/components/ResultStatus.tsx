type ResultType = "pass" | "caution" | "ng";

type Props = {
    type: ResultType;
};

export default function ResultStatus({ type }: Props) {
    if (type === "caution") {
        return (
            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-zinc-800">注意</p>
                <p className="text-sm text-zinc-600">
                    この投稿は、注意が必要な扱われ方をされる可能性があります。
                </p>
            </div>
        );
    }

    if (type === "ng") {
        return (
            <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-zinc-800">非推奨</p>
                <p className="text-sm text-zinc-600">
                    この投稿は、
                    <br />
                    表現の重なり方によって、
                    <br />
                    強く見えやすい扱われ方をされる可能性があります。
                </p>
            </div>
        );
    }

    // pass（通過）
    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-zinc-800">通過</p>
            <p className="text-sm text-zinc-600">
                この投稿は、確認を通過しました。
            </p>
        </div>
    );
}