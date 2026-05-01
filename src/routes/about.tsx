import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Northbound" },
      {
        name: "description",
        content:
          "Northbound is built on the belief that talent is global and opportunity should be too — paid fairly, treated seriously, partnered with long-term.",
      },
      { property: "og:title", content: "About Northbound" },
      {
        property: "og:description",
        content: "Why we exist, who we work with, and the standards we hold the network to.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="container-px mx-auto max-w-[1400px] pt-24 md:pt-32 pb-24">
        <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-6">About</p>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-[0.98] tracking-tight max-w-4xl text-balance">
          We hire the way we'd want{" "}
          <span className="italic text-graphite">to be hired.</span>
        </h1>
      </section>

      <section className="container-px mx-auto max-w-[1400px] pb-28 md:pb-40 grid md:grid-cols-12 gap-12 md:gap-20">
        <Reveal className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-6">Mission</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-balance" id="mission">
            Talent is global. Opportunity{" "}
            <span className="italic">should be too.</span>
          </h2>
        </Reveal>

        <div className="md:col-span-7 space-y-6 text-base md:text-lg text-graphite leading-relaxed">
          <Reveal>
            <p>
              The hiring industry has spent two decades pushing rates down. Marketplaces
              optimized for volume, agencies optimized for fees, and quality became
              someone else's problem.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p>
              We started Northbound because we kept seeing the same pattern — companies
              hiring cheap, regretting it, and re-hiring expensive. The total cost was
              always higher. The output was always lower.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              So we built the opposite: a small, curated network of senior global
              professionals, paid at senior local rates, partnered with companies who
              are serious about what they're building.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink text-background py-28 md:py-36">
        <div className="container-px mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-background/60 mb-6">
              The standards
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight max-w-3xl text-balance">
              Four commitments we don't compromise on.
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-background/10">
            {[
              ["Fair pay", "Rates benchmarked to senior local markets — never the cheapest available."],
              ["Quality first", "We turn down 96.6% of applicants. Standards over volume, always."],
              ["Long partnerships", "We optimize for placements that last years, not weeks."],
              ["No middleman tax", "Transparent pricing. Talent earns their full rate."],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.06} className="bg-ink p-8 md:p-10">
                <h3 className="font-display text-2xl font-medium mb-3">{k}</h3>
                <p className="text-background/70 leading-relaxed">{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1400px] py-32 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight text-balance max-w-3xl mx-auto">
            Ready to hire <span className="italic">differently?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Book a call
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </Layout>
  );
}
