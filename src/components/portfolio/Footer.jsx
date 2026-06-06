import React from "react";
import { PROFILE } from "../../lib/portfolio-data";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="relative border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-white/40">
          <span className="w-2 h-2 bg-lime inline-block" />
          © {year} {PROFILE.name} — Built from a blank file.
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-white/40">
          {PROFILE.email}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
