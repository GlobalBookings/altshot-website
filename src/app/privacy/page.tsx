import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — AltShot",
  description:
    "Learn how AltShot collects, uses, and protects your data. Privacy policy for the AI-powered Shopify image SEO app.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#9b6cc4] via-[#6a7fd8] to-[#3b82f6] bg-clip-text text-transparent mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted mb-12">
            Last updated: April 20, 2026
          </p>

          <div className="space-y-10 text-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p>
                AltShot (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
                operates the AltShot application for Shopify. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you install and use our app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Information We Collect
              </h2>
              <p className="mb-3">
                When you install and use AltShot, we collect the following
                information from your Shopify store:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Shop domain</strong> — your Shopify store URL, used to
                  identify your account
                </li>
                <li>
                  <strong>Product data</strong> — product titles, images, and
                  tags, used to generate AI alt text and optimize images
                </li>
                <li>
                  <strong>Usage metrics</strong> — how many images you scan,
                  optimize, and compress, used to track plan limits
                </li>
              </ul>
              <p className="mt-4 font-semibold">
                We do NOT collect customer personally identifiable information
                (PII). We do not access your customers&apos; names, emails,
                addresses, or payment details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate AI-powered alt text for your product images</li>
                <li>Compress and optimize your product images</li>
                <li>Score and report on your store&apos;s image SEO health</li>
                <li>
                  Track usage against your plan limits (free or paid tier)
                </li>
                <li>Improve and maintain the AltShot service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="mb-3">
                We use the following third-party services to operate AltShot:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Gemini API</strong> — product images are sent to
                  Google&apos;s Gemini API for AI analysis and alt text
                  generation. Google&apos;s privacy policy applies to their
                  processing of this data.
                </li>
                <li>
                  <strong>DigitalOcean</strong> — our application infrastructure
                  is hosted on DigitalOcean.
                </li>
                <li>
                  <strong>Shopify</strong> — AltShot operates as a Shopify
                  embedded app and communicates with Shopify&apos;s APIs to
                  access and update your store data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Shopify Data Access
              </h2>
              <p>
                AltShot only accesses data permitted by the OAuth scopes you
                grant during installation. We request the minimum scopes
                necessary to provide our service. You can review the permissions
                granted to AltShot in your Shopify admin under{" "}
                <em>Settings → Apps and sales channels</em>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p>
                We retain your store data for as long as the app is installed.
                When you uninstall AltShot, all associated shop data is deleted
                from our systems within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">GDPR Compliance</h2>
              <p>
                AltShot complies with GDPR requirements and handles Shopify
                mandatory privacy webhooks:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>customers/data_request</strong> — we respond to
                  requests for customer data. Since we do not store customer PII,
                  these responses confirm no data is held.
                </li>
                <li>
                  <strong>customers/redact</strong> — we process customer data
                  deletion requests. Since we do not store customer PII, no
                  action is required beyond acknowledgment.
                </li>
                <li>
                  <strong>shop/redact</strong> — when a shop uninstalls our app
                  and the erasure period elapses, we delete all shop-related
                  data.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p>
                AltShot does not use cookies. Authentication is handled
                entirely through Shopify session tokens, which are managed by
                the Shopify platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p>
                We take the security of your data seriously and implement the
                following measures:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>All data is encrypted in transit using TLS</li>
                <li>Data is encrypted at rest on our servers</li>
                <li>
                  Access to your data is limited to authorized systems only
                </li>
                <li>
                  We regularly review and update our security practices
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                California Residents (CCPA)
              </h2>
              <p>
                If you are a California resident, please note that we do not
                sell personal information. We collect and use information solely
                to provide and improve the AltShot service as described in this
                policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Children&apos;s Privacy
              </h2>
              <p>
                AltShot is not directed at children under the age of 13. We do
                not knowingly collect personal information from children under
                13. If we become aware that we have collected data from a child
                under 13, we will take steps to delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. When we
                make changes, we will notify you via the AltShot app dashboard
                and update the &quot;Last updated&quot; date at the top of this
                page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at{" "}
                <a
                  href="mailto:support@altshot.co"
                  className="text-primary hover:underline font-medium"
                >
                  support@altshot.co
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
