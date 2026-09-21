import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-primary-foreground/10 bg-primary">
      <div className="hero-rise mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="inline-flex border-l-4 border-accent pl-3 text-xs font-bold uppercase tracking-[0.12em] text-accent-soft">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.02] text-primary-foreground sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/65 sm:text-lg">
          {intro}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
