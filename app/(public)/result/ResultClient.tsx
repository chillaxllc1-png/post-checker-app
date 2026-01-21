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

    const rawType = searchParams.get("type");
    const type: ResultType =
        rawType === "pass" || rawType === "caution" || rawType === "ng"
            ? rawType
            : "pass";

    const text = searchParams.get("text") || "";
    const mode = useResultMode(); // 現状 free 固定

    const intentUrl = useMemo(() => {
        const base = "https://twitter.com/intent/tweet";
        const qs = new URLSearchParams();
        if (text.trim()) qs.set("text", text);
        return `${base}?${qs.toString()}`;
    }, [text]);

    return (
        <div className="w-full max-w-sm flex flex-col gap-10 text-center">
            {/* サービス名 */}
            <div className="text-xs text-zinc-400 tracking-wide">
                Post Checker
            </div>

            {/* 結果表示（評価ではない） */}
            <ResultStatus type={type} />

            {/* 中核メッセージ（ServiceDescriptionと完全一致） */}
            <p className="text-sm text-zinc-600 leading-relaxed">
                この画面は、
                <br />
                投稿前に所定の確認行為を行ったという
                <br />
                事実を表示するものです。
            </p>

            {/* 注意書き（必須・固定） */}
            <p className="text-[11px] text-zinc-400 leading-relaxed">
                ※ 本結果は、投稿内容の可否判断、
                <br />
                アカウント状態の評価、
                <br />
                凍結・制限の防止や解除を
                <br />
                保証するものではありません。
            </p>

            {/* 分岐UI（第2層：今は導線のみ） */}
            <ResultBranch mode={mode} intentUrl={intentUrl} />

            {/* 行為の終了宣言（誤解を生まない） */}
            <p className="text-[10px] text-zinc-400">
                <p className="text-[10px] text-zinc-400">
                    確認行為はここで終了しています。
                </p>
            </p>

            {/* 戻る動線 */}
            <a
                href="/"
                className="text-xs text-zinc-400 underline underline-offset-4"
            >
                戻る
            </a>
        </div>
    );
}