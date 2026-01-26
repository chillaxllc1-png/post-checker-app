"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PublicPage() {
    const router = useRouter();
    const [text, setText] = useState("");

    const onSubmit = () => {
        if (!text.trim()) return;
        const type = "pass";
        router.push(`/result?type=${type}&text=${encodeURIComponent(text)}`);
    };

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md flex flex-col gap-6 text-center">

                {/* サービス名 */}
                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                {/* ★ 追加：会員制・月額であることの明示（最小） */}
                <div className="text-[11px] text-zinc-400 leading-relaxed">
                    ※ 本サービスはアカウント登録が必要な月額制サービスです
                </div>

                {/* 上部説明 */}
                <p className="text-base text-zinc-800">
                    投稿前に、運用上の確認を行います。
                </p>

                {/* 投稿テキスト入力 */}
                <textarea
                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm"
                    rows={7}
                    placeholder="実際に投稿する内容を入力してください"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                {/* ダミー画像 */}
                <div className="w-full rounded-xl border border-dashed border-zinc-200 px-4 py-6 text-sm text-zinc-400">
                    ［画像を選択］（後で実装）
                </div>

                {/* メインアクション */}
                <button
                    onClick={onSubmit}
                    className="w-full rounded-xl bg-black py-4 text-white text-sm"
                >
                    確認を通す
                </button>

                {/* ★ 追加：ログイン／新規登録導線（インフラ） */}
                <div className="flex justify-center gap-4 text-xs text-zinc-400">
                    <Link href="/login" className="underline">
                        ログイン
                    </Link>
                    <Link href="/signup" className="underline">
                        新規登録
                    </Link>
                </div>

            </div>
        </main>
    );
}