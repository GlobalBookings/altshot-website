import {
  ArrowRight,
  CheckCircle,
  ImageIcon,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const SHOPIFY_APP_URL = "https://apps.shopify.com/altshot";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b6cc4]/5 via-transparent to-[#3b82f6]/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#9b6cc4]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3b82f6]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#9b6cc4]/10 to-[#3b82f6]/10 text-[#6a5fd8] text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Powered by Google Gemini Vision AI
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Fix your image SEO
            <br />
            <span className="bg-gradient-to-r from-[#9b6cc4] via-[#6a7fd8] to-[#3b82f6] bg-clip-text text-transparent">
              in one click
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            AltShot scans every product image in your Shopify store, generates
            AI-powered alt text, compresses images, and renames files to
            SEO-friendly slugs. Rank higher. Load faster. Sell more.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SHOPIFY_APP_URL}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] text-white text-lg font-bold hover:opacity-90 transition-all animate-pulse-glow"
            >
              Install Free on Shopify
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-border text-foreground text-lg font-semibold hover:border-[#9b6cc4] hover:text-[#6a5fd8] transition-colors"
            >
              See How It Works
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-success" />
              50 images free/month
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-success" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-success" />
              2-minute setup
            </span>
          </div>
        </div>

        {/* Dashboard Preview Mock */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-border bg-white shadow-2xl shadow-[#9b6cc4]/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
              <div className="w-3 h-3 rounded-full bg-danger/60" />
              <div className="w-3 h-3 rounded-full bg-warning/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
              <Image
                src="/logo.png"
                alt="AltShot"
                width={16}
                height={16}
                className="w-4 h-4 ml-2"
              />
              <span className="text-xs font-semibold bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] bg-clip-text text-transparent">
                AltShot
              </span>
              <span className="text-xs text-muted">
                — Image SEO Dashboard
              </span>
            </div>
            <div className="p-8 bg-gradient-to-b from-card to-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <DashboardStat
                  icon={<ImageIcon className="w-5 h-5 text-[#6a5fd8]" />}
                  label="Total Images"
                  value="1,247"
                />
                <DashboardStat
                  icon={<span className="text-lg">🔴</span>}
                  label="Missing Alt Text"
                  value="847"
                  accent="text-danger"
                />
                <DashboardStat
                  icon={<span className="text-lg">⚡</span>}
                  label="Uncompressed"
                  value="1,103"
                  accent="text-warning"
                />
                <DashboardStat
                  icon={<TrendingUp className="w-5 h-5 text-success" />}
                  label="SEO Score"
                  value="23/100"
                  accent="text-danger"
                />
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">
                    847 images need alt text. Fix them all?
                  </p>
                </div>
                <div className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] text-white font-semibold text-sm cursor-default">
                  Fix All Images
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <ImageRow
                  product="Navy Oversized Knit Jumper"
                  current=""
                  suggested="Navy blue oversized knit jumper with ribbed cuffs styled with high-waist jeans"
                  status="missing"
                />
                <ImageRow
                  product="14K Gold Twisted Band"
                  current="IMG_4523.jpg"
                  suggested="14K gold twisted band ring with polished finish on white surface"
                  status="poor"
                />
                <ImageRow
                  product="CloudRunner 3.0 Shoes"
                  current="Lightweight grey and neon green running shoes with mesh upper"
                  suggested=""
                  status="good"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardStat({
  icon,
  label,
  value,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  accent?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="text-xs text-muted font-medium">{label}</span>
      </div>
      <p className={`text-2xl font-bold ${accent || "text-foreground"}`}>
        {value}
      </p>
    </div>
  );
}

function ImageRow({
  product,
  current,
  suggested,
  status,
}: {
  product: string;
  current: string;
  suggested: string;
  status: "missing" | "poor" | "good";
}) {
  const statusColors = {
    missing: "bg-danger/10 text-danger",
    poor: "bg-warning/10 text-warning",
    good: "bg-success/10 text-success",
  };
  const statusLabels = {
    missing: "Missing",
    poor: "Poor",
    good: "Good",
  };

  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-card border border-border text-sm">
      <div className="w-10 h-10 rounded-lg bg-border/50 flex items-center justify-center flex-shrink-0">
        <ImageIcon className="w-5 h-5 text-muted" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground truncate">{product}</p>
        <p className="text-xs text-muted truncate">
          {current || <span className="italic">No alt text</span>}
        </p>
      </div>
      {suggested && (
        <div className="hidden lg:block flex-1 min-w-0">
          <p className="text-xs text-muted mb-0.5">AI Suggestion:</p>
          <p className="text-xs text-success truncate">{suggested}</p>
        </div>
      )}
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}
      >
        {statusLabels[status]}
      </span>
    </div>
  );
}
