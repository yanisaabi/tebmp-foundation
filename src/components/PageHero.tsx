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
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 blueprint-grid-light opacity-60" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          {intro}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
