"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/**
 * 第1層｜無料・判断なし
 * - 判定ロジックなし（常に pass）
 * - 記録しない
 * - 理由説明しない
 * - UXは「通す」だけ
 */
export default function PublicPage() {
    const router = useRouter();
    const [text, setText] = useState("");

    const onSubmit = () => {
        // 第1層は常に pass（FIX）
        const type = "pass";

        router.push(
            `/result?type=${type}&text=${encodeURIComponent(text)}`
        );
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md flex flex-col gap-6 text-center">

                {/* サービス名（最小・感情を乗せない） */}
                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                {/* 上部1行説明（FIX） */}
                <p className="text-base text-zinc-800">
                    投稿前に、運用上の確認を行います。
                </p>

                {/* 投稿テキスト入力 */}
                <textarea
                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                    rows={7}
                    placeholder="実際に投稿する内容を入力してください"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                {/* 画像選択（後で実装・今はダミー） */}
                <div className="w-full rounded-xl border border-dashed border-zinc-200 px-4 py-6 text-sm text-zinc-400">
                    ［画像を選択］（後で実装）
                </div>

                {/* メインアクション（行為のみ） */}
                <button
                    onClick={onSubmit}
                    className="w-full rounded-xl bg-black py-4 text-white text-sm text-center active:opacity-90 transition"
                >
                    確認を通す
                </button>

            </div>
        </main>
    );
}