import React from "react";
import ReactFastMarquee from "react-fast-marquee";
import { MARQUEE_TECH } from "../../lib/portfolio-data";

const Marquee = ReactFastMarquee.default || ReactFastMarquee;

export const TechMarquee = () => {
  return (
    <div
      data-testid="tech-marquee"
      className="relative border-y border-slate-200 py-5 bg-white overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      <Marquee gradient={false} speed={40} pauseOnHover>
        {MARQUEE_TECH.concat(MARQUEE_TECH).map((tech, i) => (
          <span
            key={i}
            className="mx-8 flex items-center gap-8"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-charcoal-muted whitespace-nowrap">
              {tech}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal/40 flex-shrink-0" />
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TechMarquee;
