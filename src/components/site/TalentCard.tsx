import type { Talent } from "@/data/talent";
import { motion } from "framer-motion";

export function TalentCard({ t, index = 0 }: { t: Talent; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
      className="group relative flex flex-col bg-card border border-border overflow-hidden hover:border-foreground/40 transition-colors duration-500"
    >
      <div className="aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={t.photo}
          alt={`${t.name}, ${t.role}`}
          loading="lazy"
          width={768}
          height={896}
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-out"
        />
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-medium leading-tight">{t.name}</h3>
            <p className="text-sm text-graphite mt-0.5">{t.role}</p>
          </div>
          <span className="text-xs uppercase tracking-[0.14em] text-graphite shrink-0 mt-1">
            {t.level}
          </span>
        </div>

        <p className="text-sm text-graphite leading-relaxed line-clamp-3">{t.bio}</p>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {t.skills.map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 border border-border text-foreground/80"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="hairline pt-4 flex items-center justify-between text-xs text-graphite">
          <span>{t.location}</span>
          <span className="font-medium text-foreground">{t.rate}</span>
        </div>
      </div>
    </motion.article>
  );
}
