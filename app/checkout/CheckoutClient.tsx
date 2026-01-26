"use client";

import { useRef, useState } from "react";

export default function CheckoutClient() {
    const lockRef = useRef(false); // ★二重クリック防止（最強）
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function startCheckout() {
        // ★ 二重クリック完全防止
        if (lockRef.current) return;
        lockRef.current = true;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/billing/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // bodyは不要だが、POSTとして明確にする（審査で見ても分かりやすい）
                body: JSON.stringify({}),
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                setError(
                    data?.error ??
                    "決済を開始できませんでした（しばらくしてからお試しください）"
                );
                setLoading(false);
                // ★ エラー時は “明示的に” リトライボタンで解除
                return;
            }

            // 正常時：PAY.JP Checkout URLへ遷移
            if (data?.checkoutUrl) {
                window.location.href = data.checkoutUrl;
                return;
            }

            setError("決済URLを取得できませんでした");
            setLoading(false);
        } catch {
            setError("通信エラーが発生しました");
            setLoading(false);
        }
    }

    function resetAndRetry() {
        // ★ ユーザーが意図して再試行するときだけロック解除
        lockRef.current = false;
        setError(null);
        setLoading(false);
    }

    const disabled = loading; // ロックはrefなのでUIはloadingで止める

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm flex flex-col gap-6 text-center">
                <div className="text-xs text-zinc-400 tracking-wide">PostChecker</div>

                <h1 className="text-base text-zinc-800">PostChecker 月額プラン</h1>

                <div className="text-sm text-zinc-700">月額 1,280円（税込）</div>

                <p className="text-sm text-zinc-600 leading-relaxed">
                    本プランでは、投稿前に確認行為を行った事実を
                    <br />
                    記録として保存することができます。
                </p>

                <p className="text-[11px] text-zinc-400 leading-relaxed">
                    ※ 投稿の結果やアカウント状態を保証するものではありません。
                </p>

                {error && (
                    <div className="text-xs text-red-500 flex flex-col gap-3">
                        <div>{error}</div>
                        <button
                            type="button"
                            onClick={resetAndRetry}
                            className="w-full rounded-xl border border-zinc-300 py-3 text-sm text-zinc-700"
                        >
                            もう一度試す
                        </button>
                    </div>
                )}

                <button
                    type="button"
                    onClick={startCheckout}
                    disabled={disabled}
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