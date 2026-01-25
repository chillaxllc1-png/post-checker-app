"use client";

export default function RecordModeCheckoutPage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-8 text-center">

                {/* サービス名 */}
                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                {/* 見出し */}
                <h1 className="text-base text-zinc-800">
                    運用記録モードの決済
                </h1>

                {/* 商材説明（事実のみ） */}
                <p className="text-sm text-zinc-600 leading-relaxed">
                    運用記録モードは、
                    <br />
                    投稿前に確認行為を行ったという事実を
                    <br />
                    記録として保存するための有料モードです。
                </p>

                {/* 注意書き */}
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                    ※ 本サービスは、投稿の結果や
                    <br />
                    アカウント状態を保証するものではありません。
                </p>

                {/* 価格 */}
                <div className="text-sm text-zinc-700">
                    月額 1,280円（税込）
                </div>

                {/* 決済ボタン */}
                <form action="/api/checkout/record-mode" method="POST">
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-black py-4 text-white text-sm
                        active:opacity-80 transition"
                    >
                        クレジットカードで決済する
                    </button>
                </form>

                {/* 戻る */}
                <a
                    href="/record-mode"
                    className="text-xs text-zinc-400 underline underline-offset-4"
                >
                    前の画面に戻る
                </a>

            </div>
        </main>
    );
}