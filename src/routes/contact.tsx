import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, Mail, ArrowRight, Check } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a call — Northbound" },
      {
        name: "description",
        content:
          "Book an intro call to talk about the role you're hiring for, or apply to join the Northbound talent network.",
      },
      { property: "og:title", content: "Book a call — Northbound" },
      {
        property: "og:description",
        content: "Talk to us about hiring or apply to join the network.",
      },
    ],
  }),
  component: Contact,
});

const hiringSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().min(1, "Required").max(100),
  role: z.string().trim().min(1, "Required").max(150),
  notes: z.string().trim().max(1000).optional(),
});

const talentSchema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  role: z.string().trim().min(1, "Required").max(150),
  portfolio: z.string().trim().url("Enter a valid URL").max(255).or(z.literal("")),
  bio: z.string().trim().min(20, "Tell us a bit more").max(1000),
});

type Tab = "hire" | "apply";

function Contact() {
  const [tab, setTab] = useState<Tab>("hire");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const schema = tab === "hire" ? hiringSchema : talentSchema;
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="container-px mx-auto max-w-[1400px] pt-24 md:pt-32 pb-16">
        <p className="text-xs uppercase tracking-[0.18em] text-graphite mb-6">Contact</p>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-[0.98] tracking-tight max-w-4xl text-balance">
          Let's talk about <span className="italic text-graphite">your next hire.</span>
        </h1>
      </section>

      <section className="container-px mx-auto max-w-[1400px] pb-32 grid md:grid-cols-12 gap-12 md:gap-16">
        {/* Side info */}
        <Reveal className="md:col-span-5 space-y-10">
          <div className="border border-border p-8">
            <Calendar className="h-5 w-5 mb-5 text-accent" />
            <h3 className="font-display text-2xl font-medium">30-min intro call</h3>
            <p className="mt-3 text-graphite leading-relaxed">
              We'll talk about the role, the bar, and how we'd build a shortlist.
              No pitch, no pressure.
            </p>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Open Calendly
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="border border-border p-8">
            <Mail className="h-5 w-5 mb-5 text-accent" />
            <h3 className="font-display text-2xl font-medium">Prefer email?</h3>
            <p className="mt-3 text-graphite leading-relaxed">
              We reply to every message within one business day.
            </p>
            <a
              href="mailto:hello@northbound.work"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              hello@northbound.work
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        {/* Form */}
        <div className="md:col-span-7">
          <div className="flex gap-2 mb-8 border-b border-border">
            {(["hire", "apply"] as const).map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTab(t);
                  setSubmitted(false);
                  setErrors({});
                }}
                className={`relative px-1 pb-4 mr-6 text-sm font-medium transition-colors ${
                  tab === t ? "text-foreground" : "text-graphite hover:text-foreground"
                }`}
              >
                {t === "hire" ? "I'm hiring" : "Apply as talent"}
                {tab === t && (
                  <span className="absolute bottom-[-1px] left-0 right-0 h-px bg-foreground" />
                )}
              </button>
            ))}
          </div>

          {submitted ? (
            <div className="border border-border p-10 flex flex-col items-start">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Check className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display text-3xl font-medium">Thank you.</h3>
              <p className="mt-3 text-graphite max-w-md">
                We'll be in touch within one business day. In the meantime, feel free
                to browse the network.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} key={tab} className="space-y-6">
              {tab === "hire" ? (
                <>
                  <Field name="name" label="Your name" error={errors.name} />
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field name="email" label="Work email" type="email" error={errors.email} />
                    <Field name="company" label="Company" error={errors.company} />
                  </div>
                  <Field name="role" label="Role you're hiring for" error={errors.role} />
                  <Field name="notes" label="Anything else? (optional)" textarea error={errors.notes} />
                </>
              ) : (
                <>
                  <Field name="name" label="Your name" error={errors.name} />
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field name="email" label="Email" type="email" error={errors.email} />
                    <Field name="role" label="Your specialty" error={errors.role} />
                  </div>
                  <Field
                    name="portfolio"
                    label="Portfolio or LinkedIn URL"
                    placeholder="https://"
                    error={errors.portfolio}
                  />
                  <Field
                    name="bio"
                    label="A short note about your work"
                    textarea
                    error={errors.bio}
                  />
                </>
              )}

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                {tab === "hire" ? "Request a call" : "Submit application"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
  placeholder,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
  error?: string;
}) {
  const baseClass =
    "w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base placeholder:text-graphite/60 transition-colors";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.16em] text-graphite">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={`${baseClass} resize-none mt-2`} placeholder={placeholder} />
      ) : (
        <input name={name} type={type} className={`${baseClass} mt-2`} placeholder={placeholder} />
      )}
      {error && <span className="block mt-2 text-xs text-destructive">{error}</span>}
    </label>
  );
}
