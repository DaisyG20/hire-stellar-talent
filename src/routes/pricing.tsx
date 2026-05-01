import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Northbound" },
      {
        name: "description",
        content:
          "Three ways to work with Northbound: self-serve access, curated placement support, or fully managed hiring with payroll.",
      },
      { property: "og:title", content: "Pricing — Northbound" },
      {
        property: "og:description",
        content: "Self-serve, curated, or fully managed. Pricing built around outcomes, not seats.",
      },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "Starter",
    tag: "Self-serve",
    price: "Free",
    suffix: "7-day talent access",
    description: "Explore the network on your own and run your own process.",
    features: [
      "Browse the full talent network",
      "Filter by department, level, and skills",
      "Direct outreach to candidates",
      "Interview and decide on your timeline",
    ],
    cta: "Get access",
    highlight: false,
  },
  {
    name: "Growth",
    tag: "Most popular",
    price: "15%",
    suffix: "of first-year placement value",
    description: "We curate. You interview. Best for filling one or two key roles.",
    features: [
      "Everything in Starter",
      "Curated shortlist within 48 hours",
      "Dedicated talent partner",
      "Reference and background checks",
      "Replacement guarantee",
    ],
    cta: "Talk to us",
    highlight: true,
  },
  {
    name: "Scale",
    tag: "Managed",
    price: "Custom",
    suffix: "monthly retainer",
    description: "Fully managed hiring with global payroll, contracts, and ongoing support.",
    features: [
      "Everything in Growth",
      "Multiple concurrent searches",
      "Managed payroll in 80+ countries",
      "Compliance and contracting",
      "Quarterly talent reviews",
    ],
    cta: "Book a strategy call",
    highlight: false,
  },
];

function Pricing() {
  return (
    <Layout>
      <section className="container-px mx-auto max-w-[1400px] pt-24 md:pt-32 pb-16 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-6">Pricing</p>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-[0.98] tracking-tight max-w-4xl mx-auto text-balance">
          Priced for outcomes, <span className="italic text-graphite">not seats.</span>
        </h1>
        <p className="mt-8 max-w-xl mx-auto text-graphite leading-relaxed">
          Three ways to work with us. From self-serve access to fully managed hiring —
          all on the same vetted network.
        </p>
      </section>

      <section className="container-px mx-auto max-w-[1400px] pb-32">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {tiers.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.08}
              className={`relative flex flex-col p-8 md:p-10 ${
                t.highlight ? "bg-ink text-background" : "bg-background"
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className={`text-xs uppercase tracking-[0.16em] ${
                    t.highlight ? "text-background/60" : "text-graphite"
                  }`}
                >
                  {t.tag}
                </span>
                {t.highlight && (
                  <span className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-full">
                    Recommended
                  </span>
                )}
              </div>

              <h2 className="font-display text-3xl font-medium">{t.name}</h2>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  t.highlight ? "text-background/70" : "text-graphite"
                }`}
              >
                {t.description}
              </p>

              <div className="my-10">
                <div className="font-display text-5xl md:text-6xl font-light leading-none">
                  {t.price}
                </div>
                <div
                  className={`mt-3 text-xs uppercase tracking-[0.14em] ${
                    t.highlight ? "text-background/60" : "text-graphite"
                  }`}
                >
                  {t.suffix}
                </div>
              </div>

              <ul className="space-y-3.5 mb-10">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`h-4 w-4 mt-0.5 shrink-0 ${
                        t.highlight ? "text-accent" : "text-foreground"
                      }`}
                    />
                    <span className={t.highlight ? "text-background/90" : "text-foreground/90"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`mt-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full text-sm font-medium transition-colors ${
                  t.highlight
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-graphite">
          Every plan includes our fair-pay standard and replacement guarantee.
        </p>
      </section>
    </Layout>
  );
}
