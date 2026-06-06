import React from "react";

export const Section = ({ id, label, title, kicker, children, className = "" }) => {
  return (
    <section
      id={id}
      data-testid={`section-${id}`}
      className={`relative border-t border-white/10 ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
        {(label || title) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
            <div className="lg:col-span-3">
              {label && (
                <p
                  data-testid={`section-${id}-label`}
                  className="font-mono text-xs uppercase tracking-[0.28em] text-lime"
                >
                  // {label}
                </p>
              )}
            </div>
            <div className="lg:col-span-9">
              {title && (
                <h2
                  data-testid={`section-${id}-title`}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
                >
                  {title}
                </h2>
              )}
              {kicker && (
                <p className="mt-6 max-w-2xl font-mono text-sm md:text-base text-white/60 leading-relaxed">
                  {kicker}
                </p>
              )}
            </div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
