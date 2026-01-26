// app/account/cancel/CancelClient.tsx
"use client";

import { useState } from "react";

export default function CancelClient() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function onCancel() {
        if (loading) return;
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/account/cancel", { method: "POST" });
            if (!res.ok) throw new Error("cancel failed");
            window.location.href = "/account";
        } catch {
            setError("解約に失敗しました");
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-6">
                <div className="text-center text-xs text-zinc-400 tracking-wide">
                    PostChecker
                </div>

                <h1 className="text-center text-base text-zinc-800">解約</h1>

                <p className="text-sm text-zinc-600 leading-relaxed text-center">
                    解約すると、次回更新日以降は課金されません。
                </p>

                {error && (
                    <div className="text-xs text-red-500 text-center">{error}</div>
                )}

                <button
                    onClick={onCancel}
                    disabled={loading}
                    className="w-full rounded-xl bg-black py-3 text-white text-sm disabled:opacity-40"
                >
                    {loading ? "処理中..." : "解約する"}
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