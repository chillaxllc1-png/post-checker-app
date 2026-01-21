"use client";

import type { Metadata } from "next";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/app/(public)/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Post Checker",
  description: "投稿前に、運用上の確認を行うためのWebサービス",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // トップページ判定
  const isTopPage = pathname === "/";

  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          {/* メインコンテンツ */}
          <main className="flex-1">
            {children}
          </main>

          {/* フッター */}
          <div className={isTopPage ? "opacity-60" : ""}>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}