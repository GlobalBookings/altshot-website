import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support & Help — AltShot",
  description:
    "Get help with AltShot. Find answers to common questions, learn how to get started, and contact our support team.",
};

const FAQS = [
  {
    question: "How do I scan my store?",
    answer:
      'After installing AltShot, open the app from your Shopify admin. Click the "Scan Store" button on the dashboard. AltShot will analyze all your product images and generate an SEO health report within seconds.',
  },
  {
    question: "Will AI alt text hurt my SEO?",
    answer:
      "No — AI-generated alt text is designed to improve your SEO by providing descriptive, keyword-rich text for images that are missing alt text or have poor descriptions. You can always review and edit the suggestions before applying them to your store.",
  },
  {
    question: "Can I edit the generated alt text?",
    answer:
      "Absolutely. AltShot generates alt text as suggestions. You can edit any suggestion directly in the app before applying it. You can also regenerate alt text for individual images if you'd like a different result.",
  },
  {
    question: "What happens when I compress images?",
    answer:
      "Image compression reduces file sizes to improve page load speed. Compressed images replace the originals on your Shopify store. This process is irreversible, so we recommend keeping backups of your original images. Alt text is preserved during compression.",
  },
  {
    question: "How do I upgrade my plan?",
    answer:
      'You can upgrade your plan directly within the AltShot app. Go to the dashboard and click on "Upgrade" or visit the pricing section. Plan changes are processed through Shopify\'s billing system.',
  },
  {
    question: "How do I uninstall?",
    answer:
      'To uninstall AltShot, go to your Shopify admin → Settings → Apps and sales channels → AltShot → Remove app. Your data will be deleted from our systems within 30 days. Any changes already made to your images (alt text, compression) will remain on your store.',
  },
];

const STEPS = [
  {
    number: "1",
    title: "Install from Shopify App Store",
    description:
      "Search for AltShot in the Shopify App Store and click Install. Approve the required permissions to get started.",
  },
  {
    number: "2",
    title: "Click Scan Store",
    description:
      "Open AltShot from your Shopify admin and click Scan Store. We'll analyze every product image in your store.",
  },
  {
    number: "3",
    title: "Review AI suggestions",
    description:
      "Browse through AI-generated alt text and SEO scores for each image. Edit any suggestions to match your brand voice.",
  },
  {
    number: "4",
    title: "Apply with one click",
    description:
      "Apply optimized alt text to individual images or in bulk. Your store's image SEO improves instantly.",
  },
];

export default function Support() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#9b6cc4] via-[#6a7fd8] to-[#3b82f6] bg-clip-text text-transparent mb-4">
            Support &amp; Help
          </h1>
          <p className="text-lg text-muted mb-12">
            Need help with AltShot? We&apos;re here for you. Reach out at{" "}
            <a
              href="mailto:support@altshot.co"
              className="text-primary hover:underline font-medium"
            >
              support@altshot.co
            </a>{" "}
            — we typically respond within 24 hours on business days.
          </p>

          {/* Getting Started */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Getting Started
            </h2>
            <div className="space-y-6">
              {STEPS.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {FAQS.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Still need help?
            </h2>
            <p className="text-muted mb-6">
              Our support team is ready to assist you with any questions or
              issues.
            </p>
            <a
              href="mailto:support@altshot.co"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#9b6cc4] to-[#3b82f6] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Email Support
            </a>
            <p className="text-sm text-muted mt-4">
              We typically respond within 24 hours on business days.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
