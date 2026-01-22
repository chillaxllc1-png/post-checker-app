"use client";

export default function Error({
    reset,
}: {
    reset: () => void;
}) {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-6 text-center">

                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                <h1 className="text-base text-zinc-800">
                    一時的なエラーが発生しました
                </h1>

                <p className="text-sm text-zinc-600 leading-relaxed">
                    通信状況や一時的な不具合により、
                    <br />
                    正常に表示できない場合があります。
                </p>

                <button
                    onClick={() => reset()}
                    className="text-xs text-zinc-400 underline underline-offset-4"
                >
                    もう一度試す
                </button>

                <a
                    href="/"
                    className="text-xs text-zinc-400 underline underline-offset-4"
                >
                    トップページに戻る
                </a>

            </div>
        </main>
    );
}