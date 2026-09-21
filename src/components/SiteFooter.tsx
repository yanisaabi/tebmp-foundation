import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/savoir-faire", label: "Notre savoir-faire" },
  { to: "/collectivites", label: "Collectivités & secteur public" },
  { to: "/contact", label: "Contact" },
  { to: "/mentions-legales", label: "Mentions légales" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-accent bg-anthracite text-background/80">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold text-background">TEBMP</p>
          <p className="mt-2 text-sm leading-relaxed">
            Travaux Entretien Bâtiment Midi-Pyrénées — gros œuvre, maçonnerie générale et génie civil
            à Toulouse depuis 2007.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-background/60">
            Coordonnées
          </h2>
          <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed">
            <p>13 Bis impasse de la Flambère</p>
            <p>31300 Toulouse</p>
            <p>
              <a href="tel:+33561310849" className="transition-colors hover:text-accent-soft">
                05 61 31 08 49
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-background/60">
            Navigation
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto w-full max-w-7xl px-5 py-6 text-xs leading-relaxed text-background/60 lg:px-8">
          TEBMP – 13 Bis impasse de la Flambère, 31300 Toulouse – 05 61 31 08 49
        </div>
      </div>
    </footer>
  );
}
