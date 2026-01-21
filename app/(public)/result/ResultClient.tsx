// 第1層（無料）FIX
// - 判定は pass / caution / ng を表示するのみ（評価ではない）
// - 記録しない
// - 理由説明しない
// - 第2層は“分岐UIのみ”用意し、機能は未実装

"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import ResultStatus from "../components/ResultStatus";
import { useResultMode } from "./useResultMode";
import ResultBranch from "../components/ResultBranch";

type ResultType = "pass" | "caution" | "ng";

export default function ResultClient() {
    const searchParams = useSearchParams();

    // --- type を安全に確定 ---
    const rawType = searchParams.get("type");
    const type: ResultType =
        rawType === "pass" || rawType === "caution" || rawType === "ng"
            ? rawType
            : "pass";

    const text = searchParams.get("text") || "";

    // --- 第2層への配線（今は free 固定想定）---
    // 判定・記録・保証・集計には一切使わない
    const mode = useResultMode(); // 現状は常に "free"

    // --- X 投稿画面 URL（テキストのみ引き継ぐ） ---
    const intentUrl = useMemo(() => {
        const base = "https://twitter.com/intent/tweet";
        const qs = new URLSearchParams();
        if (text.trim()) qs.set("text", text);
        return `${base}?${qs.toString()}`;
    }, [text]);

    return (
        <div className="w-full max-w-sm flex flex-col gap-10 text-center">
            {/* サービス名（最小・感情を乗せない） */}
            <div className="text-xs text-zinc-400 tracking-wide">
                Post Checker
            </div>

            {/* 結果ステータス（評価・判断ではない） */}
            <ResultStatus type={type} />

            {/* 共通注意書き（必須・常時表示） */}
            <p className="text-[11px] text-zinc-400 leading-relaxed">
                ※ この結果は、投稿の可否やアカウント状態を保証するものではありません。
            </p>

            {/* 第1層 / 第2層 分岐UI（機能は未実装） */}
            <ResultBranch mode={mode} intentUrl={intentUrl} />

            {/* 戻る動線（PC-5 FIX） */}
            <a
                href="/"
                className="text-xs text-zinc-400 underline underline-offset-4"
            >
                戻る
            </a>
        </div>
    );
}