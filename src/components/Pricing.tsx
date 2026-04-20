import { ArrowRight, Check } from "lucide-react";

const SHOPIFY_APP_URL = "https://apps.shopify.com/altshot";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for small stores getting started with image SEO.",
    images: "50 images/month",
    features: [
      "AI-powered alt text generation",
      "SEO audit dashboard",
      'One-click "Fix All"',
      "Preview & edit before applying",
      "SEO score per image",
    ],
    cta: "Install Free",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$4.99",
    period: "/month",
    description: "For growing stores that need compression and automation.",
    images: "500 images/month",
    features: [
      "Everything in Free",
      "Bulk image compression (WebP)",
      "SEO filename renaming",
      "Scheduled weekly re-scans",
      "Export audit report (CSV)",
    ],
    cta: "Start Starter Plan",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "For serious stores that want every SEO advantage.",
    images: "Unlimited images",
    features: [
      "Everything in Starter",
      "Target keyword injection",
      "Multi-language alt text (4 languages)",
      "Google Rich Results preview",
      "Priority processing queue",
      "Webhook auto-optimization",
    ],
    cta: "Start Pro Plan",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Simple pricing. No surprises.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Start free, upgrade when you need more. Every plan includes AI
            vision — not templates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.highlighted
                  ? "border-[#6a5fd8] bg-white shadow-xl shadow-[#9b6cc4]/10 scale-[1.02]"
                  : "border-border bg-white"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] text-white text-xs font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted text-sm">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
              </div>

              <div className="px-3 py-2 rounded-lg bg-primary/5 text-primary text-sm font-semibold text-center mb-6">
                {plan.images}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={SHOPIFY_APP_URL}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] text-white hover:opacity-90"
                    : "bg-card text-foreground border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted">
          All plans billed through Shopify. Cancel anytime from your Shopify
          admin. No lock-in.
        </p>
      </div>
    </section>
  );
}
