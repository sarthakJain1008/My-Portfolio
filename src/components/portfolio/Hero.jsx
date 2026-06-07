import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Mail } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../icons";
import { PROFILE, STATS } from "../../lib/portfolio-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

export const Hero = () => {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" data-testid="hero" className="relative pt-32 lg:pt-40 pb-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      {/* Abstract bg image */}
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-screen"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?crop=entropy&cs=srgb&fm=jpg&q=85&w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Status line */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="flex items-center gap-3 mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime" />
          </span>
          <p data-testid="hero-status" className="font-mono text-xs uppercase tracking-[0.28em] text-white/60">
            {PROFILE.status}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-9">
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="font-mono text-xs uppercase tracking-[0.28em] text-lime mb-6"
            >
              // Freelance Software Developer
            </motion.p>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              data-testid="hero-title"
              className="font-serif font-black tracking-[-0.03em] leading-[0.9] text-white text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem]"
            >
              Sarthak{" "}
              <span className="font-bold text-white">Jain</span>
              <span className="text-lime" style={{ fontSize: "0.6em", lineHeight: 1 }}>.</span>
            </motion.h1>
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="lg:col-span-3 lg:pb-6"
          >
            <p data-testid="hero-tagline" className="font-mono text-sm md:text-base text-white/70 leading-relaxed">
              {PROFILE.tagline}
            </p>
            <p className="mt-4 font-mono text-xs text-white/40 uppercase tracking-[0.2em]">
              {PROFILE.location}
            </p>
          </motion.div>
        </div>

        {/* CTAs + social */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={4}
          className="mt-14 flex flex-col sm:flex-row sm:items-center gap-5"
        >
          <a
            href="#contact"
            onClick={scrollTo("contact")}
            data-testid="hero-cta-primary"
            className="group inline-flex items-center justify-between gap-6 px-6 py-4 bg-lime text-black font-mono text-xs uppercase tracking-[0.22em] hover:bg-lime-hover transition-colors"
          >
            <span>Start a project</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </a>
          <a
            href="#projects"
            onClick={scrollTo("projects")}
            data-testid="hero-cta-secondary"
            className="group inline-flex items-center justify-between gap-6 px-6 py-4 border border-white/20 text-white font-mono text-xs uppercase tracking-[0.22em] hover:bg-white hover:text-black transition-colors"
          >
            <span>View selected work</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </a>

          <div className="sm:ml-auto flex items-center gap-2">
            <a
              href={PROFILE.github} target="_blank" rel="noopener noreferrer"
              data-testid="hero-social-github"
              className="w-11 h-11 border border-white/15 inline-flex items-center justify-center text-white/70 hover:text-lime hover:border-lime transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"
              data-testid="hero-social-linkedin"
              className="w-11 h-11 border border-white/15 inline-flex items-center justify-center text-white/70 hover:text-lime hover:border-lime transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="hero-social-email"
              className="w-11 h-11 border border-white/15 inline-flex items-center justify-center text-white/70 hover:text-lime hover:border-lime transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={5}
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-white/10"
        >
          {STATS.map((s, idx) => (
            <div
              key={s.label}
              data-testid={`hero-stat-${idx}`}
              className={`py-8 px-4 lg:px-8 border-b lg:border-b-0 border-white/10 ${idx !== 0 ? "lg:border-l lg:border-l-white/10" : ""} ${idx % 2 === 1 ? "border-l border-l-white/10" : ""}`}
            >
              <div className="font-serif text-4xl md:text-5xl font-bold text-white">{s.value}</div>
              <div className="mt-2 font-mono text-[10px] md:text-xs uppercase tracking-[0.22em] text-white/50">
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
