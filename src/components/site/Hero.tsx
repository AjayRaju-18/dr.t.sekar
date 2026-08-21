import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { BookOpen, Download, Mail, GraduationCap, Database, Library, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data/portfolio";
import { TiltCard, useHydrated } from "./primitives";

const GearScene = lazy(() => import("./GearScene"));

const quickLinks = [
  { label: "Google Scholar", icon: GraduationCap, href: "https://scholar.google.com" },
  { label: "Scopus", icon: Database, href: "https://www.scopus.com" },
  { label: "Web of Science", icon: Library, href: "https://www.webofscience.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
  { label: "Email", icon: Mail, href: `mailto:${profile.emails[0]}` },
];

export function Hero() {
  const hydrated = useHydrated();
  const isDesktop = hydrated && typeof window !== "undefined" && window.innerWidth >= 768;

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      <div className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)]" />

      {isDesktop ? (
        <div
          className="absolute inset-y-0 right-0 w-[62%]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 45%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 45%)",
          }}
        >
          <Suspense fallback={null}>
            <GearScene />
          </Suspense>
        </div>
      ) : (
        <svg
          className="spin-slow absolute top-10 -right-16 h-72 w-72 text-primary/25"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          aria-hidden
        >
          <circle cx="50" cy="50" r="34" />
          <circle cx="50" cy="50" r="12" />
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="16"
              x2="50"
              y2="8"
              transform={`rotate(${i * 22.5} 50 50)`}
            />
          ))}
        </svg>
      )}

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="eyebrow mb-5"
          >
            00 / Mechanical Engineering
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl leading-[1.05] font-semibold text-foreground sm:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {profile.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
            className="mt-2 text-sm text-muted-foreground"
          >
            {profile.institution}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-7 inline-flex items-center gap-3 border-y border-border/70 py-3"
          >
            <span className="h-1.5 w-1.5 bg-primary" />
            <span className="font-display text-xs tracking-[0.22em] text-foreground/90 uppercase">
              {profile.tagline}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a
              href="#research"
              className="sweep-btn inline-flex items-center gap-2 border border-primary px-6 py-3 font-display text-xs tracking-[0.16em] text-primary uppercase transition-colors hover:text-primary-foreground"
            >
              <BookOpen size={15} strokeWidth={1.5} /> View Publications
            </a>
            <a
              href="#contact"
              className="sweep-btn inline-flex items-center gap-2 border border-border px-6 py-3 font-display text-xs tracking-[0.16em] text-foreground uppercase transition-colors hover:text-primary-foreground"
            >
              <Download size={15} strokeWidth={1.5} /> Download CV
            </a>
            <a
              href="#contact"
              className="sweep-btn inline-flex items-center gap-2 border border-border px-6 py-3 font-display text-xs tracking-[0.16em] text-foreground uppercase transition-colors hover:text-primary-foreground"
            >
              <Mail size={15} strokeWidth={1.5} /> Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {quickLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={l.label}
                title={l.label}
                className="group flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
              >
                <l.icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs"
        >
          <svg
            className="spin-slow pointer-events-none absolute -inset-8 text-primary/45"
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
              strokeDasharray="0.6 6"
            />
          </svg>
          <TiltCard intensity={12}>
            <div className="relative border border-border/80 bg-card/60 p-2 backdrop-blur-sm">
              <img
                src={profileImg}
                alt={profile.name}
                width={768}
                height={960}
                className="w-full object-cover"
              />
              <span className="absolute -top-px -left-px h-4 w-4 border-t border-l border-primary" />
              <span className="absolute -top-px -right-px h-4 w-4 border-t border-r border-primary" />
              <span className="absolute -bottom-px -left-px h-4 w-4 border-b border-l border-primary" />
              <span className="absolute -right-px -bottom-px h-4 w-4 border-r border-b border-primary" />
            </div>
          </TiltCard>
          <p className="mt-4 text-center font-display text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
            GCT · Coimbatore
          </p>
        </motion.div>
      </div>
    </section>
  );
}
