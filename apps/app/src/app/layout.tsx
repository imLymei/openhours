import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";
import { APP } from "@/lib/config";
import { cx } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import Navbar from "./_components/Navbar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: APP.name,
  description: APP.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <body
        className={cx(
          geistSans.variable,
          geistMono.variable,
          "flex h-dvh w-dvw flex-col bg-neutral-50 text-neutral-950 antialiased dark:bg-neutral-950 dark:text-neutral-50",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="container mx-auto flex-1 overflow-auto p-4 pb-24">
            {children}
          </main>
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
