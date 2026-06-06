import React from "react";
import Section from "./Section";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../lib/portfolio-data";

const ProjectCard = ({ project, index, large = false }) => {
  return (
    <article
      data-testid={`project-${project.id}`}
      className={`group relative overflow-hidden border border-white/10 bg-ink-surface ${
        large ? "lg:col-span-7" : "lg:col-span-5"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-lime">
          ({project.id}) · {project.year}
        </div>
        <div className="absolute top-4 right-4 w-10 h-10 border border-white/30 inline-flex items-center justify-center text-white/80 group-hover:bg-lime group-hover:text-black group-hover:border-lime transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          <span>{project.role}</span>
          <span className="text-white/15">|</span>
          <span>{project.stack.length} tech</span>
        </div>
        <h3 className="mt-3 font-serif text-2xl lg:text-3xl text-white group-hover:text-lime transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 font-mono text-sm text-white/55 leading-relaxed">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 border border-white/15 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export const Projects = () => {
  return (
    <Section
      id="projects"
      label="Selected work"
      title="Products shipped, problems solved."
      kicker="A snapshot of recent engagements — from AI workflow engines to realtime ops dashboards and custom platforms."
    >
      <div
        data-testid="projects-grid"
        className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/10"
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} large={i === 0} />
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 justify-between border-t border-white/10 pt-8">
        <p className="font-mono text-sm text-white/50">
          // More case studies on request — every project under NDA gets a sanitized walkthrough.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          data-testid="projects-cta"
          className="inline-flex items-center gap-3 px-5 py-3 border border-white/20 text-white font-mono text-xs uppercase tracking-[0.22em] hover:bg-lime hover:text-black hover:border-lime transition-colors"
        >
          Request the full deck <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
};

export default Projects;
