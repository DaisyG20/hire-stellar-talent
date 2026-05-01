import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { TalentCard } from "@/components/site/TalentCard";
import { talent } from "@/data/talent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northbound — Hire vetted global talent, without the risk" },
      {
        name: "description",
        content:
          "Northbound connects companies with vetted remote professionals on fair-pay terms. Curated talent, managed hiring, and optional payroll — built for serious teams.",
      },
      { property: "og:title", content: "Northbound — Hire vetted global talent" },
      {
        property: "og:description",
        content:
          "A curated network of vetted global professionals — built on fair pay, long partnerships, and high standards.",
      },
    ],
  }),
  component: Index,
});

const logos = ["Northwind", "Aperture", "Halcyon", "Mercato", "Foundry", "Lumen", "Cadence", "Verge"];

const steps = [
  {
    n: "01",
    title: "Book a call",
    body: "A 30-minute conversation about your team, the role, and the bar you're hiring against.",
  },
  {
    n: "02",
    title: "7-day talent access",
    body: "Curated profiles delivered within 48 hours. Interview, shortlist, decide on your timeline.",
  },
  {
    n: "03",
    title: "Hire and scale",
    body: "Onboard with full support. Optional managed payroll and contracts in 80+ countries.",
  },
];

const differentiators = [
  { k: "No cheap labor", v: "We compete on quality, not price. The bottom of the market isn't our market." },
  { k: "Vetted talent only", v: "A multi-stage process — work history, technical screen, references, communication." },
  { k: "Fair pay standards", v: "Transparent rates benchmarked to local senior tiers, not the lowest bidder." },
  { k: "Managed end-to-end", v: "Sourcing, contracting, payroll, compliance. You meet talent — we handle the rest." },
];

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-px mx-auto max-w-[1400px] pt-24 pb-32 md:pt-36 md:pb-44">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-graphite mb-10"
          >
            <span className="h-1 w-1 rounded-full bg-accent" />
            A curated global talent network
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.95] tracking-tight text-balance max-w-[20ch]"
          >
            Hire high-performing global talent{" "}
            <span className="italic text-graphite">without the risk.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 max-w-xl text-lg text-graphite leading-relaxed"
          >
            We connect you with vetted professionals and handle the complexity —
            so you can focus on growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Book a call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/talent"
              className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-foreground/20 text-sm font-medium hover:border-foreground transition-colors"
            >
              View talent
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Hero stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 border-t border-border pt-10"
          >
            {[
              ["3.4%", "Vetting acceptance rate"],
              ["48h", "First curated shortlist"],
              ["80+", "Countries supported"],
              ["94%", "Long-term retention"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl md:text-4xl font-light">{n}</div>
                <div className="text-xs uppercase tracking-[0.16em] text-graphite mt-2">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo marquee */}
        <div className="border-y border-border bg-bone overflow-hidden">
          <div className="py-8 flex">
            <div className="marquee-track flex shrink-0 gap-16 pr-16">
              {[...logos, ...logos].map((l, i) => (
                <span
                  key={i}
                  className="font-display text-xl md:text-2xl text-graphite whitespace-nowrap"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / DIFFERENTIATION */}
      <section className="container-px mx-auto max-w-[1400px] py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-6">
                Why we exist
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-balance">
                Built for teams that refuse to{" "}
                <span className="italic">race to the bottom.</span>
              </h2>
              <p className="mt-8 text-graphite leading-relaxed max-w-md">
                Cheap hiring is expensive. We exist for the agencies, founders, and
                operators who'd rather hire one excellent person than five average ones.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
            {differentiators.map((d, i) => (
              <Reveal key={d.k} delay={i * 0.05} className="bg-background p-8">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-xs text-graphite tabular-nums">0{i + 1}</span>
                  <h3 className="font-display text-xl font-medium">{d.k}</h3>
                </div>
                <p className="text-sm text-graphite leading-relaxed">{d.v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-ink text-background relative overflow-hidden">
        <div className="container-px mx-auto max-w-[1400px] py-28 md:py-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-background/60 mb-6">
              How it works
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1] tracking-tight max-w-3xl text-balance">
              Three steps. <span className="italic text-background/60">No fluff.</span>
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-3 gap-px bg-background/10">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1} className="bg-ink p-8 md:p-10 min-h-[280px] flex flex-col">
                <div className="font-display text-5xl font-light text-background/40 mb-12">
                  {s.n}
                </div>
                <h3 className="font-display text-2xl font-medium mb-4">{s.title}</h3>
                <p className="text-background/70 leading-relaxed text-sm">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TALENT PREVIEW */}
      <section className="container-px mx-auto max-w-[1400px] py-28 md:py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-6">
              The network
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.05] tracking-tight max-w-2xl text-balance">
              A small sample of who you'd meet.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/talent"
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1"
            >
              Browse the full network
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {talent.slice(0, 6).map((t, i) => (
            <TalentCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-bone py-28 md:py-40" id="mission">
        <div className="container-px mx-auto max-w-[1400px]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-8">
              Our mission
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05] tracking-tight max-w-4xl text-balance">
              Talent has always been global. We think{" "}
              <span className="italic">opportunity should be too</span> — paid fairly,
              treated seriously, and partnered with for the long run.
            </h2>
          </Reveal>

          <div className="mt-20 grid md:grid-cols-3 gap-px bg-border">
            {[
              ["Fair compensation", "Rates benchmarked to senior local markets, not the cheapest available."],
              ["High-quality talent", "We turn down 96.6% of applicants. Standards over volume — always."],
              ["Long-term partnerships", "We optimize for placements that last years, not weeks."],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 0.08} className="bg-bone p-8">
                <h3 className="font-display text-xl font-medium mb-3">{k}</h3>
                <p className="text-sm text-graphite leading-relaxed">{v}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-px mx-auto max-w-[1400px] py-32 md:py-44 text-center">
        <Reveal>
          <h2 className="font-display text-5xl md:text-7xl font-light leading-[1] tracking-tight text-balance max-w-4xl mx-auto">
            Build your team{" "}
            <span className="italic">with confidence.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-lg text-graphite max-w-xl mx-auto">
            Talk to us about the role you're trying to fill — or get access to the
            full network and explore on your own.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Book a call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/talent"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-foreground/20 text-sm font-medium hover:border-foreground transition-colors"
            >
              Get access
            </Link>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
