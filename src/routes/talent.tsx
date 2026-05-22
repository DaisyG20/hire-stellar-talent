import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { talent } from "@/data/talent";

export const Route = createFileRoute("/talent")({
  head: () => ({
    meta: [
      { title: "Curated Talent — Northbound" },
      {
        name: "description",
        content:
          "Exceptional remote professionals, carefully selected for communication, reliability, and long-term fit.",
      },
      { property: "og:title", content: "Curated Talent — Northbound" },
      {
        property: "og:description",
        content:
          "A small selection of the professionals we introduce to the teams we partner with.",
      },
    ],
  }),
  component: TalentPage,
});

const values = [
  {
    title: "Strong communication",
    body: "Clear, professional communication is non-negotiable.",
  },
  {
    title: "Reliability",
    body: "Consistency matters more than impressive resumes.",
  },
  {
    title: "Operational thinking",
    body: "We prioritize people who think ahead and solve problems independently.",
  },
  {
    title: "Long-term fit",
    body: "We care about sustainable working relationships, not quick placements.",
  },
];

const processSteps = [
  {
    title: "We identify",
    body: "People with strong communication and operational ability.",
  },
  {
    title: "We screen",
    body: "For professionalism, consistency, and fit.",
  },
  {
    title: "We introduce",
    body: "A focused shortlist instead of overwhelming volume.",
  },
];

function FeaturedCard({ t, index }: { t: (typeof talent)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-border bg-muted">
          <img
            src={t.photo}
            alt={`${t.name}, ${t.role}`}
            loading="lazy"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <h3 className="font-display text-lg md:text-xl font-medium mt-6">{t.name}</h3>
        <p className="text-sm text-graphite mt-1">{t.role}</p>
        <p className="text-sm text-graphite leading-relaxed mt-4 max-w-xs mx-auto">
          {t.bio}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {t.skills.map((s) => (
            <span
              key={s}
              className="text-xs px-3 py-1 rounded-full border border-border text-graphite"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function TalentPage() {
  const featured = talent.slice(0, 3);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="container-px mx-auto max-w-[1200px] pt-28 pb-24 md:pt-40 md:pb-32">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.22em] text-graphite mb-8"
          >
            Curated global talent
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] tracking-tight max-w-3xl text-balance"
          >
            Exceptional remote professionals,{" "}
            <span className="italic text-graphite">carefully selected.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 max-w-2xl text-base md:text-lg text-graphite leading-relaxed"
          >
            We focus on communication, reliability, professionalism, and long-term
            fit — not just resumes.
          </motion.p>
        </div>
      </section>

      {/* WHAT WE VALUE */}
      <section className="container-px mx-auto max-w-[1200px] pb-28 md:pb-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-graphite mb-8">
            What we look for
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div className="rounded-xl border border-border bg-card p-8 md:p-10 h-full">
                <h3 className="font-display text-xl md:text-2xl font-medium mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED TALENT */}
      <section className="bg-bone border-y border-border py-28 md:py-40">
        <div className="container-px mx-auto max-w-[1200px]">
          <div className="max-w-2xl mb-16 md:mb-20">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.22em] text-graphite mb-6">
                Featured examples
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light leading-[1.1] tracking-tight text-balance">
                The type of talent we look for
              </h2>
              <p className="mt-5 text-graphite leading-relaxed">
                These examples reflect the level of professionalism and communication
                we prioritize.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {featured.map((t, i) => (
              <FeaturedCard key={t.id} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-px mx-auto max-w-[1200px] py-28 md:py-40">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.22em] text-graphite mb-8">
            Our process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light leading-[1.1] tracking-tight max-w-2xl text-balance">
            A more thoughtful hiring process.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-12 md:gap-8">
          {processSteps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-medium mb-3">{s.title}</h3>
                <p className="text-sm text-graphite leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-ink text-background py-28 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 grain pointer-events-none" />
        <div className="container-px mx-auto max-w-[1200px] relative">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-light leading-[1.1] tracking-tight max-w-3xl text-balance">
              Talent is everywhere.{" "}
              <span className="italic text-background/60">Opportunity is not.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 max-w-2xl text-background/70 leading-relaxed text-base md:text-lg">
              We believe capable professionals exist far beyond traditional hiring
              hubs. The challenge is not access to talent — it is identifying the
              right people thoughtfully and consistently.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL REASSURANCE */}
      <section className="container-px mx-auto max-w-[1200px] py-28 md:py-40 text-center">
        <Reveal>
          <p className="font-display text-2xl md:text-3xl font-light leading-[1.2] tracking-tight max-w-2xl mx-auto text-balance">
            We work quietly, carefully, and with a focus on{" "}
            <span className="italic text-graphite">long-term fit.</span>
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 text-sm text-graphite">
            Conversations begin through the booking link above.
          </p>
        </Reveal>
      </section>
    </Layout>
  );
}
