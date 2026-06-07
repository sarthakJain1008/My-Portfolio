import React from "react";
import Section from "./Section";
import { HOW_I_WORK } from "../../lib/portfolio-data";

export const HowIWork = () => {
  return (
    <Section
      id="how-i-work"
      label="How I work"
      title="From first conversation to live system in weeks."
      kicker="I find your biggest bottleneck and eliminate it. No bloated timelines, no surprise invoices."
      altBg
    >
      <div className="relative">
        {/* Progress line (desktop) */}
        <div className="hidden lg:block absolute top-[44px] left-[24px] right-[24px] h-[2px]">
          <div className="w-full h-full bg-slate-200 rounded-full" />
          <div
            className="absolute top-0 left-0 h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #0D9488, #0F766E)", width: "100%" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {HOW_I_WORK.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Step indicator */}
              <div className="flex flex-col items-start mb-6">
                <span className="text-xs font-medium tracking-wide uppercase mb-2 px-3 py-1 rounded-full bg-teal/10 text-teal">
                  {step.timeframe}
                </span>
                <div className="relative w-11 h-11 rounded-full flex items-center justify-center font-semibold text-sm border-2 border-teal text-teal bg-white shadow-sm z-10">
                  {step.step}
                </div>
                {/* Vertical connector (mobile) */}
                {i < HOW_I_WORK.length - 1 && (
                  <div className="lg:hidden w-[2px] h-8 bg-teal/20 ml-5 mt-1" />
                )}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-charcoal mb-3">{step.title}</h3>
                <p className="text-sm text-charcoal-muted leading-relaxed mb-4">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-slate-200 text-charcoal-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HowIWork;
