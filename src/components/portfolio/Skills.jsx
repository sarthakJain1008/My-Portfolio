import React from "react";
import Section from "./Section";
import { SKILLS } from "../../lib/portfolio-data";

const cellBase =
  "group relative p-6 lg:p-8 border-t border-l border-white/10 bg-ink-surface hover:bg-white hover:text-black transition-colors duration-300 cursor-default";

const SkillCell = ({ skill, className = "", index }) => (
  <div data-testid={`skill-${index}`} className={`${cellBase} ${className}`}>
    <div className="flex items-center justify-between">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-lime group-hover:text-black/70">
        {skill.category}
      </span>
      <span className="font-mono text-[10px] text-white/30 group-hover:text-black/40">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
    <h3 className="mt-6 font-serif text-2xl lg:text-3xl leading-tight text-white group-hover:text-black">
      {skill.name}
    </h3>
    <p className="mt-2 font-mono text-xs text-white/50 group-hover:text-black/60">{skill.note}</p>
  </div>
);

const AsciiCell = ({ children, className = "" }) => (
  <div className={`${cellBase} ${className}`}>
    <pre className="font-mono text-[10px] leading-tight text-white/20 whitespace-pre select-none">
{`/  /  /  /  /  /
 /  /  /  /  /
/  /  /  /  /
 /  /  /  /  /
/  /  /  /  /
 /  /  /  /  /`}
    </pre>
    <p className="absolute bottom-6 left-6 right-6 font-mono text-xs uppercase tracking-[0.22em] text-white/40 group-hover:text-black/60">
      {children}
    </p>
  </div>
);

export const Skills = () => {
  return (
    <Section
      id="skills"
      label="Stack"
      title="The toolkit I bring to every engagement."
      kicker="Cherry-picked tech across backend, frontend, AI and data — chosen for reliability, velocity and long-term maintainability."
    >
      <div
        data-testid="skills-bento"
        className="grid grid-cols-2 lg:grid-cols-4 border-r border-b border-white/10"
      >
        {SKILLS.map((s, i) => (
          <SkillCell key={s.name} skill={s} index={i} />
        ))}
        <AsciiCell>// always shipping</AsciiCell>
        <div className={`${cellBase} col-span-2 hover:bg-lime hover:text-black`}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-lime group-hover:text-black/70">
            // philosophy
          </p>
          <p className="mt-6 font-serif text-2xl lg:text-3xl leading-snug text-white group-hover:text-black">
            Pick boring tech where it counts. Be brave where it matters.
          </p>
        </div>
        <AsciiCell>// reliable by default</AsciiCell>
      </div>
    </Section>
  );
};

export default Skills;
