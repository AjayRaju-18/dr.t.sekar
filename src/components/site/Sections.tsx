import { useState, useMemo } from "react";
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
  Search,
  Landmark,
  GraduationCap,
  Sparkles,
  BookOpen,
  FolderLock,
} from "lucide-react";
import {
  stats,
  education,
  experience,
  allInternationalJournals,
  nationalJournals,
  featuredPublications,
  publicationCategories,
  researchTags,
  patents,
  books,
  achievements,
  memberships,
  fundedProjects,
  profile,
} from "@/data/portfolio";
import { CountUp, Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────── helpers */

function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <Cog
        className="drift absolute top-16 -left-10 text-primary/10 hidden sm:block"
        size={160}
        strokeWidth={0.4}
      />
      <Ruler
        className="drift absolute right-4 bottom-10 text-accent/10 hidden sm:block"
        size={100}
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
    <section id={id} className={cn("relative section-padding", className)}>
      <div className="section-inner relative">{children}</div>
    </section>
  );
}

/* ─────────────────────────────────────────────── StatsBar */

export function StatsBar() {
  return (
    <section className="relative border-y border-border/70 bg-gradient-to-b from-steel/30 via-card/40 to-steel/30 backdrop-blur-md">
      <div className="blueprint-grid-fine absolute inset-0 opacity-40 pointer-events-none" />
      <div className="section-inner py-6 sm:py-10 lg:py-12">
        <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className="tech-card group relative flex flex-col items-center justify-center p-3 sm:p-4 lg:p-5 text-center"
            >
              {/* Top-right precision marker */}
              <span className="absolute top-2 right-2 h-1 w-1 rounded-full bg-primary/30 group-hover:bg-primary group-hover:pulse-glow transition-colors" />

              <div className="relative flex items-end justify-center gap-0.5">
                <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary drop-shadow-[0_0_14px_rgba(0,180,216,0.4)]">
                  <CountUp value={s.value} duration={1400 + i * 150} />
                </span>
                {s.suffix && (
                  <span className="mb-0.5 font-display text-lg sm:text-xl lg:text-2xl font-bold text-primary/80">
                    {s.suffix}
                  </span>
                )}
              </div>

              <p className="mt-1.5 text-[0.58rem] sm:text-[0.65rem] font-medium leading-tight tracking-wider text-muted-foreground uppercase group-hover:text-foreground/80 transition-colors px-1">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────── About */

export function About() {
  return (
    <Section id="about">
      <FloatingIcons />
      <SectionHeading
        index="01"
        eyebrow="Profile & Background"
        title="Engineer, educator, researcher & innovator."
        description="27 Years and 9 Months of dedicated service under Tamil Nadu Educational Services (Government of Tamil Nadu) since 2001."
      />
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <Reveal className="space-y-4 text-sm sm:text-[0.9rem] leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Dr. Sekar Tamilperuvalathan</strong> is an Associate
            Professor and Head, P.G-Manufacturing Engg &amp; Engg Design at the prestigious{" "}
            <span className="text-foreground font-medium">
              Government College of Technology (GCT), Coimbatore
            </span>
            . He brings a rich, multi-faceted background spanning academic leadership, world-class
            research, institutional governance, and industrial manufacturing.
          </p>
          <p>
            Currently, he serves as the{" "}
            <strong className="text-foreground">Officer-in-charge of Examinations</strong> and{" "}
            <strong className="text-foreground">IPR Cell Coordinator</strong> at GCT, steering
            autonomous evaluations and fostering high-value intellectual property creation resulting in
            10 granted Indian patents.
          </p>
          <p>
            His pioneering research focuses on{" "}
            <strong className="text-foreground">
              Electrochemical Discharge Machining (ECDM)
            </strong>
            , gas-assisted micro-machining, biodegradable{" "}
            <strong className="text-foreground">PLA bio-composites</strong>, and additive manufacturing
            for biomedical devices, including next-generation cardiovascular stents and orthopedic
            implants.
          </p>
          <div className="rounded border border-primary/30 bg-primary/5 p-3.5 sm:p-4 text-sm text-foreground/90">
            <span className="font-display tracking-wider text-primary uppercase font-semibold text-xs">
              Rooted in Public Education:
            </span>{" "}
            A proud alumnus of Government Higher Secondary School, Tittagudi (Cuddalore District), Dr.
            Sekar actively supported the implementation of Tamil Nadu's historic{" "}
            <strong className="text-primary">7.5% reservation scheme</strong> for Government School
            students in professional degree admissions.
          </div>
        </Reveal>

        <Reveal delay={0.15} className="space-y-4">
          <div className="tech-card p-4 sm:p-5 lg:p-6">
            <p className="eyebrow mb-3 sm:mb-4">Core Competencies</p>
            <ul className="space-y-3">
              {[
                { icon: Microscope, text: "Electrochemical & ECDM Micro-Machining" },
                { icon: Layers, text: "PLA Bio-Composites & 3D Additive Manufacturing" },
                { icon: Cog, text: "Machining Optimization & DNN Modeling" },
                { icon: BadgeCheck, text: "Autonomous Examination Governance & IPR" },
                { icon: Landmark, text: "State Higher Education Policy & TEQIP" },
              ].map((f) => (
                <li
                  key={f.text}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground"
                >
                  <f.icon size={15} strokeWidth={1.4} className="mt-0.5 shrink-0 text-primary" />
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tech-card p-4 sm:p-5">
            <p className="eyebrow mb-2 sm:mb-3">Personal &amp; Heritage</p>
            <div className="space-y-1.5 text-xs text-muted-foreground">
              <p>
                <strong className="text-foreground">Native:</strong> {profile.personal.nativePlace}
              </p>
              <p>
                <strong className="text-foreground">Schooling:</strong> {profile.personal.schooling}
              </p>
              <p>
                <strong className="text-foreground">Languages:</strong> English, Tamil
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────── Education */

export function Education() {
  return (
    <Section id="education" className="bg-steel/20">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <SectionHeading
        index="02"
        eyebrow="Academic Formation"
        title="Degrees, qualifications & certifications."
        description="A continuum of engineering scholarship from premier institutions across India and the United Kingdom."
      />
      <div className="relative ml-4 sm:ml-6 border-l border-border pl-5 sm:pl-8 lg:pl-10">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.05} className="relative pb-6 sm:pb-8 last:pb-0">
            <span className="absolute top-1 -left-[2.1rem] sm:-left-[2.6rem] lg:-left-[3.35rem] flex h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 items-center justify-center rounded-full border border-border bg-background">
              <Cog size={12} strokeWidth={1.4} className="text-primary" />
            </span>
            <div className="tech-card p-3.5 sm:p-4 lg:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display text-[0.6rem] sm:text-[0.65rem] tracking-[0.18em] text-primary uppercase">
                  {e.year}
                </span>
                {e.degree.includes("Gold Medalist") && (
                  <span className="inline-flex items-center gap-1 rounded bg-accent/20 px-2 py-0.5 text-[0.6rem] sm:text-[0.65rem] font-semibold text-accent">
                    <Award size={11} /> Gold Medal
                  </span>
                )}
              </div>
              <h3 className="mt-2 text-sm sm:text-base font-semibold text-foreground leading-snug">
                {e.degree}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-foreground/80">{e.org}</p>
              {e.highlight && (
                <p className="mt-2 text-[0.7rem] sm:text-xs text-muted-foreground border-t border-border/50 pt-2">
                  {e.highlight}
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────── Experience */

export function Experience() {
  return (
    <Section id="experience">
      <FloatingIcons />
      <SectionHeading
        index="03"
        eyebrow="Professional Roles"
        title="Leadership, administration & pedagogy."
        description="Over 27 years across Government engineering colleges, World Bank-aided programs (TEQIP), exam control, and industry manufacturing."
      />
      <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {experience.map((x, i) => (
          <Reveal key={x.role} delay={(i % 3) * 0.07}>
            <article className="tech-card flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6">
              <div>
                <div className="flex items-center justify-between">
                  <Building2 size={17} strokeWidth={1.3} className="text-primary" />
                  <span className="font-display text-[0.58rem] sm:text-[0.62rem] tracking-[0.18em] text-primary uppercase">
                    {x.period}
                  </span>
                </div>
                <h3 className="mt-3 text-sm sm:text-base leading-snug font-semibold text-foreground">
                  {x.role}
                </h3>
                <p className="mt-1 text-xs font-medium text-foreground/80">{x.org}</p>
                <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{x.details}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────── Research */

export function Research() {
  const [activeTab, setActiveTab] = useState<string>("all-journals");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All Areas");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const filteredJournals = useMemo(() => {
    return allInternationalJournals.filter((j) => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.authors.toLowerCase().includes(q) ||
        j.journal.toLowerCase().includes(q) ||
        j.year.includes(q);

      const matchesTag =
        selectedTag === "All Areas" ||
        (j.tags &&
          j.tags.some((t) =>
            t.toLowerCase().includes(selectedTag.toLowerCase().split(" ")[0] || ""),
          ));

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const displayedJournals = filteredJournals.slice(0, page * itemsPerPage);

  return (
    <Section id="research" className="bg-steel/20">
      <div className="blueprint-grid-fine absolute inset-0 opacity-60" />
      <SectionHeading
        index="04"
        eyebrow="Scholarly Research"
        title="Publications & research repository."
        description="90 International Journals · 2 National Journals · 4 Authored Books · 2 Book Chapters · 140 Conference Presentations"
      />

      {/* Flagship Highlights */}
      <div className="mb-8 sm:mb-10">
        <div className="mb-3 sm:mb-4 flex items-center gap-2">
          <Sparkles size={15} className="text-primary" />
          <h3 className="font-display text-[0.65rem] sm:text-xs tracking-wider text-primary uppercase">
            Recent Flagship Publications (2024–2026)
          </h3>
        </div>
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPublications.map((p) => (
            <article
              key={p.id}
              className="tech-card group flex flex-col justify-between p-3.5 sm:p-4 lg:p-5"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <span className="font-display text-xs font-semibold text-primary">{p.year}</span>
                  {p.doi && (
                    <a
                      href={p.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                      title="Open Publication"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <h4 className="mt-2 text-xs sm:text-sm font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h4>
                <p className="mt-1.5 text-[0.7rem] sm:text-xs text-muted-foreground">{p.journal}</p>
                <p className="mt-0.5 text-[0.65rem] sm:text-[0.7rem] text-muted-foreground/70 italic">
                  {p.authors}
                </p>
              </div>
              {p.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-primary/10 px-1.5 py-0.5 text-[0.6rem] text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* Category Tabs — horizontal scroll on mobile */}
      <Reveal className="mb-5 sm:mb-6">
        <div className="flex gap-1.5 sm:gap-2 border-b border-border pb-3 overflow-x-auto no-scrollbar">
          {publicationCategories.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => {
                setActiveTab(c.key);
                setPage(1);
              }}
              className={cn(
                "whitespace-nowrap shrink-0 px-3 sm:px-3.5 py-1.5 sm:py-2 font-display text-[0.6rem] sm:text-[0.65rem] tracking-[0.12em] sm:tracking-[0.14em] uppercase transition-all",
                activeTab === c.key
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/40 border border-border/50",
              )}
            >
              {c.label} ({c.count})
            </button>
          ))}
        </div>
      </Reveal>

      {/* Tab Content */}
      {activeTab === "all-journals" && (
        <div className="space-y-4 sm:space-y-5">
          {/* Search + Tag row */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="relative w-full sm:max-w-sm lg:max-w-md">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search by title, author, year…"
                className="w-full border border-input bg-background/80 pl-9 pr-4 py-2.5 text-xs text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:flex-wrap sm:max-w-sm lg:max-w-md">
              {researchTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setSelectedTag(tag);
                    setPage(1);
                  }}
                  className={cn(
                    "whitespace-nowrap shrink-0 px-2 sm:px-2.5 py-1 text-[0.58rem] sm:text-[0.62rem] font-display uppercase tracking-wider transition-colors",
                    selectedTag === tag
                      ? "bg-primary/20 text-primary border border-primary/50"
                      : "text-muted-foreground hover:text-foreground border border-border",
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Publication List */}
          <div className="space-y-2.5 sm:space-y-3">
            {displayedJournals.map((j) => (
              <article
                key={j.id}
                className="tech-card flex items-start justify-between gap-3 p-3 sm:p-4 transition-all hover:translate-x-1"
              >
                <div className="flex items-start gap-2.5 sm:gap-3 min-w-0">
                  <span className="shrink-0 mt-0.5 rounded border border-primary/40 bg-primary/10 px-1.5 py-0.5 font-display text-[0.58rem] sm:text-[0.62rem] text-primary">
                    #{String(j.id).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                      {j.title}
                    </h4>
                    <p className="mt-1 text-[0.65rem] sm:text-[0.7rem] text-muted-foreground italic truncate">
                      {j.authors}
                    </p>
                    <p className="mt-0.5 text-[0.65rem] sm:text-[0.7rem] text-primary/80">
                      {j.journal} ({j.year})
                    </p>
                  </div>
                </div>
                {j.doi && (
                  <a
                    href={j.doi}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 p-1 text-muted-foreground hover:text-primary transition-colors"
                    title="View Article"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </article>
            ))}

            {filteredJournals.length === 0 && (
              <p className="py-10 text-center text-sm text-muted-foreground">
                No publications found matching &ldquo;{searchQuery}&rdquo;.
              </p>
            )}

            {displayedJournals.length < filteredJournals.length && (
              <div className="pt-4 text-center">
                <button
                  type="button"
                  onClick={() => setPage((p) => p + 1)}
                  className="sweep-btn w-full sm:w-auto border border-primary px-6 py-2.5 font-display text-[0.65rem] sm:text-xs tracking-wider text-primary uppercase hover:text-primary-foreground"
                >
                  Load More ({filteredJournals.length - displayedJournals.length} remaining)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "national-journals" && (
        <div className="space-y-3 sm:space-y-4">
          {nationalJournals.map((nj) => (
            <article key={nj.id} className="tech-card p-3.5 sm:p-4 lg:p-5">
              <div className="flex items-start gap-3">
                <span className="shrink-0 rounded border border-primary/40 bg-primary/10 px-2 py-0.5 font-display text-[0.62rem] text-primary">
                  {nj.id}
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                    {nj.title}
                  </h4>
                  <p className="mt-1 text-[0.68rem] sm:text-xs text-muted-foreground italic">
                    {nj.authors}
                  </p>
                  <p className="mt-0.5 text-[0.68rem] sm:text-xs text-primary/80">
                    {nj.journal} — {nj.details} ({nj.year})
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {activeTab === "books" && (
        <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
          {books
            .filter((b) => b.type === "Authored Book")
            .map((b) => (
              <article
                key={b.title}
                className="tech-card flex flex-col justify-between p-4 sm:p-5 lg:p-6"
              >
                <div>
                  <BookMarked size={18} className="text-primary" />
                  <h4 className="mt-3 text-sm sm:text-base font-semibold text-foreground leading-snug">
                    {b.title}
                  </h4>
                  <p className="mt-1.5 text-[0.7rem] sm:text-xs text-muted-foreground italic">
                    Authors: {b.authors}
                  </p>
                  <p className="mt-1.5 text-xs text-foreground/80">{b.publisher}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-primary">
                  <span>Year: {b.year}</span>
                  <span className="font-mono text-[0.68rem]">{b.isbn}</span>
                </div>
              </article>
            ))}
        </div>
      )}

      {activeTab === "chapters" && (
        <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
          {books
            .filter((b) => b.type === "Book Chapter")
            .map((c) => (
              <article
                key={c.title}
                className="tech-card flex flex-col justify-between p-4 sm:p-5 lg:p-6"
              >
                <div>
                  <BookOpen size={18} className="text-primary" />
                  <h4 className="mt-3 text-sm sm:text-base font-semibold text-foreground leading-snug">
                    {c.title}
                  </h4>
                  <p className="mt-1.5 text-[0.7rem] sm:text-xs text-muted-foreground italic">
                    Authors: {c.authors}
                  </p>
                  <p className="mt-1.5 text-xs text-foreground/80">{c.publisher}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-primary">
                  <span>Year: {c.year}</span>
                  <span className="font-mono text-[0.68rem]">{c.isbn}</span>
                </div>
              </article>
            ))}
        </div>
      )}

      {activeTab === "conferences" && (
        <div className="tech-card p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
          <Award size={30} className="mx-auto text-primary" />
          <h4 className="text-base sm:text-lg font-semibold text-foreground">
            100 International &amp; 40 National Conferences
          </h4>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Presented technical papers across leading global and national conferences, including the{" "}
            <strong className="text-foreground">
              IEEE 19th International Conference on Automation Science and Engineering (CASE)
            </strong>{" "}
            in Auckland, New Zealand — focusing on ECDM, sustainable composites, and advanced
            micromachining.
          </p>
        </div>
      )}
    </Section>
  );
}

/* ─────────────────────────────────────────────── Patents */

export function Patents() {
  return (
    <Section id="patents">
      <FloatingIcons />
      <SectionHeading
        index="05"
        eyebrow="Patents & Funded R&D"
        title="Intellectual property & innovations."
        description="10 Design Patents granted by the Indian Patent Office, 2 Utility Patents filed/published, and funded R&D in electrochemical discharge machining."
      />

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Column */}
        <Reveal className="flex flex-col gap-4 sm:gap-5">
          {fundedProjects.map((p) => (
            <div key={p.title} className="tech-card p-4 sm:p-5 lg:p-6 space-y-3">
              <div className="flex items-center justify-between">
                <Award size={18} strokeWidth={1.3} className="text-primary" />
                <span className="rounded bg-primary/10 border border-primary/30 px-2.5 py-0.5 font-display text-[0.6rem] sm:text-[0.62rem] text-primary uppercase">
                  {p.status}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                {p.title}
              </h3>
              <div className="space-y-1.5 text-xs text-muted-foreground">
                <p>
                  <strong className="text-foreground">Funding:</strong> {p.agency}
                </p>
                <p>
                  <strong className="text-foreground">Role:</strong> {p.role}
                </p>
                <p>
                  <strong className="text-foreground">Amount:</strong>{" "}
                  <span className="text-primary font-semibold">{p.sanctionedAmount}</span>
                </p>
              </div>
            </div>
          ))}

          {/* Utility Patents */}
          <div className="tech-card p-4 sm:p-5 space-y-3">
            <p className="eyebrow">Utility Patents (Filed / Published)</p>
            <div className="space-y-3">
              {patents.utilityPatents.map((up) => (
                <div key={up.title} className="border-t border-border/60 pt-3 first:border-0 first:pt-0">
                  <h4 className="text-xs font-semibold text-foreground leading-snug">{up.title}</h4>
                  <p className="mt-1 text-[0.68rem] text-muted-foreground">
                    Role: {up.role} · Status:{" "}
                    <span className="text-primary">{up.status}</span>
                  </p>
                  <p className="text-[0.65rem] text-muted-foreground/80">
                    Filed: {up.filingDate}
                    {up.applicationNo ? ` · App: ${up.applicationNo}` : ""}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Design Patents Table */}
        <Reveal delay={0.1}>
          <div className="tech-card overflow-hidden">
            <div className="flex flex-col gap-3 p-4 sm:p-5 lg:p-6 pb-3 sm:pb-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="eyebrow block">Design Patent Register</span>
                <h3 className="mt-1 text-sm sm:text-base font-semibold text-foreground">
                  10 Design Patents — Indian Patent Office
                </h3>
              </div>
              <a
                href={patents.driveUrl}
                target="_blank"
                rel="noreferrer"
                className="sweep-btn inline-flex items-center justify-center gap-1.5 border border-primary px-3 py-1.5 font-display text-[0.62rem] sm:text-[0.65rem] tracking-wider text-primary uppercase hover:text-primary-foreground shrink-0"
              >
                <FolderLock size={12} /> Certificates Drive
              </a>
            </div>

            <div className="px-4 sm:px-5 lg:px-6 pb-3">
              <p className="text-[0.7rem] sm:text-xs text-muted-foreground leading-relaxed">
                All 10 design patents officially registered and granted certificates by the Controller
                General of Patents, Designs &amp; Trade Marks, Government of India.
              </p>
            </div>

            {/* Responsive scroll wrapper for table */}
            <div className="overflow-x-auto border-t border-border">
              <table className="w-full text-left" style={{ minWidth: "480px" }}>
                <thead>
                  <tr className="border-b border-border/80 bg-card/40 font-display text-[0.58rem] sm:text-[0.62rem] text-muted-foreground uppercase">
                    <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3">#</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3">Patent No.</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3">Title</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3">Date</th>
                    <th className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {patents.designPatents.map((p, idx) => (
                    <tr
                      key={p.number}
                      className="border-b border-border/40 text-xs transition-colors last:border-0 hover:bg-primary/5"
                    >
                      <td className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 font-display text-muted-foreground">
                        {idx + 1}
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 font-display font-semibold text-primary whitespace-nowrap">
                        {p.number}
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 text-foreground">
                        {p.title}
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 text-muted-foreground whitespace-nowrap">
                        {p.date}
                      </td>
                      <td className="px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 text-right font-medium text-emerald-400 whitespace-nowrap">
                        {p.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────── Books */

export function Books() {
  return (
    <Section id="books" className="bg-steel/20">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <SectionHeading
        index="06"
        eyebrow="Authored Volumes"
        title="Books & book chapters."
        description="Textbooks and research chapters published by international publishing houses (LAP LAMBERT, Germany; Springer Nature)."
      />
      <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b, i) => (
          <Reveal key={b.title} delay={(i % 3) * 0.07}>
            <article className="tech-card flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6">
              <div>
                <div className="flex items-center justify-between">
                  <BookMarked size={17} strokeWidth={1.3} className="text-primary" />
                  <span className="rounded bg-card px-2 py-0.5 font-display text-[0.58rem] sm:text-[0.62rem] text-primary uppercase border border-border">
                    {b.type}
                  </span>
                </div>
                <h3 className="mt-3 text-sm sm:text-base font-semibold text-foreground leading-snug">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-[0.7rem] sm:text-xs text-muted-foreground italic">
                  Authors: {b.authors}
                </p>
                <p className="mt-1.5 text-xs text-foreground/80">{b.publisher}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>Year: {b.year}</span>
                <span className="text-primary font-mono text-[0.65rem]">{b.isbn}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────── Achievements */

export function Achievements() {
  const [open, setOpen] = useState<number | null>(0);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    achievements.forEach((a) => set.add(a.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredAchievements = useMemo(() => {
    if (filterCategory === "All") return achievements;
    return achievements.filter((a) => a.category === filterCategory);
  }, [filterCategory]);

  return (
    <Section id="achievements">
      <FloatingIcons />
      <SectionHeading
        index="07"
        eyebrow="Distinctions & Governance"
        title="Academic & administrative achievements."
        description="21 Key institutional, state-level, editorial, and quality governance appointments across Tamil Nadu higher education."
      />

      {/* Category filter — scroll on mobile, wrap on desktop */}
      <div className="mb-6 sm:mb-8 flex gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:flex-wrap sm:overflow-visible">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setFilterCategory(cat);
              setOpen(null);
            }}
            className={cn(
              "whitespace-nowrap shrink-0 px-2.5 sm:px-3 py-1.5 text-[0.62rem] sm:text-xs font-display uppercase tracking-wider transition-colors",
              filterCategory === cat
                ? "bg-primary text-primary-foreground font-semibold"
                : "border border-border text-muted-foreground hover:text-foreground hover:bg-card/40",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="divide-y divide-border border-y border-border">
        {filteredAchievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.02}>
            <button
              type="button"
              onClick={() => setOpen(open === a.id ? null : a.id)}
              className="group flex w-full items-center justify-between gap-3 sm:gap-6 py-3.5 sm:py-4 text-left transition-all duration-200 hover:pl-1.5 sm:hover:pl-2"
            >
              <span className="flex items-center gap-2.5 sm:gap-4 min-w-0">
                <span className="font-display text-[0.58rem] sm:text-[0.62rem] tracking-[0.18em] text-primary shrink-0">
                  {String(a.id).padStart(2, "0")}
                </span>
                <span className="text-xs sm:text-sm font-medium text-foreground leading-snug">
                  {a.title}
                </span>
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <span className="hidden lg:inline rounded bg-card border border-border px-2 py-0.5 text-[0.6rem] text-muted-foreground uppercase">
                  {a.category}
                </span>
                <ChevronDown
                  size={15}
                  className={cn(
                    "text-muted-foreground transition-transform group-hover:text-primary",
                    open === a.id && "rotate-180 text-primary",
                  )}
                />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {open === a.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden pb-4 text-xs sm:text-sm leading-relaxed text-muted-foreground pl-6 sm:pl-10"
                >
                  <p>{a.body}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ─────────────────────────────────────────────── Memberships */

export function Memberships() {
  return (
    <Section id="memberships" className="bg-steel/20">
      <div className="blueprint-grid-fine absolute inset-0 opacity-60" />
      <SectionHeading
        index="08"
        eyebrow="Professional Bodies"
        title="Elected & life memberships."
        description="Recognition across national and international engineering academies and professional institutions."
      />
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {memberships.map((m, i) => (
          <Reveal key={m.code} delay={i * 0.04}>
            <div className="tech-card p-4 sm:p-5 flex items-start gap-3 sm:gap-4">
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded border border-primary/40 bg-primary/10 font-display text-[0.62rem] sm:text-xs font-semibold text-primary">
                {m.code}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-foreground leading-snug">
                  {m.title}
                </h4>
                <p className="mt-1 text-[0.7rem] sm:text-xs text-muted-foreground">{m.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
