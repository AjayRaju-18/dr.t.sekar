import { useEffect, useState } from "react";
import { Menu, X, Cog } from "lucide-react";
import { navSections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/75 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-500",
          scrolled ? "h-14" : "h-20",
        )}
      >
        <a href="#top" className="flex items-center gap-3">
          <Cog className="spin-slow text-primary" size={20} strokeWidth={1.4} />
          <span className="font-display text-sm tracking-[0.2em] text-foreground uppercase">
            Dr. T. Sekar
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="nav-underline font-display text-xs tracking-[0.16em] text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm border border-border p-2 text-foreground md:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          <div className="grid gap-3">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="font-display text-xs tracking-[0.18em] text-muted-foreground uppercase"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
