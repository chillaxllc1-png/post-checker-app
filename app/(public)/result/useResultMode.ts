"use client";

/**
 * 第1層 / 第2層の分岐を決める最小フック
 * - 今は常に free
 * - 将来、ログインや課金状態で paid に切り替える
 * - 判断・評価・保証ロジックは一切持たせない
 */
export type ResultMode = "free" | "paid";

export function useResultMode(): ResultMode {
    // TODO: 将来ここで
    // - ログイン状態
    // - サブスク状態
    // を見る

    return "free";
}