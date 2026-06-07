import React from "react";
import Section from "./Section";
import { EXPERIENCE } from "../../lib/portfolio-data";

export const Experience = () => {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Real work. Real results."
      kicker="Contracted by companies and startups to ship production-grade systems — every metric below is pulled from actual project deliverables."
    >
      <div data-testid="experience-timeline" className="relative pl-8 lg:pl-16">
        {/* Vertical line */}
        <div className="absolute left-2 lg:left-5 top-2 bottom-2 w-px bg-white/10" aria-hidden="true" />

        <ul className="space-y-16">
          {EXPERIENCE.map((item, i) => (
            <li
              key={i}
              data-testid={`experience-${i}`}
              className="relative group"
            >
              {/* Glowing dot */}
              <span
                className="absolute -left-8 lg:-left-16 top-1.5 w-4 h-4 bg-lime rounded-full transition-all duration-300 group-hover:scale-125"
                style={{ boxShadow: "0 0 20px rgba(204,255,0,0.5)" }}
                aria-hidden="true"
              />

              {/* Card */}
              <div className="border border-white/10 bg-ink-surface p-6 lg:p-8 hover:border-lime/30 transition-colors duration-300">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-lime mb-2">
                      {item.period}
                    </p>
                    <h3 className="font-serif text-2xl lg:text-3xl text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-white/50">{item.org}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-white/20 border border-white/10 px-3 py-1 h-fit">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 border-t border-white/10 pt-6">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex gap-4 font-mono text-sm text-white/65 leading-relaxed">
                      <span className="text-lime shrink-0 mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Experience;
