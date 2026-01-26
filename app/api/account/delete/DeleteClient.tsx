// app/account/delete/DeleteClient.tsx
"use client";

import { useState } from "react";

export default function DeleteClient() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function onDelete() {
        if (loading) return;
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/account/delete", { method: "POST" });
            if (!res.ok) throw new Error("delete failed");
            window.location.href = "/";
        } catch {
            setError("退会に失敗しました");
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-6">
                <div className="text-center text-xs text-zinc-400 tracking-wide">
                    PostChecker
                </div>

                <h1 className="text-center text-base text-zinc-800">退会</h1>

                <p className="text-sm text-zinc-600 leading-relaxed text-center">
                    アカウントを削除すると、
                    <br />
                    セッションが解除されます。
                </p>

                {error && (
                    <div className="text-xs text-red-500 text-center">{error}</div>
                )}

                <button
                    onClick={onDelete}
                    disabled={loading}
                    className="w-full rounded-xl bg-black py-3 text-white text-sm disabled:opacity-40"
                >
                    {loading ? "処理中..." : "退会する"}
                </button>

                <a
                    href="/account"
                    className="text-center text-xs text-zinc-400 underline underline-offset-4"
                >
                    戻る
                </a>
            </div>
        </main>
    );
}