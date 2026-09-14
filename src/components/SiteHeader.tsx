import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ButtonLink, PhoneLink } from "./ui/button-link";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/savoir-faire", label: "Notre savoir-faire" },
  { to: "/collectivites", label: "Collectivités & secteur public" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-foreground/10 bg-primary/95 text-primary-foreground backdrop-blur">
      <div className="mx-auto grid h-20 w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:justify-between lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="relative flex h-11 w-11 items-center justify-center rounded-sm border border-primary-foreground/20 bg-primary-foreground/5 font-display text-sm font-extrabold text-primary-foreground">
            <span className="absolute bottom-0 left-0 h-1 w-full bg-accent" aria-hidden="true" />
            TB
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-xl font-extrabold text-primary-foreground">TEBMP</span>
            <span className="hidden text-[11px] uppercase tracking-[0.14em] text-primary-foreground/55 sm:block">
              Gros œuvre &amp; maçonnerie générale
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
               activeProps={{ className: "text-primary-foreground after:w-full" }}
               className="relative py-1 text-xs font-bold uppercase tracking-[0.06em] text-primary-foreground/60 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:text-primary-foreground hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink to="/contact" className="px-5 py-2.5">
            Discuter de mon projet
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
           className="flex h-10 w-10 items-center justify-center rounded-sm border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10 lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </>
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-primary-foreground" }}
                onClick={() => setOpen(false)}
                className="border-b border-primary-foreground/10 py-3 text-[15px] font-medium text-primary-foreground/65 transition-colors hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 py-4">
              <ButtonLink to="/contact" onClick={() => setOpen(false)}>
                Discuter de mon projet
              </ButtonLink>
              <PhoneLink />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
