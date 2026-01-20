import { SilentLog } from "./types";

/**
 * 内部記録用（現在は未使用）
 * - UIから呼ばない
 * - 判定に使わない
 * - 分析に使わない
 */
export async function writeSilentLog(_log: SilentLog): Promise<void> {
    // TODO:
    // - DB接続（Supabase / SQLite / Prisma など）
    // - 現段階では何もしない
    return;
}