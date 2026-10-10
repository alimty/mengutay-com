import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Aroro — Omnichannel & Hardware-Aware AI Personal Assistant | Mengutay Lab",
  description:
    "Aroro is a privacy-first, local-aware personal AI assistant built by Mengutay Lab. Control your data, hardware, workflows, and communications across web, voice, and messaging.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
