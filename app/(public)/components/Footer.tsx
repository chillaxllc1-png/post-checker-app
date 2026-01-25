// app/(public)/components/Footer.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const isTopPage = pathname === "/";

    return (
        <footer
            className={`w-full py-6 ${isTopPage ? "opacity-60" : "opacity-100"
                }`}
        >
            <div className="mx-auto max-w-sm flex flex-col items-center gap-2 text-[10px] text-zinc-400">
                <Link href="/service-description" className="hover:text-zinc-600">
                    サービスについて
                </Link>

                {/* PAY.JP審査用：必ず表示 */}
                <Link href="/pricing" className="hover:text-zinc-600">
                    料金について
                </Link>

                <Link href="/terms" className="hover:text-zinc-600">
                    利用規約
                </Link>

                <Link href="/privacy" className="hover:text-zinc-600">
                    プライバシーポリシー
                </Link>

                <Link href="/tokutei" className="hover:text-zinc-600">
                    特定商取引法に基づく表記
                </Link>

                {/* お問い合わせはページ導線を正とする */}
                <Link href="/contact" className="hover:text-zinc-600">
                    お問い合わせ
                </Link>

                <a
                    href="/record-mode/complete"
                    className="text-[10px] text-zinc-400 underline underline-offset-4"
                >
                    審査確認用（決済後画面）
                </a>
            </div>
        </footer>
    );
}