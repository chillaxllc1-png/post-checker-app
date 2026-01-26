import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";
import { users } from "../_store";

/**
 * Login API（仮実装・構造FIX版）
 *
 * - signup と同じ users Map を参照
 * - 認証成功時のみ Cookie を発行
 * - 遷移先はフロントに委ねる
 */

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Invalid request" },
                { status: 400 }
            );
        }

        const normalizedEmail = email.toLowerCase().trim();
        const user = users.get(normalizedEmail);

        if (!user) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        const isValid = await bcrypt.compare(password, user.passwordHash);

        if (!isValid) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        const res = NextResponse.json({
            ok: true,
            redirectTo: "/account",
        });

        res.cookies.set("session_user", user.id, {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 30, // 30日
        });

        return res;
    } catch {
        return NextResponse.json(
            { error: "Login failed" },
            { status: 500 }
        );
    }
}