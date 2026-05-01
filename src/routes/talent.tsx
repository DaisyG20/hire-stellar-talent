import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { TalentCard } from "@/components/site/TalentCard";
import { talent, type Department, type Level } from "@/data/talent";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/talent")({
  head: () => ({
    meta: [
      { title: "The Network — Northbound" },
      {
        name: "description",
        content:
          "Browse vetted designers, engineers, marketers, and operators from the Northbound network. Filter by department and experience.",
      },
      { property: "og:title", content: "The Network — Northbound" },
      {
        property: "og:description",
        content: "A small preview of vetted global talent ready to plug into your team.",
      },
    ],
  }),
  component: TalentPage,
});

const departments: ("All" | Department)[] = ["All", "Engineering", "Design", "Marketing", "Operations"];
const levels: ("All" | Level)[] = ["All", "Mid", "Senior", "Lead"];

function TalentPage() {
  const [dept, setDept] = useState<(typeof departments)[number]>("All");
  const [level, setLevel] = useState<(typeof levels)[number]>("All");

  const filtered = useMemo(
    () =>
      talent.filter(
        (t) =>
          (dept === "All" || t.department === dept) &&
          (level === "All" || t.level === level),
      ),
    [dept, level],
  );

  return (
    <Layout>
      <section className="container-px mx-auto max-w-[1400px] pt-24 md:pt-32 pb-12">
        <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-6">The network</p>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-[0.98] tracking-tight max-w-4xl text-balance">
          Vetted. Senior. <span className="italic text-graphite">Ready when you are.</span>
        </h1>
        <p className="mt-8 max-w-xl text-graphite leading-relaxed">
          A small preview of the Northbound network. Book a call for full access —
          including availability, deeper portfolios, and reference calls.
        </p>
      </section>

      {/* Filters */}
      <section className="container-px mx-auto max-w-[1400px] pb-10">
        <div className="border-y border-border py-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-graphite mr-2">
              Department
            </span>
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)}
                className={`text-sm px-3.5 py-1.5 rounded-full border transition-colors ${
                  dept === d
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.16em] text-graphite mr-2">
              Level
            </span>
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`text-sm px-3.5 py-1.5 rounded-full border transition-colors ${
                  level === l
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-[1400px] pb-28 md:pb-40">
        {filtered.length === 0 ? (
          <p className="text-graphite py-20 text-center">
            No matches in this preview. Book a call to access the full network.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t, i) => (
              <TalentCard key={t.id} t={t} index={i} />
            ))}
          </div>
        )}
      </section>

      <section className="bg-bone border-t border-border py-24">
        <div className="container-px mx-auto max-w-[1400px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-tight max-w-xl">
              Want to join the network?
            </h2>
            <p className="text-graphite mt-3 max-w-md">
              Apply once. We'll be in touch if there's a fit — usually within a week.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            Apply as talent
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
