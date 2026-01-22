export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-6 text-center">

                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                <h1 className="text-base text-zinc-800">
                    ページが見つかりません
                </h1>

                <p className="text-sm text-zinc-600 leading-relaxed">
                    お探しのページは、
                    <br />
                    削除されたか、URLが変更された可能性があります。
                </p>

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