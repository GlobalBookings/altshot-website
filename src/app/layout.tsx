import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "AltShot — AI Image SEO & Speed for Shopify",
  description:
    "Fix missing alt text, compress images & boost SEO in one click. AI-powered image optimization for Shopify stores. From $0/mo.",
  keywords: [
    "shopify image seo",
    "alt text generator",
    "shopify image optimizer",
    "ai alt text",
    "shopify page speed",
    "image compression shopify",
    "shopify seo app",
    "webp shopify",
    "product image optimization",
    "ecommerce seo",
  ],
  openGraph: {
    title: "AltShot — AI Image SEO & Speed for Shopify",
    description:
      "Fix missing alt text, compress images & boost SEO in one click. AI-powered image optimization for Shopify stores.",
    url: "https://altshot.co",
    siteName: "AltShot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AltShot — AI Image SEO & Speed for Shopify",
    description:
      "Fix missing alt text, compress images & boost SEO in one click.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
