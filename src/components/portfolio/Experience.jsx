import React from "react";
import Section from "./Section";
import { EXPERIENCE } from "../../lib/portfolio-data";

export const Experience = () => {
  return (
    <Section
      id="experience"
      label="Journey"
      title="A record of building, breaking and shipping."
      kicker="Selected milestones from the past few years — across studios, startups and independent client work."
    >
      <div data-testid="experience-timeline" className="relative pl-8 lg:pl-12">
        {/* Vertical line */}
        <div className="absolute left-2 lg:left-4 top-2 bottom-2 w-px bg-white/15" aria-hidden="true" />
        <ul className="space-y-14">
          {EXPERIENCE.map((item, i) => (
            <li
              key={i}
              data-testid={`experience-${i}`}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Glowing dot */}
              <span
                className="absolute -left-8 lg:-left-12 top-2 w-4 h-4 bg-lime rounded-full"
                style={{ boxShadow: "0 0 24px rgba(204,255,0,0.55)" }}
                aria-hidden="true"
              />
              <div className="lg:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-lime">{item.period}</p>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-serif text-2xl lg:text-3xl text-white">{item.role}</h3>
                <p className="mt-1 font-mono text-sm text-white/50">{item.org}</p>
                <ul className="mt-5 space-y-3">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="font-mono text-sm text-white/65 leading-relaxed flex gap-3">
                      <span className="text-lime select-none">→</span>
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
