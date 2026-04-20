"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#compare", label: "Compare" },
  { href: "#faq", label: "FAQ" },
];

const SHOPIFY_APP_URL = "https://apps.shopify.com/altshot";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <Image
              src="/logo.png"
              alt="AltShot logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-extrabold bg-gradient-to-r from-[#9b6cc4] via-[#6a7fd8] to-[#3b82f6] bg-clip-text text-transparent">
              AltShot
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={SHOPIFY_APP_URL}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Install Free on Shopify
            </a>
          </div>

          <button
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-muted hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={SHOPIFY_APP_URL}
              className="block w-full text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Install Free on Shopify
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
