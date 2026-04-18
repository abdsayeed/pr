import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingNav from "@/components/FloatingNav";
import Sidebar from "@/components/Sidebar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdullah Al Sayeed | Full-Stack & ML Engineer",
  description:
    "London-based full-stack developer building web applications that solve real problems — from AI-powered platforms to cloud-deployed APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="min-h-screen font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-foreground">
        <FloatingNav />
        {/* flex-col-reverse: on mobile sidebar renders after main (visually below) */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col-reverse lg:flex-row gap-8 lg:gap-10 relative">
          <Sidebar />
          <main className="flex-1 min-w-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
