"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PublicPage() {
    const router = useRouter();
    const [text, setText] = useState("");

    const onSubmit = () => {
        const type = "pass"; // 第1層は固定（FIX）

        router.push(
            `/result?type=${type}&text=${encodeURIComponent(text)}`
        );
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md flex flex-col gap-6 text-center">
                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                <p className="text-base text-zinc-800">
                    投稿前に、運用上の確認を行います。
                </p>

                <textarea
                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
                    rows={7}
                    placeholder="実際に投稿する内容を入力してください"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <div className="w-full rounded-xl border border-dashed border-zinc-200 px-4 py-6 text-sm text-zinc-400">
                    ［画像を選択］（後で実装）
                </div>

                <button
                    onClick={onSubmit}
                    className="w-full rounded-xl bg-black py-4 text-white text-sm"
                >
                    確認を通す
                </button>
            </div>
        </main>
    );
}