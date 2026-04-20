import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
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
            <p className="text-sm text-muted max-w-md leading-relaxed">
              AI-powered image SEO optimizer for Shopify stores. Fix missing alt
              text, compress images, and boost your search rankings in one click.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#compare"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Compare
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} AltShot. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built for Shopify merchants who care about SEO.
          </p>
        </div>
      </div>
    </footer>
  );
}
