import { createFileRoute } from "@tanstack/react-router";
import coulage from "@/assets/coulage-beton.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/savoir-faire")({
  head: () => ({
    meta: [
      { title: "Notre savoir-faire — Gros œuvre, génie civil, rénovation | TEBMP" },
      {
        name: "description",
        content:
          "Gros œuvre et maçonnerie générale, génie civil, rénovation et entretien de bâtiments : les trois expertises de TEBMP à Toulouse et en Haute-Garonne.",
      },
      { property: "og:title", content: "Notre savoir-faire | TEBMP" },
      {
        property: "og:description",
        content:
          "Les trois expertises de TEBMP : gros œuvre et maçonnerie générale, génie civil, rénovation et entretien de bâtiments.",
      },
      { property: "og:url", content: "/savoir-faire" },
    ],
    links: [{ rel: "canonical", href: "/savoir-faire" }],
  }),
  component: SavoirFaire,
});

const blocs = [
  {
    title: "Gros œuvre & maçonnerie générale",
    text: "Fondations, murs porteurs, structures en béton : nous réalisons les travaux de gros œuvre qui donnent aux bâtiments leur solidité, dans le respect des règles de l'art et des délais.",
    details: [
      "Travaux de fondation et de soubassement",
      "Murs porteurs et maçonnerie générale",
      "Structures et éléments en béton",
    ],
  },
  {
    title: "Génie civil",
    text: "Ouvrages techniques et travaux de structure pour les projets publics et les bâtiments d'intérêt collectif.",
    details: [
      "Ouvrages techniques liés au bâtiment",
      "Travaux de structure sur projets publics",
      "Interventions pour bâtiments d'intérêt collectif",
    ],
  },
  {
    title: "Rénovation & entretien de bâtiments",
    text: "Nous intervenons aussi sur l'entretien et la rénovation de bâtiments existants, pour prolonger leur durée de vie et répondre aux normes actuelles.",
    details: [
      "Reprise et rénovation de bâtiments existants",
      "Travaux d'entretien courant du bâti",
      "Mise en conformité avec les normes actuelles",
    ],
  },
];

function SavoirFaire() {
  return (
    <>
      <PageHero
        eyebrow="Nos expertises"
        title="Notre savoir-faire"
        intro="TEBMP intervient sur l'ensemble des travaux de structure d'un bâtiment, du gros œuvre à l'entretien, pour les collectivités comme pour les maîtres d'ouvrage professionnels."
      />

      <section className="mx-auto w-full max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="space-y-10">
          {blocs.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <article className="grid gap-8 rounded-2xl border border-border bg-card p-7 shadow-soft lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
                <div>
                  <span className="font-display text-sm font-semibold text-accent">0{i + 1}</span>
                  <h2 className="mt-3 font-display text-2xl leading-snug">{b.title}</h2>
                </div>
                <div>
                  <p className="text-base leading-relaxed text-muted-foreground">{b.text}</p>
                  <ul className="mt-5 space-y-3">
                    {b.details.map((d) => (
                      <li key={d} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img
                src={coulage}
                alt="Coulage de béton dans un coffrage avec armatures en acier sur un chantier"
                width={1200}
                height={912}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rule-accent">
              <h2 className="font-display text-2xl sm:text-3xl">Une méthode simple et suivie</h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Après un premier contact, nous étudions votre projet, établissons un devis, puis
                réalisons les travaux avec un suivi de chantier régulier et un interlocuteur unique.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Image d'illustration — visuel d'ambiance, hors chantiers TEBMP.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
