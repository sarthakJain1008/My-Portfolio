import React from "react";

export const Section = ({ id, label, title, kicker, children, className = "", altBg = false }) => {
  return (
    <section
      id={id}
      data-testid={`section-${id}`}
      className={`relative ${altBg ? "bg-warm-alt" : "bg-warm"} ${className}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 py-20 lg:py-28">
        {(label || title) && (
          <div className="mb-14 lg:mb-20">
            {label && (
              <p
                data-testid={`section-${id}-label`}
                className="text-sm font-medium tracking-wide text-teal mb-4"
              >
                {label}
              </p>
            )}
            {title && (
              <h2
                data-testid={`section-${id}-title`}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-charcoal leading-[1.1]"
              >
                {title}
              </h2>
            )}
            {kicker && (
              <p className="mt-4 max-w-2xl text-base lg:text-lg text-charcoal-muted leading-relaxed">
                {kicker}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
