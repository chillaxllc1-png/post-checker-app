/**
 * v1 仮課金ストア（後で必ずDBに置き換える）
 *
 * 方針：
 * - 課金状態の「唯一の真実」
 * - Cookieは使わない
 * - Webhook が唯一の更新元
 * - Account / Cancel / Status 表示はここを参照
 */

export type SubscriptionStatus = "active" | "canceled";

export type Subscription = {
    subscriptionId: string;
    status: SubscriptionStatus;
    nextBillingDate?: string;
};

export const subscriptions = new Map<string, Subscription>();