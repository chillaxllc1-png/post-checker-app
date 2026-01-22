import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/(public)/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Post Checker",
    template: "%s | Post Checker",
  },
  description:
    "Post Checker は、X（旧Twitter）運用において、投稿前に所定の確認行為を行ったという事実を記録するためのWebサービスです。投稿内容の可否判断や成果を保証するものではありません。",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Post Checker",
    description:
      "投稿前に所定の確認行為を行ったという事実を記録するためのWebサービスです。",
    url: "https://post-checker.com",
    siteName: "Post Checker",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Post Checker",
    description:
      "投稿前に所定の確認行為を行ったという事実を記録するためのWebサービスです。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <div className="min-h-screen flex flex-col">
          {/* メインコンテンツ */}
          <main className="flex-1">
            {children}
          </main>

          {/* フッター（全画面共通） */}
          <Footer />
        </div>
      </body>
    </html>
  );
}