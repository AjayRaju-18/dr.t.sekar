import { useState } from "react";
import { Mail, Phone, MapPin, Send, GraduationCap, Database, Library, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { profile, navSections } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./primitives";

const profileLinks = [
  { label: "Google Scholar", icon: GraduationCap, href: "https://scholar.google.com" },
  { label: "Scopus", icon: Database, href: "https://www.scopus.com" },
  { label: "Web of Science", icon: Library, href: "https://www.webofscience.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <section id="contact" className="relative py-24">
      <div className="blueprint-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          index="09"
          eyebrow="Contact"
          title="Get in touch."
          description="For research collaboration, doctoral supervision enquiries, consultancy or invited talks."
        />
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-4">
            {[
              { icon: Mail, lines: profile.emails, href: `mailto:${profile.emails[0]}` },
              { icon: Phone, lines: [profile.phone], href: `tel:${profile.phone}` },
              { icon: MapPin, lines: [profile.address] },
            ].map((item, i) => (
              <div key={i} className="tech-card flex items-start gap-4 p-5">
                <item.icon size={17} strokeWidth={1.4} className="mt-0.5 shrink-0 text-primary" />
                <div className="text-sm text-muted-foreground">
                  {item.lines.map((l) =>
                    item.href ? (
                      <a
                        key={l}
                        href={item.href}
                        className="nav-underline block w-fit transition-colors hover:text-foreground"
                      >
                        {l}
                      </a>
                    ) : (
                      <p key={l}>{l}</p>
                    ),
                  )}
                </div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              {profileLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={l.label}
                  title={l.label}
                  className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
                >
                  <l.icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              className="tech-card grid gap-4 p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                setTimeout(() => {
                  setSending(false);
                  (e.target as HTMLFormElement).reset();
                  toast.success("Message noted", {
                    description: "Thank you — your enquiry has been recorded.",
                  });
                }, 700);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="eyebrow">Name</span>
                  <input
                    required
                    name="name"
                    className="border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="eyebrow">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="eyebrow">Subject</span>
                <input
                  name="subject"
                  className="border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
              <label className="grid gap-2">
                <span className="eyebrow">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="resize-none border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="sweep-btn mt-2 inline-flex w-fit items-center gap-2 border border-primary px-6 py-3 font-display text-xs tracking-[0.16em] text-primary uppercase transition-colors hover:text-primary-foreground disabled:opacity-60"
              >
                <Send size={15} strokeWidth={1.5} /> {sending ? "Sending…" : "Send Message"}
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
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="font-display text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Dr. Sekar Tamilperuvalathan · GCT Coimbatore
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="nav-underline text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {profileLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                aria-label={l.label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <l.icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-8 text-center font-display text-[0.6rem] tracking-[0.45em] text-primary/45 uppercase">
          Crafted by Arguz
        </p>
      </div>
    </footer>
  );
}
