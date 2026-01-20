// 第1層（無料）FIX
// - 判定は pass / caution / ng を表示するのみ
// - 記録しない
// - 理由説明しない
// - 分岐は行わない

"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ResultStatus from "../components/ResultStatus";

type ResultType = "pass" | "caution" | "ng";

export default function ResultClient() {
    const searchParams = useSearchParams();

    const rawType = searchParams.get("type");
    const type: ResultType =
        rawType === "pass" || rawType === "caution" || rawType === "ng"
            ? rawType
            : "pass";

    const text = searchParams.get("text") || "";

    const intentUrl = useMemo(() => {
        const qs = new URLSearchParams();
        if (text.trim()) qs.set("text", text);
        return `https://twitter.com/intent/tweet?${qs.toString()}`;
    }, [text]);

    return (
        <div className="w-full max-w-sm flex flex-col gap-10 text-center">
            <div className="text-xs text-zinc-400 tracking-wide">
                Post Checker
            </div>

            <ResultStatus type={type} />

            <p className="text-[11px] text-zinc-400">
                ※ この結果は、投稿の可否やアカウント状態を保証するものではありません。
            </p>

            <p className="text-sm text-zinc-600">
                この投稿は確認されましたが、
                <br />
                運用記録の対象ではありません。
            </p>

            <a
                href={intentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-xl bg-black py-4 text-white text-sm text-center"
            >
                Xの投稿画面を開く
            </a>
        </div>
    );
}