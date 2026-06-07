import React from "react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../icons";
import { PROFILE } from "../../lib/portfolio-data";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="site-footer" className="relative bg-charcoal">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div>
            <a href="#hero" className="text-2xl font-bold text-white hover:text-teal-200 transition-colors">
              Sarthak Jain
            </a>
            <p className="mt-2 text-sm text-white/60 max-w-sm">
              Building intelligent systems that automate what humans shouldn't have to do manually.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="flex items-center gap-3">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 inline-flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 inline-flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-white/50">
              {PROFILE.email}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {year} {PROFILE.name}. Built from a blank file.
          </p>
          <p className="text-sm text-white/40">
            {PROFILE.location}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
