import { ArrowRight, X } from "lucide-react";

const EXAMPLES = [
  {
    product: "Oversized Knit Jumper",
    before: {
      altText: "",
      filename: "IMG_4523.jpg",
      fileSize: "2.4 MB",
    },
    after: {
      altText:
        "Navy blue oversized knit jumper with ribbed cuffs styled with high-waist jeans on an autumn street",
      filename: "navy-oversized-knit-jumper-front.webp",
      fileSize: "184 KB",
    },
  },
  {
    product: "14K Gold Twisted Band",
    before: {
      altText: "product-image-1",
      filename: "DSC_0092.png",
      fileSize: "3.1 MB",
    },
    after: {
      altText:
        "14K gold twisted band ring with polished finish displayed on white marble surface",
      filename: "gold-twisted-band-ring-polished.webp",
      fileSize: "97 KB",
    },
  },
  {
    product: "CloudRunner 3.0",
    before: {
      altText: "CloudRunner 3.0",
      filename: "Screenshot 2024-03-12.png",
      fileSize: "1.8 MB",
    },
    after: {
      altText:
        "Lightweight grey and neon green running shoes with breathable mesh upper and white cushioned sole",
      filename: "grey-neon-green-running-shoes-side.webp",
      fileSize: "142 KB",
    },
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            See the difference AI makes
          </h2>
          <p className="mt-4 text-lg text-muted">
            Real examples of what AltShot generates. Not templates. Not
            guesswork. Actual image understanding.
          </p>
        </div>

        <div className="space-y-6">
          {EXAMPLES.map((example) => (
            <div
              key={example.product}
              className="rounded-2xl border border-border bg-white overflow-hidden"
            >
              <div className="px-6 py-3 bg-card border-b border-border">
                <span className="text-sm font-semibold text-foreground">
                  {example.product}
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
                {/* Before */}
                <div className="p-6 bg-danger/[0.02]">
                  <div className="flex items-center gap-2 mb-4">
                    <X className="w-4 h-4 text-danger" />
                    <span className="text-xs font-bold text-danger uppercase tracking-wider">
                      Before
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted mb-1">Alt Text</p>
                      <p className="text-sm font-mono bg-danger/5 rounded px-3 py-2 text-danger">
                        {example.before.altText || (
                          <span className="italic">(empty)</span>
                        )}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">Filename</p>
                      <p className="text-sm font-mono bg-danger/5 rounded px-3 py-2 text-danger">
                        {example.before.filename}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">File Size</p>
                      <p className="text-sm font-mono bg-danger/5 rounded px-3 py-2 text-danger">
                        {example.before.fileSize}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-center justify-center py-4 lg:py-0 lg:px-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </div>

                {/* After */}
                <div className="p-6 bg-success/[0.02]">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-bold text-success uppercase tracking-wider">
                      After AltShot
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted mb-1">Alt Text</p>
                      <p className="text-sm font-mono bg-success/5 rounded px-3 py-2 text-success">
                        {example.after.altText}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">Filename</p>
                      <p className="text-sm font-mono bg-success/5 rounded px-3 py-2 text-success">
                        {example.after.filename}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted mb-1">File Size</p>
                      <p className="text-sm font-mono bg-success/5 rounded px-3 py-2 text-success">
                        {example.after.fileSize}{" "}
                        <span className="text-xs opacity-70">
                          (-
                          {Math.round(
                            (1 -
                              parseFloat(example.after.fileSize) /
                                (parseFloat(example.before.fileSize) * 1024)) *
                              100
                          ) || 92}
                          %)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
