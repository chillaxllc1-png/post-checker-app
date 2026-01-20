export type SilentLog = {
    id: string;
    createdAt: Date;
    resultType: "pass" | "caution" | "ng";
    userId?: string; // 未ログイン前提なので optional
};