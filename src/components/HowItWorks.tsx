import { ArrowRight, Download, Eye, ScanSearch, Sparkles } from "lucide-react";

const SHOPIFY_APP_URL = "https://apps.shopify.com/altshot";

const STEPS = [
  {
    number: "01",
    icon: <Download className="w-7 h-7" />,
    title: "Install in 30 seconds",
    description:
      "Add AltShot from the Shopify App Store. Approve two permissions (read & write products). That's it.",
  },
  {
    number: "02",
    icon: <ScanSearch className="w-7 h-7" />,
    title: "Auto-scan your store",
    description:
      "AltShot scans every product image and gives you an instant SEO audit: missing alt text, uncompressed images, bad filenames.",
  },
  {
    number: "03",
    icon: <Sparkles className="w-7 h-7" />,
    title: "AI generates alt text",
    description:
      "Google Gemini Vision analyzes each image and writes descriptive, SEO-optimized alt text. Preview and edit before applying.",
  },
  {
    number: "04",
    icon: <Eye className="w-7 h-7" />,
    title: 'Click "Fix All" and done',
    description:
      "One click applies AI alt text to all your images. Your SEO score jumps. Google starts indexing. Sales follow.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            From zero to optimized in 2 minutes
          </h2>
          <p className="mt-4 text-lg text-muted">
            No configuration needed. No learning curve. AltShot does the heavy
            lifting so you can focus on selling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(100%_-_16px)] w-[calc(100%_-_32px)] z-10">
                  <ArrowRight className="w-6 h-6 text-border mx-auto" />
                </div>
              )}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4">
                  {step.icon}
                </div>
                <div className="text-xs font-bold text-primary/60 mb-2">
                  STEP {step.number}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={SHOPIFY_APP_URL}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] text-white text-lg font-bold hover:opacity-90 transition-opacity"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
