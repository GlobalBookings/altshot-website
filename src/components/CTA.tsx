import { ArrowRight, CheckCircle } from "lucide-react";

const SHOPIFY_APP_URL = "https://apps.shopify.com/altshot";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#9b6cc4] via-[#6a5fd8] to-[#3b82f6]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTEydjRoMTJ6TTI0IDI0djJoMTJ2LTJIMjR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Your images are costing you sales.
              <br />
              Fix them in 2 minutes.
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Join thousands of Shopify merchants who use AltShot to rank higher
              in Google Image Search, load pages faster, and stay ADA compliant.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SHOPIFY_APP_URL}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-primary text-lg font-bold hover:bg-white/90 transition-colors"
              >
                Install Free on Shopify
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                Free forever plan
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
