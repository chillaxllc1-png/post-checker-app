"use client";

import { useState } from "react";

export default function RecordModeCheckoutPage() {
    const [loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function startCheckout() {
        if (clicked) return;

        setClicked(true);
        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/checkout/record-mode", {
                method: "POST",
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data?.message ?? "決済を開始できませんでした");
                setLoading(false);
                return;
            }

            // API 側が redirect を返す設計ならここは不要
            if (data?.redirectUrl) {
                window.location.href = data.redirectUrl;
            }
        } catch {
            setError("通信エラーが発生しました");
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-8 text-center">

                <div className="text-xs text-zinc-400 tracking-wide">
                    Post Checker
                </div>

                <h1 className="text-base text-zinc-800">
                    運用記録モードの決済
                </h1>

                <p className="text-sm text-zinc-600 leading-relaxed">
                    運用記録モードは、
                    <br />
                    投稿前に確認行為を行ったという事実を
                    <br />
                    記録として保存するための有料モードです。
                </p>

                <p className="text-[11px] text-zinc-400 leading-relaxed">
                    ※ 本サービスは、投稿の結果や
                    <br />
                    アカウント状態を保証するものではありません。
                </p>

                <div className="text-sm text-zinc-700">
                    月額 1,280円（税込）
                </div>

                {error && (
                    <div className="text-xs text-red-500">
                        {error}
                    </div>
                )}

                <button
                    type="button"
                    onClick={startCheckout}
                    disabled={loading || clicked}
                    className="w-full rounded-xl bg-black py-4 text-white text-sm disabled:opacity-40"
                >
                    {loading ? "処理中..." : "クレジットカードで決済する"}
                </button>

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