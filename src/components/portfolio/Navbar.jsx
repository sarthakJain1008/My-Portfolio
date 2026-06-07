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
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    >
      <div className={`mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 ${scrolled ? "pt-3" : "pt-5"} transition-all duration-300`}>
        <nav
          className={`relative flex items-center justify-between h-14 px-5 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_1px_3px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.04)] border border-white/60"
              : "bg-transparent"
          }`}
        >
          <a
            href="#top"
            data-testid="nav-logo"
            onClick={go("hero")}
            className="text-lg font-bold tracking-tight text-charcoal hover:text-teal transition-colors"
          >
            Sarthak Jain
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={go(l.id)}
                data-testid={`nav-link-${l.id}`}
                className="px-3 py-2 text-sm font-medium text-charcoal-muted hover:text-charcoal transition-colors rounded-xl hover:bg-black/[0.03]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={go("contact")}
              data-testid="nav-cta"
              className="ml-3 inline-flex items-center gap-2 px-5 py-2 bg-teal text-white text-sm font-medium rounded-2xl hover:bg-teal-hover transition-colors shadow-[0_2px_8px_rgba(13,148,136,0.3)]"
            >
              Let's talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            data-testid="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 rounded-lg p-1 hover:bg-black/[0.05] transition-colors"
          >
            <span
              className="block h-[2px] w-full bg-charcoal transition-all duration-200 origin-center rounded-full"
              style={{ transform: open ? "translateY(5px) rotate(45deg)" : "none" }}
            />
            <span
              className="block h-[2px] w-full bg-charcoal transition-all duration-200 rounded-full"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-full bg-charcoal transition-all duration-200 origin-center rounded-full"
              style={{ transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }}
            />
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div
            data-testid="mobile-menu"
            className="md:hidden mt-2 rounded-2xl glass shadow-lg border border-white/60 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={go(l.id)}
                  data-testid={`mobile-nav-link-${l.id}`}
                  className="py-3 text-base font-medium text-charcoal-muted hover:text-teal transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={go("contact")}
                data-testid="mobile-nav-cta"
                className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 bg-teal text-white text-sm font-medium rounded-2xl"
              >
                Let's talk →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
