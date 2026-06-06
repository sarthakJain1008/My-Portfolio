import React, { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "../../lib/portfolio-data";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-logo"
          onClick={go("hero")}
          className="font-serif text-xl font-bold tracking-tight text-white hover:text-lime transition-colors"
        >
          {PROFILE.firstName}<span className="text-lime">.</span>{PROFILE.lastName.toLowerCase()}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white/60 hover:text-lime transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={go("contact")}
            data-testid="nav-cta"
            className="ml-3 inline-flex items-center gap-2 px-4 py-2 bg-lime text-black font-mono text-xs uppercase tracking-[0.18em] hover:bg-lime-hover transition-colors"
          >
            Start a project →
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          data-testid="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/80 hover:text-lime p-1"
        >
          <div className="space-y-1.5">
            <span
              className="block h-px w-6 bg-current transition-all duration-200 origin-center"
              style={{ transform: open ? "translateY(8px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-px w-6 bg-current transition-all duration-200"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-px w-6 bg-current transition-all duration-200 origin-center"
              style={{ transform: open ? "translateY(-8px) rotate(-45deg)" : "none" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl"
        >
          <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={go(l.id)}
                data-testid={`mobile-nav-link-${l.id}`}
                className="py-3 font-mono text-sm uppercase tracking-[0.18em] text-white/70 hover:text-lime border-b border-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={go("contact")}
              data-testid="mobile-nav-cta"
              className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 bg-lime text-black font-mono text-xs uppercase tracking-[0.18em]"
            >
              Start a project →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
