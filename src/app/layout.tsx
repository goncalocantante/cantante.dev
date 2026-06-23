import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";

const playfairDislplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Cantante | Software Developer CV",
  description: "Online CV of Gonçalo Cantante, Full Stack Software Developer with experience in React, Node.js, and PostgreSQL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-dvh bg-black scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${playfairDislplay.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-highlight text-black px-4 py-2 rounded-md font-semibold z-[100] transition-colors focus:ring-2 focus:ring-highlight focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
