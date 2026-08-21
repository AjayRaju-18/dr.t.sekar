import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  GraduationCap,
  Database,
  Library,
  Linkedin,
  Globe,
  Copy,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { profile, navSections } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./primitives";

const profileLinks = [
  { label: "LinkedIn", icon: Linkedin, href: profile.linkedin },
  { label: "Google Scholar", icon: GraduationCap, href: profile.googleScholar },
  { label: "Scopus", icon: Database, href: profile.scopusUrl },
  { label: "Web of Science", icon: Library, href: profile.webOfScienceUrl },
  { label: "GCT Profile", icon: Globe, href: profile.collegeProfile },
];

export function Contact() {
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(text);
    toast.success(`${label} copied!`);
    setTimeout(() => setCopied(null), 2200);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="section-inner relative">
        <SectionHeading
          index="09"
          eyebrow="Contact & Collaboration"
          title="Get in touch."
          description="For research collaboration, doctoral supervision, academic consultation, IPR queries, or keynote invitations."
        />

        <div className="grid gap-5 sm:gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ── Contact Info Column ── */}
          <Reveal className="space-y-3 sm:space-y-4">
            {/* Email */}
            <div className="tech-card flex items-start justify-between gap-3 p-4 sm:p-5">
              <div className="flex items-start gap-3 min-w-0">
                <Mail size={17} strokeWidth={1.4} className="mt-0.5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="eyebrow mb-1 text-[0.6rem] sm:text-[0.65rem]">
                    Official &amp; Academic Email
                  </p>
                  {profile.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="nav-underline block text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground break-all"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(profile.emails[0], "Email")}
                className="shrink-0 rounded p-1.5 text-muted-foreground hover:text-primary transition-colors"
                title="Copy email"
              >
                {copied === profile.emails[0] ? (
                  <Check size={15} className="text-primary" />
                ) : (
                  <Copy size={15} />
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="tech-card flex items-start justify-between gap-3 p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <Phone size={17} strokeWidth={1.4} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <p className="eyebrow mb-1 text-[0.6rem] sm:text-[0.65rem]">Mobile Phone</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="nav-underline block text-xs sm:text-sm font-medium text-foreground hover:text-primary"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(profile.phone, "Phone")}
                className="shrink-0 rounded p-1.5 text-muted-foreground hover:text-primary transition-colors"
                title="Copy phone"
              >
                {copied === profile.phone ? (
                  <Check size={15} className="text-primary" />
                ) : (
                  <Copy size={15} />
                )}
              </button>
            </div>

            {/* Address */}
            <div className="tech-card flex items-start gap-3 p-4 sm:p-5">
              <MapPin size={17} strokeWidth={1.4} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <p className="eyebrow mb-1 text-[0.6rem] sm:text-[0.65rem]">
                  Department &amp; Office
                </p>
                <p className="text-xs sm:text-sm text-foreground leading-snug">
                  P.G. Manufacturing Engg &amp; Engg Design
                </p>
                <p className="mt-1 text-[0.7rem] sm:text-xs text-muted-foreground">{profile.address}</p>
                <p className="mt-1.5 text-[0.7rem] sm:text-xs text-primary/80">
                  Native: {profile.personal.nativePlace}
                </p>
              </div>
            </div>

            {/* Profile Links */}
            <div className="tech-card p-4 sm:p-5">
              <p className="eyebrow mb-2.5 text-[0.6rem] sm:text-[0.65rem]">
                Scholarly &amp; Professional Profiles
              </p>
              <div className="flex flex-wrap gap-2">
                {profileLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    title={l.label}
                    className="flex items-center gap-1.5 border border-border bg-card/60 px-2.5 py-1.5 text-[0.68rem] sm:text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                  >
                    <l.icon size={13} strokeWidth={1.5} />
                    <span>{l.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Contact Form Column ── */}
          <Reveal delay={0.12}>
            <form
              className="tech-card grid gap-3.5 sm:gap-4 p-5 sm:p-6 lg:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name") as string;
                setTimeout(() => {
                  setSending(false);
                  (e.target as HTMLFormElement).reset();
                  toast.success(`Thank you, ${name}!`, {
                    description: "Dr. Sekar will respond to your enquiry shortly.",
                  });
                }, 900);
              }}
            >
              <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="eyebrow text-[0.6rem] sm:text-[0.65rem]">Full Name</span>
                  <input
                    required
                    name="name"
                    placeholder="e.g. Dr. Rajesh Kumar"
                    className="border border-input bg-background/60 px-3 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/60"
                  />
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="eyebrow text-[0.6rem] sm:text-[0.65rem]">Email Address</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="e.g. rajesh@university.edu"
                    className="border border-input bg-background/60 px-3 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/60"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="eyebrow text-[0.6rem] sm:text-[0.65rem]">Subject / Enquiry</span>
                <input
                  name="subject"
                  required
                  placeholder="e.g. Research Collaboration / Ph.D. Guidance / IPR Advisory"
                  className="border border-input bg-background/60 px-3 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/60"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="eyebrow text-[0.6rem] sm:text-[0.65rem]">Detailed Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Describe your research query, institutional collaboration, or academic initiative…"
                  className="resize-none border border-input bg-background/60 px-3 py-2.5 text-xs sm:text-sm text-foreground outline-none transition-colors focus:border-primary placeholder:text-muted-foreground/60"
                />
              </label>

              <button
                type="submit"
                disabled={sending}
                className="sweep-btn mt-1 inline-flex w-full sm:w-fit items-center justify-center gap-2 border border-primary bg-primary/10 px-6 py-3 font-display text-[0.65rem] sm:text-xs tracking-[0.14em] text-primary uppercase transition-colors hover:text-primary-foreground disabled:opacity-60"
              >
                <Send size={14} strokeWidth={1.5} />
                {sending ? "Dispatching…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-steel/30">
      <div className="section-inner py-8 sm:py-10">
        {/* Top row */}
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
              Dr. Sekar Tamilperuvalathan
            </p>
            <p className="mt-0.5 text-[0.65rem] sm:text-[0.7rem] text-muted-foreground/70 leading-snug">
              Associate Professor &amp; Head, P.G-Manufacturing Engg &amp; Engg Design · GCT
              Coimbatore
            </p>
          </div>

          {/* Footer Nav */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-5"
          >
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="nav-underline text-[0.65rem] sm:text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {profileLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                className="rounded p-1.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <l.icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom credit */}
        <div className="mt-6 sm:mt-8 border-t border-border/40 pt-5 text-center">
          <p className="font-display text-[0.58rem] tracking-[0.45em] text-primary/50 uppercase">
            Crafted by ARGUZ
          </p>
        </div>
      </div>
    </footer>
  );
}
