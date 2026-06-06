import React from "react";
import Section from "./Section";
import { PROFILE } from "../../lib/portfolio-data";

export const About = () => {
  return (
    <Section id="about" label="About" title={null}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/40 mb-3">
            (01) Who
          </p>
          <p className="font-mono text-sm text-white/60 leading-relaxed">
            Independent engineer, occasional designer, full-time generalist building useful software.
          </p>
        </div>
        <div className="lg:col-span-9">
          <p
            data-testid="about-narrative"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.18] tracking-tight"
          >
            I'm <span className="text-lime">{PROFILE.firstName}</span> — a freelance software
            developer obsessed with{" "}
            <span className="italic">turning fuzzy ideas into resilient products</span>. I
            partner with founders and teams to ship{" "}
            <span className="underline decoration-lime decoration-[3px] underline-offset-8">AI-powered</span>{" "}
            platforms, automated workflows and data dashboards that move the business —
            not just the codebase.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
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
                d: "Drop in as architect, lead engineer or as the entire delivery squad.",
              },
            ].map((b) => (
              <div key={b.k} className="border-l border-white/10 pl-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-lime">{b.k}</p>
                <h3 className="mt-3 font-serif text-2xl text-white">{b.t}</h3>
                <p className="mt-3 font-mono text-sm text-white/55 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
