"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question: "How is AltShot different from other alt text apps?",
    answer:
      "Most alt text apps use templates like \"{product_title} - {variant}\" which produce generic text like \"Blue Sweater - Size M\". AltShot uses Google Gemini Vision to actually look at your images and describe what's visible: colors, materials, styles, settings. The result is alt text that reads naturally and ranks in Google Image Search.",
  },
  {
    question: "Will this slow down my store?",
    answer:
      "No. AltShot runs entirely in the background. It reads your product images via the Shopify API, processes them with AI, and writes the alt text back. Your storefront is never affected. In fact, if you use image compression, your store will load faster.",
  },
  {
    question: "Can I review the AI-generated alt text before it's applied?",
    answer:
      "Absolutely. Every generated alt text is shown in a preview table where you can edit it inline before applying. You can also use the bulk \"Fix All\" to apply everything at once if you trust the AI output (most merchants do after seeing the first few results).",
  },
  {
    question: "What Shopify permissions does AltShot need?",
    answer:
      "Only two: read_products (to scan your images) and write_products (to update alt text). We don't access customer data, orders, or any other store information. Minimal permissions = maximum trust.",
  },
  {
    question: "What happens if I uninstall?",
    answer:
      "Any alt text that was already applied to your Shopify images stays on your store permanently. We don't remove our work when you leave. Your data in our system is deleted within 48 hours per GDPR requirements.",
  },
  {
    question: "Does image compression replace my original images?",
    answer:
      "We upload the compressed version as a new image and swap it with the original on your product listing. The process is fully reversible — you can always re-upload originals. Compression typically reduces file sizes by 60-80% with no visible quality loss.",
  },
  {
    question: "What languages are supported for alt text?",
    answer:
      "On the Pro plan, you can generate alt text in your store's primary language plus up to 3 additional languages. We support all major languages including English, Spanish, French, German, Portuguese, Japanese, Korean, Chinese, and many more.",
  },
  {
    question: "How does the free plan work?",
    answer:
      "The free plan gives you 50 AI-processed images per month, forever. That includes the full SEO audit dashboard, AI alt text generation, and the one-click Fix All feature. No credit card required. Upgrade to Starter or Pro when you need more capacity.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted">
            Everything you need to know about AltShot.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-white overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-card transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
