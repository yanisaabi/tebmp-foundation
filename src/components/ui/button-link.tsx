import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

export const buttonStyles = {
  primary: `${base} bg-accent text-accent-foreground shadow-soft hover:bg-accent-hover hover:shadow-lift`,
  outline: `${base} border border-primary/30 bg-transparent text-primary hover:border-primary hover:bg-primary/5`,
  outlineLight: `${base} border border-background/40 bg-transparent text-background hover:border-background hover:bg-background/10`,
} as const;

type Variant = keyof typeof buttonStyles;

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={`${buttonStyles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function PhoneLink({
  variant = "outline",
  className = "",
  label = "05 61 31 08 49",
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  return (
    <a href="tel:+33561310849" className={`${buttonStyles[variant]} ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
      </svg>
      {label}
    </a>
  );
}
