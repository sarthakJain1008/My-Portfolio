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
    <section id="hero" data-testid="hero" className="relative pt-28 lg:pt-36 pb-16 overflow-hidden bg-warm">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" aria-hidden="true" />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Photo */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal/20 via-teal/5 to-transparent blur-sm" aria-hidden="true" />
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] border border-white/80">
                <img
                  src={PROFILE.photo}
                  alt={`${PROFILE.name} — Freelance Developer`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl px-4 py-2 shadow-lg border border-slate-100 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-teal opacity-60 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal" />
                </span>
                <span className="text-sm font-medium text-charcoal">Available for work</span>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-sm font-medium tracking-wide text-teal mb-5"
            >
              Freelance Software Developer
            </motion.p>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              data-testid="hero-title"
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-charcoal"
            >
              {PROFILE.tagline}
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={3}
              data-testid="hero-tagline"
              className="mt-6 text-lg text-charcoal-muted leading-relaxed max-w-xl"
            >
              {PROFILE.shortBio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="mt-8 flex flex-wrap items-center gap-4"
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

            {/* Social links */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="mt-8 flex items-center gap-3"
            >
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
              <span className="ml-2 text-sm text-charcoal-muted">
                {PROFILE.location}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={6}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {STATS.map((s, idx) => (
            <div
              key={s.label}
              data-testid={`hero-stat-${idx}`}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
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
