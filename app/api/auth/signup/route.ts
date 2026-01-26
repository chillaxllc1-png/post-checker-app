import { NextRequest, NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";
import crypto from "crypto";
import { users } from "../_store";

/**
 * Signup API（仮実装・構造FIX版）
 *
 * - DB はまだ無い前提
 * - users Map を signup / login で共有する
 * - 今回は「責務」と「流れ」を正しく固定する
 */

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        // 入力チェック
        if (!email || !password) {
            return NextResponse.json(
                { error: "Invalid request" },
                { status: 400 }
            );
        }

        const normalizedEmail = email.toLowerCase().trim();

        // 既存ユーザーチェック
        if (users.has(normalizedEmail)) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 409 }
            );
        }

        // パスワードハッシュ化
        const passwordHash = await bcrypt.hash(password, 10);

        const userId = crypto.randomUUID();

        // ユーザー作成（仮）
        users.set(normalizedEmail, {
            id: userId,
            email: normalizedEmail,
            passwordHash,
        });

        // セッションCookie発行
        const res = NextResponse.json({
            ok: true,
            redirectTo: "/checkout",
        });

        res.cookies.set("session_user", userId, {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 30, // 30日
        });

        return res;
    } catch (err) {
        return NextResponse.json(
            { error: "Signup failed" },
            { status: 500 }
        );
    }
}