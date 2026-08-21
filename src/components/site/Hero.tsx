import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Download,
  Mail,
  GraduationCap,
  Database,
  Library,
  Linkedin,
  Globe,
  Award,
} from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data/portfolio";
import { TiltCard, useHydrated } from "./primitives";

const GearScene = lazy(() => import("./GearScene"));

const quickLinks = [
  { label: "LinkedIn", icon: Linkedin, href: profile.linkedin },
  { label: "Scholar", icon: GraduationCap, href: profile.googleScholar },
  { label: "Scopus", icon: Database, href: profile.scopusUrl },
  { label: "WoS", icon: Library, href: profile.webOfScienceUrl },
  { label: "GCT", icon: Globe, href: profile.collegeProfile },
  { label: "Email", icon: Mail, href: `mailto:${profile.emails[0]}` },
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const hydrated = useHydrated();
  const isDesktop = hydrated && typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ paddingTop: "clamp(6.5rem, 14vw, 10rem)", paddingBottom: "clamp(3rem, 8vw, 5rem)" }}
    >
      {/* Background layers */}
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_70%)]" />

      {/* Decorative gear — desktop 3D scene, mobile SVG */}
      {isDesktop ? (
        <div
          className="absolute inset-y-0 right-0 w-[55%] pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
          }}
        >
          <Suspense fallback={null}>
            <GearScene />
          </Suspense>
        </div>
      ) : (
        <svg
          className="spin-slow pointer-events-none absolute -right-20 -top-10 h-72 w-72 text-primary/15 sm:h-80 sm:w-80"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          aria-hidden
        >
          <circle cx="50" cy="50" r="34" />
          <circle cx="50" cy="50" r="12" />
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={i} x1="50" y1="16" x2="50" y2="8" transform={`rotate(${i * 22.5} 50 50)`} />
          ))}
        </svg>
      )}

      {/* Main content grid */}
      <div className="relative section-inner">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          {/* ── Text column ── */}
          <div>
            {/* Eyebrow */}
            <motion.div
              {...fadeUp(0.15)}
              className="mb-4 flex flex-wrap items-center gap-2"
            >
              <span className="eyebrow text-[0.6rem] sm:text-[0.65rem]">
                00 / Mechanical &amp; Manufacturing Engineering
              </span>
              <span className="inline-flex items-center gap-1 rounded border border-primary/40 bg-primary/10 px-2 py-0.5 font-display text-[0.58rem] sm:text-[0.62rem] tracking-wider text-primary uppercase">
                <Award size={10} /> Gold Medalist &amp; C.Eng (UK)
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.25)}
              className="font-display tracking-tight text-foreground"
              style={{
                fontSize: "clamp(1.8rem, 6vw, 3.75rem)",
                lineHeight: 1.06,
              }}
            >
              {profile.name}
            </motion.h1>

            {/* Title */}
            <motion.p {...fadeUp(0.35)} className="mt-3 sm:mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground max-w-xl">
              {profile.title}
            </motion.p>
            <motion.p {...fadeUp(0.42)} className="mt-1.5 text-xs sm:text-sm font-semibold text-foreground/90">
              {profile.institution}
            </motion.p>

            {/* Divider tagline */}
            <motion.div
              {...fadeUp(0.5)}
              className="mt-5 sm:mt-6 inline-flex items-center gap-2.5 border-y border-border/60 py-2.5"
            >
              <span className="h-1.5 w-1.5 bg-primary rounded-full shrink-0" />
              <span className="font-display text-[0.62rem] sm:text-xs tracking-[0.2em] text-foreground/80 uppercase">
                {profile.tagline}
              </span>
            </motion.div>

            {/* CTA Buttons — stacked on mobile, row on sm+ */}
            <motion.div
              {...fadeUp(0.6)}
              className="mt-6 sm:mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap"
            >
              <a
                href="#research"
                className="sweep-btn inline-flex items-center justify-center gap-2 border border-primary bg-primary/10 px-5 py-3 font-display text-[0.65rem] sm:text-xs tracking-[0.14em] text-primary uppercase transition-colors hover:text-primary-foreground"
              >
                <BookOpen size={14} strokeWidth={1.5} />
                View Publications (90+)
              </a>
              <a
                href="#patents"
                className="sweep-btn inline-flex items-center justify-center gap-2 border border-border px-5 py-3 font-display text-[0.65rem] sm:text-xs tracking-[0.14em] text-foreground uppercase transition-colors hover:text-primary-foreground"
              >
                <Download size={14} strokeWidth={1.5} />
                Patents &amp; Innovations
              </a>
              <a
                href="#contact"
                className="sweep-btn inline-flex items-center justify-center gap-2 border border-border px-5 py-3 font-display text-[0.65rem] sm:text-xs tracking-[0.14em] text-foreground uppercase transition-colors hover:text-primary-foreground"
              >
                <Mail size={14} strokeWidth={1.5} />
                Contact &amp; Supervision
              </a>
            </motion.div>

            {/* Quick Profile Links */}
            <motion.div
              {...fadeUp(0.72)}
              className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2"
            >
              {quickLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={l.label}
                  title={l.label}
                  className="group flex h-9 sm:h-10 items-center gap-1.5 sm:gap-2 border border-border bg-card/40 px-2.5 sm:px-3 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
                >
                  <l.icon size={14} strokeWidth={1.5} />
                  <span className="font-display text-[0.6rem] sm:text-[0.62rem] tracking-wider">
                    {l.label}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── Portrait column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full"
            style={{ maxWidth: "clamp(200px, 50vw, 300px)" }}
          >
            {/* Spinning dashed ring */}
            <svg
              className="spin-slow pointer-events-none absolute -inset-6 sm:-inset-8 text-primary/35"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden
            >
              <circle
                cx="50"
                cy="50"
                r="47"
                stroke="currentColor"
                strokeWidth="0.4"
                strokeDasharray="2 3"
              />
              <circle
                cx="50"
                cy="50"
                r="41"
                stroke="currentColor"
                strokeWidth="0.25"
                strokeDasharray="0.5 5"
              />
            </svg>

            <TiltCard intensity={10}>
              <div className="relative border border-border/80 bg-card/60 p-2 backdrop-blur-sm shadow-2xl">
                {/* Corner brackets */}
                <span className="absolute -top-px -left-px h-4 w-4 border-t border-l border-primary" />
                <span className="absolute -top-px -right-px h-4 w-4 border-t border-r border-primary" />
                <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-primary" />
                <span className="absolute -right-px -bottom-px h-4 w-4 border-r border-b border-primary" />
                <img
                  src={profileImg}
                  alt={`Portrait of ${profile.name}`}
                  width={768}
                  height={960}
                  className="w-full object-cover rounded-sm"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </TiltCard>

            {/* Caption row */}
            <div className="mt-3 flex items-center justify-between px-0.5 font-display text-[0.58rem] sm:text-[0.62rem] tracking-[0.2em] text-muted-foreground uppercase">
              <span>GCT · Coimbatore</span>
              <span className="text-primary font-medium">Tittagudi Native</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
