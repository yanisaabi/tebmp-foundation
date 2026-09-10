import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales | TEBMP" },
      {
        name: "description",
        content:
          "Mentions légales de TEBMP, SAS au capital de 170 000 €, SIREN 501 456 479, RCS Toulouse, 13 Bis impasse de la Flambère, 31300 Toulouse.",
      },
      { property: "og:title", content: "Mentions légales | TEBMP" },
      { property: "og:description", content: "Informations légales de la société TEBMP." },
      { property: "og:url", content: "/mentions-legales" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/mentions-legales" }],
  }),
  component: MentionsLegales,
});

function MentionsLegales() {
  return (
    <>
      <PageHero
        eyebrow="Informations"
        title="Mentions légales"
        intro="Informations légales relatives à la société TEBMP et à ce site."
      />
      <section className="mx-auto w-full max-w-3xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="space-y-8 text-base leading-relaxed text-foreground/85">
          <div>
            <h2 className="font-display text-xl">Éditeur du site</h2>
            <p className="mt-3">
              TEBMP (Travaux Entretien Bâtiment Midi-Pyrénées) – SAS au capital de 170 000 € – SIREN
              501 456 479 – RCS Toulouse – Code NAF 4399C.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Coordonnées</h2>
            <address className="mt-3 not-italic">
              13 Bis impasse de la Flambère, 31300 Toulouse
              <br />
              Téléphone :{" "}
              <a href="tel:+33561310849" className="font-medium text-accent hover:text-accent-hover">
                05 61 31 08 49
              </a>
            </address>
          </div>
          <div>
            <h2 className="font-display text-xl">Propriété intellectuelle</h2>
            <p className="mt-3">
              Les contenus de ce site sont la propriété de TEBMP. Les photographies présentes sur le
              site sont des visuels d'illustration et ne représentent pas des chantiers réalisés par
              l'entreprise.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl">Données personnelles</h2>
            <p className="mt-3">
              Les informations transmises via le formulaire de contact sont utilisées uniquement pour
              répondre à votre demande. Vous pouvez demander leur accès, leur rectification ou leur
              suppression par téléphone au 05 61 31 08 49.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
