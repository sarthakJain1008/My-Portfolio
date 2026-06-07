import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../icons";
import { PROFILE, STATS } from "../../lib/portfolio-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

export const Hero = () => {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" data-testid="hero" className="relative pt-32 lg:pt-40 pb-20 overflow-hidden bg-warm">
      {/* Subtle radial gradient background glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.06),transparent_60%)]" 
        aria-hidden="true" 
      />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30" aria-hidden="true" />

      <div className="relative max-w-[960px] mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Floating badge */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-slate-100 rounded-full shadow-sm mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal" />
          </span>
          <span className="text-xs font-medium text-charcoal">Available for freelance work</span>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={1}
          className="text-sm font-semibold tracking-wider uppercase text-teal mb-4"
        >
          Freelance Software Developer
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={2}
          data-testid="hero-title"
          className="text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight leading-[1.1] text-charcoal max-w-4xl mx-auto"
        >
          {PROFILE.tagline}
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={3}
          data-testid="hero-tagline"
          className="mt-6 text-lg text-charcoal-muted leading-relaxed max-w-2xl mx-auto"
        >
          {PROFILE.shortBio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={4}
          className="mt-8 flex flex-wrap justify-center items-center gap-4"
        >
          <a
            href="#contact"
            onClick={scrollTo("contact")}
            data-testid="hero-cta-primary"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white font-medium rounded-2xl hover:bg-teal-hover transition-all duration-300 shadow-[0_4px_16px_rgba(13,148,136,0.35)] hover:shadow-[0_6px_20px_rgba(13,148,136,0.45)]"
          >
            Book a free call
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            onClick={scrollTo("projects")}
            data-testid="hero-cta-secondary"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-charcoal font-medium rounded-2xl border border-slate-200 hover:border-teal/30 hover:shadow-md transition-all duration-300"
          >
            See my work
          </a>
          <a
            href="/resume_sarthak_jain.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-charcoal-muted font-medium hover:text-teal transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        {/* Social links & Location */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={5}
          className="mt-8 flex flex-wrap justify-center items-center gap-3"
        >
          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github} target="_blank" rel="noopener noreferrer"
              data-testid="hero-social-github"
              className="w-10 h-10 rounded-xl border border-slate-200 inline-flex items-center justify-center text-charcoal-muted hover:text-teal hover:border-teal/30 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
              data-testid="hero-social-linkedin"
              className="w-10 h-10 rounded-xl border border-slate-200 inline-flex items-center justify-center text-charcoal-muted hover:text-teal hover:border-teal/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <span className="text-sm text-charcoal-muted border-l border-slate-200 pl-3 ml-1">
            {PROFILE.location}
          </span>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={6}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {STATS.map((s, idx) => (
            <div
              key={s.label}
              data-testid={`hero-stat-${idx}`}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="text-3xl md:text-4xl font-bold text-charcoal">{s.value}</div>
              <div className="mt-2 text-sm text-charcoal-muted leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
