import React from "react";
import Section from "./Section";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "../../lib/portfolio-data";

const ProjectCard = ({ project }) => {
  const Tag = project.link ? "a" : "div";
  const linkProps = project.link
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Tag
      {...linkProps}
      data-testid={`project-${project.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Year badge */}
        <div className="absolute top-4 left-4 text-xs font-medium tracking-wide text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {project.year}
        </div>

        {/* Arrow button */}
        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm inline-flex items-center justify-center text-white group-hover:bg-teal group-hover:text-white transition-colors">
          <ArrowUpRight className="w-4 h-4" />
        </div>

        {/* Highlight pill */}
        {project.highlight && (
          <div className="absolute bottom-4 left-4 text-xs font-medium text-white bg-teal/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
            {project.highlight}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs font-medium text-charcoal-muted mb-2">
          <span>{project.role}</span>
          <span className="text-slate-300">·</span>
          <span>{project.stack.length} tech</span>
        </div>
        <h3 className="text-xl font-semibold text-charcoal group-hover:text-teal transition-colors leading-tight">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-sm text-charcoal-muted mt-1">{project.subtitle}</p>
        )}
        <p className="mt-3 text-sm text-charcoal-muted leading-relaxed flex-1">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full border border-slate-200 text-xs font-medium text-charcoal-muted group-hover:border-teal/20 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Tag>
  );
};

export const Projects = () => {
  return (
    <Section
      id="projects"
      label="Selected work"
      title="Products shipped, problems solved."
      kicker="Real client projects — from AI automation pipelines to scraping infrastructure and CRM systems. Every project listed was actually built and delivered."
    >
      <div
        data-testid="projects-grid"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 justify-between bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
        <p className="text-sm text-charcoal-muted">
          All projects above are real client work — case studies available on request.
        </p>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          data-testid="projects-cta"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-teal text-white text-sm font-medium rounded-2xl hover:bg-teal-hover transition-colors shadow-sm"
        >
          Request case studies <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
};

export default Projects;
