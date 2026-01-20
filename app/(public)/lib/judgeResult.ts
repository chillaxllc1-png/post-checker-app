export type ResultType = "pass" | "caution" | "ng";

export function judgeResult(text: string): ResultType {
    if (!text.trim()) {
        return "pass";
    }

    // 強めワード（例・あとで差し替えOK）
    const strongPatterns = [
        /絶対/,
        /100%/,
        /確実/,
        /今すぐ/,
        /限定/,
    ];

    const hitStrong = strongPatterns.some((p) => p.test(text));

    if (hitStrong) {
        return "ng";
    }

    // 少し引っかかる可能性
    if (text.length > 200) {
        return "caution";
    }

    return "pass";
}