import {
  Eye,
  Gauge,
  Globe,
  ImageIcon,
  ScanSearch,
  Search,
  Sparkles,
  Tag,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: "AI Vision Alt Text",
    description:
      "Google Gemini Vision actually looks at your images and describes what's in them. Not templates — real image understanding.",
    example:
      '"Navy blue oversized knit jumper with ribbed cuffs styled with high-waist jeans on an autumn street"',
    tier: "Free",
  },
  {
    icon: <ScanSearch className="w-6 h-6" />,
    title: "SEO Audit Dashboard",
    description:
      "Instant overview of your image SEO health: missing alt text, uncompressed images, bad filenames, and an overall score out of 100.",
    example: null,
    tier: "Free",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'One-Click "Fix All"',
    description:
      "Generate and apply AI alt text to every image missing it. One button. Two minutes. Done.",
    example: null,
    tier: "Free",
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: "Bulk Image Compression",
    description:
      "Convert to WebP and compress to configurable quality. Cut image sizes by 60-80% with no visible difference. Faster pages = more sales.",
    example: null,
    tier: "Starter",
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "SEO Filename Renaming",
    description:
      'Rename "IMG_4523.jpg" to "navy-blue-knit-sweater-front.webp" using AI-suggested filenames that Google loves.',
    example: null,
    tier: "Starter",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Scheduled Re-scans",
    description:
      "Auto-scan new and updated products weekly. Never fall behind on image SEO again.",
    example: null,
    tier: "Starter",
  },
  {
    icon: <Tag className="w-6 h-6" />,
    title: "Keyword Injection",
    description:
      'Specify target keywords per collection (e.g., "sustainable fashion"). AI weaves them into alt text naturally — no keyword stuffing.',
    example: null,
    tier: "Pro",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multi-language Alt Text",
    description:
      "Generate alt text in your store's primary language plus up to 3 additional languages. Reach global shoppers.",
    example: null,
    tier: "Pro",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Google Rich Results Preview",
    description:
      "See exactly how your product images will appear in Google Image Search with current vs. optimized alt text.",
    example: null,
    tier: "Pro",
  },
];

const TIER_COLORS: Record<string, string> = {
  Free: "bg-success/10 text-success",
  Starter: "bg-primary/10 text-primary",
  Pro: "bg-accent/10 text-accent",
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Everything your images need to rank
          </h2>
          <p className="mt-4 text-lg text-muted">
            From AI-generated alt text to bulk compression and smart filename
            renaming — AltShot handles every aspect of image SEO so you don&apos;t
            have to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-white p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {feature.icon}
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-semibold ${TIER_COLORS[feature.tier]}`}
                >
                  {feature.tier}
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
              {feature.example && (
                <p className="mt-3 text-xs text-success bg-success/5 rounded-lg p-3 italic">
                  {feature.example}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
