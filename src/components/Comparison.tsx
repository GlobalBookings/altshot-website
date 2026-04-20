import { Check, Minus } from "lucide-react";

const FEATURES_LIST = [
  {
    feature: "AI Vision Alt Text",
    altshot: "Gemini Vision",
    atai: "Basic AI",
    hextom: false,
    avada: "Basic AI",
  },
  {
    feature: "Image Compression",
    altshot: "WebP + Sharp",
    atai: false,
    hextom: true,
    avada: true,
  },
  {
    feature: "AI Filename Renaming",
    altshot: true,
    atai: false,
    hextom: "Template",
    avada: false,
  },
  {
    feature: "SEO Audit Dashboard",
    altshot: true,
    atai: false,
    hextom: false,
    avada: "Basic",
  },
  {
    feature: "Keyword Injection",
    altshot: true,
    atai: false,
    hextom: false,
    avada: false,
  },
  {
    feature: "Multi-language",
    altshot: true,
    atai: true,
    hextom: false,
    avada: false,
  },
  {
    feature: "One-click Fix All",
    altshot: true,
    atai: false,
    hextom: false,
    avada: false,
  },
  {
    feature: "Price (comparable tier)",
    altshot: "$4.99/mo",
    atai: "$7.99/mo",
    hextom: "$9.99/mo",
    avada: "$34.95/mo",
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-success mx-auto" />;
  if (value === false) return <Minus className="w-5 h-5 text-border mx-auto" />;
  return <span className="text-sm text-foreground">{value}</span>;
}

export default function Comparison() {
  return (
    <section id="compare" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            How AltShot compares
          </h2>
          <p className="mt-4 text-lg text-muted">
            Better AI than AltText.ai. Better compression than Hextom. Better
            price than Avada. No compromises.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 text-sm font-semibold text-muted">
                  Feature
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-sm font-bold text-primary">
                      AltShot
                    </span>
                    <span className="text-xs text-muted">You are here</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-muted text-center">
                  AltText.ai
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-muted text-center">
                  Hextom
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-muted text-center">
                  Avada SEO
                </th>
              </tr>
            </thead>
            <tbody>
              {FEATURES_LIST.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-border ${
                    i % 2 === 0 ? "bg-card" : ""
                  }`}
                >
                  <td className="py-4 px-4 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center bg-primary/5">
                    <CellValue value={row.altshot} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.atai} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.hextom} />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <CellValue value={row.avada} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
