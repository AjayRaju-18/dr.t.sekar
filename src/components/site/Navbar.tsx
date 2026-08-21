import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cog } from "lucide-react";
import { navSections } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  // Track scroll position for background + active section
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Find which section is currently in view
      const sections = ["top", ...navSections.map((s) => s.id)];
      let current = "top";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = useCallback((id: string) => {
    setOpen(false);
    // Small delay to let the menu close before scrolling
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border/70 bg-background/85 backdrop-blur-xl shadow-sm"
            : "border-b border-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-5 transition-all duration-500",
            scrolled ? "h-14" : "h-16 sm:h-20",
          )}
        >
          {/* Brand */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("top");
            }}
            className="flex items-center gap-2 sm:gap-3 group"
          >
            <Cog
              className="spin-slow text-primary group-hover:text-primary/80 transition-colors"
              size={18}
              strokeWidth={1.4}
            />
            <span className="font-display text-xs sm:text-sm tracking-[0.18em] text-foreground uppercase">
              Dr. T. Sekar
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-5 md:flex lg:gap-7" aria-label="Main navigation">
            {navSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(s.id);
                }}
                className={cn(
                  "nav-underline font-display text-[0.62rem] lg:text-xs tracking-[0.14em] lg:tracking-[0.16em] uppercase transition-colors",
                  activeSection === s.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {s.label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-primary/60 hover:text-primary md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
            >
              <nav
                className="grid gap-0 px-4 py-3"
                aria-label="Mobile navigation"
              >
                {navSections.map((s, i) => (
                  <motion.a
                    key={s.id}
                    href={`#${s.id}`}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.24 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(s.id);
                    }}
                    className={cn(
                      "flex items-center gap-3 border-b border-border/40 py-3.5 font-display text-xs tracking-[0.18em] uppercase transition-colors last:border-0",
                      activeSection === s.id
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {activeSection === s.id && (
                      <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                    )}
                    {s.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay when mobile menu is open */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
            aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  );
}
