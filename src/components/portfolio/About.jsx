import React from "react";
import Section from "./Section";
import { PROFILE } from "../../lib/portfolio-data";

export const About = () => {
  return (
    <Section id="about" label="About me" title={null}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-sm font-medium text-teal mb-3">
            Who I am
          </p>
          <p className="text-base text-charcoal-muted leading-relaxed">
            Independent engineer, occasional designer, full-time generalist building useful software for businesses that need things to just work.
          </p>
        </div>
        <div className="lg:col-span-8">
          <p
            data-testid="about-narrative"
            className="text-2xl sm:text-3xl lg:text-4xl text-charcoal leading-[1.25] tracking-tight font-medium"
          >
            I'm {PROFILE.firstName} — a freelance developer who partners with founders and teams to ship{" "}
            <span className="gradient-text">AI-powered</span>{" "}
            platforms, automated workflows, and data systems that move the business — not just the codebase.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                k: "Approach",
                t: "Ship · Measure · Iterate",
                d: "Tight scopes, fast feedback loops, no theatre. Production-grade from day one.",
              },
              {
                k: "Specialties",
                t: "AI · Full-stack · Data",
                d: "From Spring Boot APIs and React UIs to LLM agents and analytics layers.",
              },
              {
                k: "Engagements",
                t: "Solo · Fractional · Team",
                d: "Drop in as architect, lead engineer, or as the entire delivery squad.",
              },
            ].map((b) => (
              <div key={b.k} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-medium text-teal">{b.k}</p>
                <h3 className="mt-3 text-xl font-semibold text-charcoal">{b.t}</h3>
                <p className="mt-3 text-sm text-charcoal-muted leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
