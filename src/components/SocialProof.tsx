import { Shield, Star, TrendingUp, Zap } from "lucide-react";

const STATS = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "68%",
    label: "of Shopify stores have zero image alt text",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "7%",
    label: "conversion lost per second of page delay",
  },
  {
    icon: <Star className="w-6 h-6" />,
    value: "40%",
    label: "of e-commerce traffic comes from Google Images",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    value: "#1",
    label: "fix cited in ADA/WCAG accessibility lawsuits: alt text",
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-border bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted uppercase tracking-wider mb-10">
          Why image SEO matters
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                {stat.icon}
              </div>
              <p className="text-3xl font-extrabold text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
