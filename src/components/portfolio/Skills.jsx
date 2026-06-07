import React from "react";
import Section from "./Section";
import { SKILLS } from "../../lib/portfolio-data";

export const Skills = () => {
  return (
    <Section
      id="skills"
      label="Tech stack"
      title="The toolkit I bring to every engagement."
      kicker="Cherry-picked tech across backend, frontend, AI, and data — chosen for reliability, velocity, and long-term maintainability."
      altBg
    >
      <div
        data-testid="skills-bento"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {SKILLS.map((s, i) => (
          <div
            key={s.name}
            data-testid={`skill-${i}`}
            className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-teal/20 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium tracking-wide text-teal px-2.5 py-1 rounded-full bg-teal/10">
                {s.category}
              </span>
              <span className="text-xs text-charcoal-muted/50 font-medium">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-charcoal group-hover:text-teal transition-colors">
              {s.name}
            </h3>
            <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">{s.note}</p>
          </div>
        ))}
      </div>

      {/* Philosophy card */}
      <div className="mt-4 bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
        <p className="text-sm font-medium text-teal mb-2">Philosophy</p>
        <p className="text-xl lg:text-2xl font-medium text-charcoal leading-snug">
          Pick boring tech where it counts. Be brave where it matters.
        </p>
      </div>
    </Section>
  );
};

export default Skills;
