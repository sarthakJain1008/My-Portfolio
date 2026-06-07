import React from "react";
import Section from "./Section";
import { ACHIEVEMENTS, TESTIMONIALS } from "../../lib/portfolio-data";

export const Proof = () => {
  return (
    <>
      {/* ── Achievements / Proof Numbers ── */}
      <Section
        id="proof"
        label="By the numbers"
        title="Metrics that moved the needle."
        kicker="Every number below is pulled from an actual deliverable — not an estimate, not a projection."
      >
        {/* Achievement cards */}
        <div
          data-testid="achievements-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10"
        >
          {ACHIEVEMENTS.map((a, i) => (
            <div
              key={i}
              data-testid={`achievement-${i}`}
              className="group bg-ink-surface p-8 hover:bg-lime transition-colors duration-300 cursor-default"
            >
              <div className="text-4xl mb-6">{a.icon}</div>
              <h3 className="font-serif text-2xl text-white group-hover:text-black transition-colors">
                {a.title}
              </h3>
              <p className="mt-3 font-mono text-sm text-white/55 group-hover:text-black/70 leading-relaxed transition-colors">
                {a.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/30 mb-8">
            // What clients say
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                data-testid={`testimonial-${i}`}
                className="border border-white/10 bg-ink-surface p-8 hover:border-lime/30 transition-colors"
              >
                {/* Quote mark */}
                <span className="font-serif text-6xl text-lime/40 leading-none select-none">
                  "
                </span>
                <p className="mt-2 font-mono text-sm text-white/75 leading-relaxed italic">
                  {t.quote}
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 bg-lime/20 rounded-full flex items-center justify-center font-serif text-lime font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-white/70">{t.author}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume download CTA */}
        <div className="mt-16 border border-white/10 p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-lime/30 transition-colors">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-lime mb-2">
              // Full credentials
            </p>
            <h3 className="font-serif text-2xl text-white">
              Want the full picture?
            </h3>
            <p className="mt-2 font-mono text-sm text-white/55">
              Download my resume for complete project details, tech stack depth, and education.
            </p>
          </div>
          <a
            href="/resume_sarthak_jain.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="resume-download"
            className="shrink-0 inline-flex items-center gap-3 px-6 py-4 bg-lime text-black font-mono text-xs uppercase tracking-[0.22em] hover:bg-lime-hover transition-colors"
          >
            Download Résumé →
          </a>
        </div>
      </Section>
    </>
  );
};

export default Proof;
