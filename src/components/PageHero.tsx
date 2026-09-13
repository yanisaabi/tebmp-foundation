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
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 blueprint-grid opacity-45" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <p className="inline-flex border-l-4 border-accent-soft pl-3 text-xs font-bold uppercase tracking-[0.12em] text-accent">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] text-primary sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
