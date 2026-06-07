import React from "react";
import Section from "./Section";
import { Trophy, Zap, Link, BarChart3 } from "lucide-react";
import { ACHIEVEMENTS, TESTIMONIALS } from "../../lib/portfolio-data";

const iconMap = {
  trophy: Trophy,
  zap: Zap,
  link: Link,
  "bar-chart": BarChart3,
};

export const Proof = () => {
  return (
    <Section
      id="proof"
      label="By the numbers"
      title="Metrics that moved the needle."
      kicker="Every number below is pulled from an actual deliverable — not an estimate, not a projection."
    >
      {/* Achievement cards */}
      <div
        data-testid="achievements-grid"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = iconMap[a.icon] || Trophy;
          return (
            <div
              key={i}
              data-testid={`achievement-${i}`}
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-teal/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-teal" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal group-hover:text-teal transition-colors">
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-charcoal-muted leading-relaxed">
                {a.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Testimonials */}
      <div className="mt-14">
        <p className="text-sm font-medium text-teal mb-6">
          What clients say
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              data-testid={`testimonial-${i}`}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Quote mark */}
              <span className="text-5xl font-bold text-teal/20 leading-none select-none block -mb-2">
                "
              </span>
              <p className="text-base text-charcoal leading-relaxed">
                {t.quote}
              </p>
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 bg-teal/10 rounded-full flex items-center justify-center text-teal font-semibold text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-charcoal">{t.author}</p>
                  <p className="text-xs text-charcoal-muted">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume download CTA */}
      <div className="mt-14 bg-white rounded-2xl p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
        <div>
          <p className="text-sm font-medium text-teal mb-2">
            Full credentials
          </p>
          <h3 className="text-2xl font-semibold text-charcoal">
            Want the full picture?
          </h3>
          <p className="mt-2 text-sm text-charcoal-muted">
            Download my resume for complete project details, tech stack depth, and education.
          </p>
        </div>
        <a
          href="/resume_sarthak_jain.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="resume-download"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-teal text-white font-medium rounded-2xl hover:bg-teal-hover transition-colors shadow-[0_2px_8px_rgba(13,148,136,0.3)]"
        >
          Download Resume →
        </a>
      </div>
    </Section>
  );
};

export default Proof;
