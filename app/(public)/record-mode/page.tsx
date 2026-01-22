"use client";

export default function RecordModePage() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-8 text-center">

                {/* サービス名（最小・固定） */}
                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                {/* 見出し（FIX） */}
                <h1 className="text-base text-zinc-800">
                    運用記録モードについて
                </h1>

                {/* 役割定義（FIX） */}
                <p className="text-sm text-zinc-600 leading-relaxed">
                    運用記録モードは、
                    <br />
                    投稿の是非を判断するものではなく、
                    <br />
                    投稿前に確認行為を行ったという事実を
                    <br />
                    記録として残すためのモードです。
                </p>

                {/* 注意書き（必須・FIX） */}
                <p className="text-[11px] text-zinc-400 leading-relaxed">
                    ※ 本モードは、
                    投稿の結果やアカウント状態を保証するものではありません。
                </p>

                {/* 価格表示（売らない・FIX） */}
                <div className="text-sm text-zinc-700">
                    月額 1,280円（税込）
                </div>

                {/* 決済未接続（明示的に無効） */}
                <button
                    type="button"
                    disabled
                    className="w-full rounded-xl bg-black py-4 text-white text-sm opacity-40 cursor-not-allowed"
                >
                    現在、この画面では決済は行えません
                </button>

                {/* 戻る動線（PC-8 FIX：Result に戻す） */}
                <a
                    href="/result?type=pass"
                    className="text-xs text-zinc-400 underline underline-offset-4"
                >
                    確認結果に戻る
                </a>

            </div>
        </main>
    );
}