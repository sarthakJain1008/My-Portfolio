import React from "react";
import Marquee from "react-fast-marquee";
import { MARQUEE_TECH } from "../../lib/portfolio-data";

export const TechMarquee = () => {
  return (
    <div
      data-testid="tech-marquee"
      className="relative border-y border-white/10 py-10 bg-ink overflow-hidden"
    >
      <Marquee gradient={false} speed={42} pauseOnHover>
        {MARQUEE_TECH.concat(MARQUEE_TECH).map((tech, i) => (
          <span
            key={i}
            className="mx-10 font-serif italic font-black text-6xl md:text-7xl lg:text-8xl outline-text select-none"
          >
            {tech}
            <span className="mx-6 text-lime not-italic">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TechMarquee;
