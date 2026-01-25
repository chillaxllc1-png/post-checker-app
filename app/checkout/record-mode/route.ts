import { NextResponse } from "next/server";

// PAY.JP は CommonJS で読み込む（Next.js安定策）
const Payjp = require("payjp");

// Node Runtime 明示（Edge 回避）
export const runtime = "nodejs";

const payjp = Payjp(process.env.PAYJP_SECRET_KEY);

export async function POST() {
    const checkout = await payjp.checkout.sessions.create({
        mode: "subscription",

        success_url: `${process.env.APP_URL}/record-mode/complete`,
        cancel_url: `${process.env.APP_URL}/record-mode`,

        subscription_data: {
            items: [
                {
                    plan: process.env.PAYJP_PLAN_ID,
                },
            ],
        },

        metadata: {
            service: "post-checker",
            mode: "record",
        },
    });

    return NextResponse.redirect(checkout.url, { status: 303 });
}