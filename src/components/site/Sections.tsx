import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cog,
  Ruler,
  ScrollText,
  Layers,
  Microscope,
  Building2,
  BadgeCheck,
  BookMarked,
  ChevronDown,
  ExternalLink,
  Award,
} from "lucide-react";
import {
  stats,
  education,
  experience,
  featuredPublications,
  publicationCategories,
  researchTags,
  patents,
  books,
  achievements,
  memberships,
} from "@/data/portfolio";
import { CountUp, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <Cog
        className="drift absolute top-16 -left-10 text-primary/10"
        size={180}
        strokeWidth={0.4}
      />
      <Ruler
        className="drift absolute right-4 bottom-10 text-accent/10"
        size={120}
        strokeWidth={0.5}
        style={{ animationDelay: "-6s" }}
      />
    </div>
  );
}

function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24", className)}>
      <div className="relative mx-auto max-w-6xl px-5">{children}</div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="relative border-y border-border/70 bg-steel/30">
      <div className="blueprint-grid-fine absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-12 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="px-2 text-center">
            <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
              <CountUp value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-[0.7rem] leading-snug tracking-wide text-muted-foreground uppercase">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about">
      <FloatingIcons />
      <SectionHeading index="01" eyebrow="About" title="Engineer, educator, researcher." />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal className="space-y-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Dr. Sekar Tamilperuvalathan brings 27 years and 9 months of combined teaching, research,
            industry and administrative experience, serving under Tamil Nadu Educational Services
            since 2001. He currently heads the P.G. programme in Manufacturing Engineering at
            Government College of Technology, Coimbatore.
          </p>
          <p>
            At GCT he serves as Officer-in-charge of Examinations and as Coordinator of the
            Institution's IPR Cell, shaping examination governance and building institutional
            capability in intellectual property creation and protection.
          </p>
          <p>
            His research spans electrochemical and electrochemical discharge machining, biodegradable
            PLA bio-composites, additive manufacturing and sustainable materials — with recent work
            translating 3D-printed bio-composites into biomedical devices such as wound-healing
            scaffolds and cardiovascular stents.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="tech-card p-6">
            <p className="eyebrow mb-5">Focus Areas</p>
            <ul className="space-y-4">
              {[
                { icon: Microscope, text: "Electrochemical & ECDM processes" },
                { icon: Layers, text: "PLA bio-composites & additive manufacturing" },
                { icon: Cog, text: "Manufacturing process optimisation" },
                { icon: BadgeCheck, text: "IPR, examinations & academic governance" },
              ].map((f) => (
                <li key={f.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <f.icon size={17} strokeWidth={1.4} className="mt-0.5 shrink-0 text-primary" />
                  {f.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" className="bg-steel/20">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <SectionHeading index="02" eyebrow="Education" title="Academic formation & credentials." />
      <div className="relative ml-3 border-l border-border pl-8 sm:ml-6 sm:pl-12">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.05} className="relative pb-10 last:pb-0">
            <span className="absolute top-1 -left-[3.05rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background sm:-left-[4.05rem]">
              <Cog size={15} strokeWidth={1.4} className="text-primary" />
            </span>
            <div className="tech-card p-5">
              <p className="font-display text-[0.65rem] tracking-[0.24em] text-primary uppercase">
                {e.year}
              </p>
              <h3 className="mt-2 text-base font-semibold text-foreground">{e.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <FloatingIcons />
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Professional roles & responsibilities."
        description="Academic leadership, examination governance, World Bank-aided programme administration and industry exposure across Tamil Nadu's engineering institutions."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {experience.map((x, i) => (
          <Reveal key={x.role} delay={(i % 3) * 0.07}>
            <article className="tech-card h-full p-6">
              <Building2 size={18} strokeWidth={1.3} className="text-primary" />
              <p className="mt-4 font-display text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                {x.period}
              </p>
              <h3 className="mt-2 text-base leading-snug font-semibold text-foreground">
                {x.role}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.org}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Research() {
  const [active, setActive] = useState<string>("journals");
  const current = publicationCategories.find((c) => c.key === active) ?? publicationCategories[0]!;

  return (
    <Section id="research" className="bg-steel/20">
      <div className="blueprint-grid-fine absolute inset-0 opacity-60" />
      <SectionHeading
        index="04"
        eyebrow="Research"
        title="Publications & research output."
        description="90 international journal articles and 100 conference papers, concentrated in non-traditional machining, additive manufacturing and sustainable biomedical materials."
      />

      <Reveal className="mb-10 flex flex-wrap gap-2">
        {researchTags.map((t) => (
          <span
            key={t}
            className="border border-border px-3 py-1.5 font-display text-[0.62rem] tracking-[0.18em] text-muted-foreground uppercase transition-colors duration-300 hover:border-primary/60 hover:text-primary"
          >
            {t}
          </span>
        ))}
      </Reveal>

      <div className="mb-12 grid gap-5 lg:grid-cols-2">
        {featuredPublications.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08}>
            <article className="tech-card group flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <p className="font-display text-[0.62rem] tracking-[0.24em] text-primary uppercase">
                  {p.year}
                </p>
                <ExternalLink
                  size={15}
                  strokeWidth={1.4}
                  className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-primary"
                />
              </div>
              <h3 className="mt-3 text-base leading-snug font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.journal}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="flex flex-wrap gap-2 border-b border-border pb-3">
          {publicationCategories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setActive(c.key)}
              className={cn(
                "px-4 py-2 font-display text-[0.65rem] tracking-[0.18em] uppercase transition-colors",
                active === c.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {c.label} · {c.count}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.p
            key={current.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground"
          >
            {current.note}
          </motion.p>
        </AnimatePresence>
      </Reveal>
    </Section>
  );
}

export function Patents() {
  const [open, setOpen] = useState(false);
  return (
    <Section id="patents">
      <FloatingIcons />
      <SectionHeading
        index="05"
        eyebrow="Patents"
        title="Patents & innovation."
        description="Ten design patents granted by the Indian Patent Office and one utility patent filed, alongside sponsored research in electrochemical discharge machining."
      />
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="tech-card h-full p-6">
            <Award size={20} strokeWidth={1.3} className="text-primary" />
            <h3 className="mt-4 text-base font-semibold text-foreground">
              TEQIP-III Sponsored Project
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Principal Investigator (2020) for “Experimental Investigations on Electrochemical
              Discharge Machining (ECDM) of Bio-Ceramics”, a funded R&amp;D project advancing
              micro-machining of brittle bio-ceramic materials.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="tech-card overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <span>
                <span className="eyebrow block">Patent Register</span>
                <span className="mt-2 block text-base font-semibold text-foreground">
                  10 Design Patents Granted · 1 Utility Patent Filed
                </span>
              </span>
              <ChevronDown
                size={18}
                className={cn("shrink-0 text-primary transition-transform", open && "rotate-180")}
              />
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <table className="w-full border-t border-border text-left text-sm">
                    <tbody>
                      {patents.map((p) => (
                        <tr
                          key={p.number}
                          className="border-b border-border/60 transition-colors last:border-0 hover:bg-primary/5"
                        >
                          <td className="px-6 py-3 font-display text-xs tracking-wider text-primary">
                            {p.number}
                          </td>
                          <td className="px-6 py-3 text-muted-foreground">{p.title}</td>
                          <td className="px-6 py-3 text-right text-xs text-muted-foreground">
                            {p.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function Books() {
  return (
    <Section className="bg-steel/20">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <SectionHeading index="06" eyebrow="Publications" title="Books authored & chapters." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b, i) => (
          <Reveal key={b.title} delay={(i % 3) * 0.07}>
            <article className="tech-card h-full p-6">
              <BookMarked size={18} strokeWidth={1.3} className="text-primary" />
              <h3 className="mt-4 text-base font-semibold text-foreground">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.meta}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Achievements() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="achievements">
      <FloatingIcons />
      <SectionHeading
        index="07"
        eyebrow="Achievements"
        title="Academic & professional distinction."
      />
      <div className="divide-y divide-border border-y border-border">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.04}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-5 text-left transition-all duration-300 hover:pl-3"
            >
              <span className="flex items-center gap-4">
                <span className="font-display text-[0.62rem] tracking-[0.24em] text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium text-foreground">{a.title}</span>
              </span>
              <ChevronDown
                size={17}
                className={cn(
                  "shrink-0 text-muted-foreground transition-transform group-hover:text-primary",
                  open === i && "rotate-180",
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {open === i ? (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden pb-5 text-sm leading-relaxed text-muted-foreground sm:pl-12"
                >
                  {a.body}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Memberships() {
  return (
    <Section className="bg-steel/20">
      <div className="blueprint-grid-fine absolute inset-0 opacity-60" />
      <SectionHeading index="08" eyebrow="Memberships" title="Professional bodies." />
      <div className="flex flex-wrap gap-3">
        {memberships.map((m, i) => (
          <Reveal key={m} delay={i * 0.05}>
            <span className="tech-card inline-flex items-center gap-2 px-5 py-3 text-sm text-foreground">
              <ScrollText size={15} strokeWidth={1.4} className="text-primary" />
              {m}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
