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
          "How Northbound structures engagements: thoughtful, managed introductions tailored to the scope and support level your company needs.",
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
    body: "For companies hiring for individual or specialized roles through thoughtfully managed introductions. We identify, screen, and present a small shortlist of exceptional candidates aligned to your exact requirements.",
  },
  {
    icon: Users,
    title: "Ongoing Partnership",
    body: "For growing teams making multiple hires over time and looking for a more involved hiring partner. We embed ourselves in your hiring rhythm, anticipate needs, and maintain a living pipeline of pre-qualified professionals.",
  },
  {
    icon: Shield,
    title: "Embedded Support",
    body: "Long-term hiring and operational support tailored around distributed teams as needs evolve. From workforce planning to compliance and ongoing talent management, we become an extension of your operations.",
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
        <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.98] tracking-tight max-w-[18ch] text-balance">
          Structured around thoughtful hiring,{" "}
          <span className="italic text-graphite">not application volume.</span>
        </h1>
        <p className="mt-8 max-w-xl text-graphite leading-relaxed">
          We structure engagements around the complexity of the search, level of
          involvement, and long-term needs of each company.
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
            How we work together
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
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-ink text-background">
        <div className="container-px mx-auto max-w-[1200px] py-28 md:py-40">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.18em] text-background/60 mb-8">
              Philosophy
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight max-w-4xl text-balance">
              We are more interested in introducing the{" "}
              <span className="italic text-background/60">right people</span>{" "}
              than introducing the most people.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-background/70 leading-relaxed text-base md:text-lg">
              We believe capable people already exist everywhere. Our role is to
              create more thoughtful access, connection, and long-term
              opportunities between companies and remote professionals.
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
              <span className="italic text-graphite">hiring for.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 text-graphite leading-relaxed max-w-lg">
              Every engagement begins with understanding the role, the team,
              and the level of support required.
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
