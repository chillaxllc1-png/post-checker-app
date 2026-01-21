import Link from "next/link";

type Props = {
    variant?: "normal" | "soft";
};

export default function Footer({ variant = "normal" }: Props) {
    return (
        <footer
            className={`w-full py-6 ${variant === "soft" ? "opacity-60" : "opacity-100"
                }`}
        >
            <div className="mx-auto max-w-sm flex flex-col items-center gap-2 text-[10px] text-zinc-400">
                <Link href="/service-description" className="hover:text-zinc-600">
                    サービスについて
                </Link>

                {/* PAY.JP審査用：必ず出す */}
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

                <Link href="/contact" className="hover:text-zinc-600">
                    お問い合わせ
                </Link>
            </div>
        </footer>
    );
}