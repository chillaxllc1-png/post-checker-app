/**
 * 運用記録用（内部専用）
 *
 * 役割：
 * - 「確認を通した」という事実を将来保存するための器
 *
 * 現時点のルール（FIX）：
 * - UIからは直接呼ばない
 * - 判定ロジックには使わない
 * - 分析・集計・評価には使わない
 * - 今は何も保存しない（NO-OP）
 */

export type SilentLog = {
    id: string;
    createdAt: Date;
    mode: "free" | "record";
    resultType: "pass" | "caution" | "ng";
};

export async function writeSilentLog(_log: SilentLog): Promise<void> {
    // TODO（将来）:
    // - DB保存
    // - アカウント紐付け
    // - 課金状態との連動
    // 今は絶対に何もしない
    return;
}