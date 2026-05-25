import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Search, Users, Shield, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/model")({
  head: () => ({
    meta: [
      { title: "Our Model — Northbound" },
      {
        name: "description",
        content:
          "How Northbound structures engagements: flexible, tailored partnerships built around thoughtful hiring and long-term support.",
      },
      { property: "og:title", content: "Our Model — Northbound" },
      {
        property: "og:description",
        content:
          "Engagements built around thoughtful hiring — not application volume.",
      },
    ],
  }),
  component: Model,
});

const engagements = [
  {
    icon: Search,
    title: "Selective Search",
    body: "Designed for companies hiring for individual or specialized roles. Engagements are structured around the complexity of the search and level of support involved.",
  },
  {
    icon: Users,
    title: "Ongoing Hiring Support",
    body: "For growing teams making multiple hires over time and looking for a more embedded hiring partner across sourcing, coordination, and candidate management.",
  },
  {
    icon: Shield,
    title: "Long-Term Partnership",
    body: "Tailored support for companies building distributed teams and requiring more ongoing operational involvement as hiring needs evolve.",
  },
];

function Model() {
  return (
    <Layout>
      {/* HERO */}
      <section className="container-px mx-auto max-w-[1200px] pt-24 md:pt-36 pb-20 md:pb-28">
        <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-8">
          Our Model
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.98] tracking-tight max-w-[20ch] text-balance">
          Flexible engagement structures built around{" "}
          <span className="italic text-graphite">thoughtful hiring.</span>
        </h1>
        <p className="mt-8 max-w-xl text-graphite leading-relaxed">
          We work across individual placements, ongoing hiring partnerships, and
          longer-term operational support depending on the company&apos;s needs.
        </p>
        <div className="mt-10">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Book a Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="container-px mx-auto max-w-[1200px]">
        <div className="hairline" />
      </div>

      {/* ENGAGEMENT CARDS */}
      <section className="container-px mx-auto max-w-[1200px] py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-12">
            How engagements are structured
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {engagements.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal
                key={card.title}
                delay={i * 0.08}
                className="group relative border border-border p-8 md:p-10 transition-all duration-500 hover:border-foreground/20"
              >
                <div className="mb-8 inline-flex h-10 w-10 items-center justify-center border border-border">
                  <Icon className="h-4 w-4 text-graphite transition-colors duration-500 group-hover:text-foreground" />
                </div>
                <h3 className="font-display text-2xl font-medium mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">
                  {card.body}
                </p>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-sm text-graphite leading-relaxed max-w-3xl">
            Every engagement is scoped individually based on hiring volume, role
            complexity, search requirements, and ongoing support needs.
          </p>
        </Reveal>
      </section>

      {/* COMMERCIAL APPROACH */}
      <section className="bg-ink text-background">
        <div className="container-px mx-auto max-w-[1200px] py-28 md:py-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-background/60 mb-8">
              Commercial Approach
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight max-w-4xl text-balance">
              We prefer{" "}
              <span className="italic text-background/60">
                tailored engagements
              </span>{" "}
              over rigid pricing packages.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-background/70 leading-relaxed text-base md:text-lg">
              Some companies require support for a single strategic hire. Others
              need ongoing hiring coordination across multiple functions. Our
              model is designed to adapt accordingly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-px mx-auto max-w-[1200px] py-28 md:py-40">
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-[1.05] tracking-tight text-balance">
              Tell us what you are{" "}
              <span className="italic text-graphite">building.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-graphite leading-relaxed max-w-lg">
              We will structure the engagement around the level of support,
              hiring complexity, and long-term goals involved.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Book a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-foreground/20 text-sm font-medium hover:border-foreground transition-colors"
              >
                Start a Discussion
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
