"use client";

import { useState } from "react";

export default function CheckoutClient() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function startCheckout() {
        if (loading) return;
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/billing/checkout", {
                method: "POST",
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data?.error ?? "決済を開始できませんでした");
                setLoading(false);
                return;
            }

            // PAY.JP Checkout URL へ遷移
            window.location.href = data.checkoutUrl;
        } catch {
            setError("通信エラーが発生しました");
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-6 text-center">

                <div className="text-xs text-zinc-400 tracking-wide">
                    PostChecker
                </div>

                <h1 className="text-base text-zinc-800">
                    PostChecker 月額プラン
                </h1>

                <div className="text-sm text-zinc-700">
                    月額 1,280円（税込）
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed">
                    本プランでは、投稿前に確認行為を行った事実を
                    <br />
                    記録として保存することができます。
                </p>

                <p className="text-[11px] text-zinc-400 leading-relaxed">
                    ※ 投稿の結果やアカウント状態を保証するものではありません。
                </p>

                {error && (
                    <div className="text-xs text-red-500">
                        {error}
                    </div>
                )}

                <button
                    onClick={startCheckout}
                    disabled={loading}
                    className="w-full rounded-xl bg-black py-3 text-white text-sm disabled:opacity-40"
                >
                    {loading ? "処理中..." : "クレジットカードで決済する"}
                </button>

                <a
                    href="/account"
                    className="text-xs text-zinc-400 underline underline-offset-4"
                >
                    戻る
                </a>
            </div>
        </main>
    );
}