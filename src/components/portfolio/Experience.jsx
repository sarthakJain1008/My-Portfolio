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
      altBg
    >
      <div data-testid="experience-timeline" className="relative pl-8 lg:pl-12">
        {/* Vertical line */}
        <div className="absolute left-3 lg:left-5 top-2 bottom-2 w-[2px] bg-slate-200" aria-hidden="true" />

        <ul className="space-y-8">
          {EXPERIENCE.map((item, i) => (
            <li
              key={i}
              data-testid={`experience-${i}`}
              className="relative group"
            >
              {/* Dot */}
              <span
                className="absolute -left-8 lg:-left-12 top-6 w-3.5 h-3.5 bg-teal rounded-full border-[3px] border-warm-alt transition-all duration-300 group-hover:scale-125 z-10"
                aria-hidden="true"
              />

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                  <div>
                    <p className="text-sm font-medium text-teal mb-1.5">
                      {item.period}
                    </p>
                    <h3 className="text-xl lg:text-2xl font-semibold text-charcoal">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-charcoal-muted">{item.org}</p>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-charcoal-muted/40 border border-slate-200 px-3 py-1 rounded-full h-fit">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 border-t border-slate-100 pt-5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-charcoal-muted leading-relaxed">
                      <span className="text-teal shrink-0 mt-0.5 font-bold">›</span>
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
