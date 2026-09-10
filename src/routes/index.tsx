import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/chantier-gros-oeuvre.jpg";
import batimentPublic from "@/assets/batiment-public.jpg";
import { ButtonLink, PhoneLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEBMP — Gros œuvre et maçonnerie générale à Toulouse" },
      {
        name: "description",
        content:
          "TEBMP construit, rénove et entretient des bâtiments publics et collectifs à Toulouse et en Haute-Garonne depuis 2007. Gros œuvre, maçonnerie générale et génie civil.",
      },
      { property: "og:title", content: "TEBMP — Gros œuvre et maçonnerie générale à Toulouse" },
      {
        property: "og:description",
        content:
          "Entreprise de gros œuvre à taille humaine, habituée aux marchés publics, à Toulouse et en Haute-Garonne depuis 2007.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const facts = [
  { value: "Depuis 2007", label: "Bientôt 20 ans d'expérience" },
  { value: "3 à 5 professionnels", label: "Une équipe à taille humaine" },
  { value: "Toulouse & Haute-Garonne", label: "Zone d'intervention" },
  { value: "Spécialiste marchés publics", label: "Collectivités, santé, bailleurs" },
];

const expertises = [
  {
    title: "Gros œuvre & maçonnerie générale",
    text: "Fondations, murs porteurs, structures en béton : nous réalisons les travaux de gros œuvre qui donnent aux bâtiments leur solidité, dans le respect des règles de l'art et des délais.",
  },
  {
    title: "Génie civil",
    text: "Ouvrages techniques et travaux de structure pour les projets publics et les bâtiments d'intérêt collectif.",
  },
  {
    title: "Rénovation & entretien de bâtiments",
    text: "Nous intervenons aussi sur l'entretien et la rénovation de bâtiments existants, pour prolonger leur durée de vie et répondre aux normes actuelles.",
  },
];

const reasons = [
  "Une entreprise à taille humaine, avec un suivi personnalisé de chaque projet",
  "Une expérience de terrain depuis 2007",
  "Une structure spécialisée dans les bâtiments publics et collectifs",
  "Basée à Toulouse, intervention à Toulouse et dans toute la Haute-Garonne",
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 blueprint-grid-light opacity-50" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
              Toulouse &amp; Haute-Garonne · Depuis 2007
            </p>
            <h1 className="mt-4 font-display text-3xl leading-tight text-primary-foreground sm:text-4xl lg:text-[3.25rem]">
              Gros œuvre et maçonnerie générale au service des collectivités
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
              TEBMP construit, rénove et entretient des bâtiments publics et collectifs à Toulouse et
              en Haute-Garonne depuis 2007. Une entreprise à taille humaine, rigoureuse et habituée
              aux marchés publics.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Discuter de mon projet</ButtonLink>
              <PhoneLink variant="outlineLight" />
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-primary-foreground/15 shadow-lift">
              <img
                src={heroImage}
                alt="Structure en béton armé d'un bâtiment en cours de construction, avec grues et coffrages"
                width={1600}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs text-primary-foreground/50">
              Image d'illustration — visuel d'ambiance de chantier de gros œuvre.
            </p>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid w-full max-w-6xl gap-px bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.value} className="bg-card px-6 py-8 lg:px-8">
              <p className="font-display text-lg font-semibold text-primary">{f.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="max-w-2xl rule-accent">
            <h2 className="font-display text-2xl sm:text-3xl">Notre savoir-faire</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Trois domaines complémentaires qui couvrent la vie structurelle d'un bâtiment, de sa
              construction à son entretien.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {expertises.map((e, i) => (
            <Reveal key={e.title} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-display text-sm font-semibold text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl leading-snug">{e.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
                <Link
                  to="/savoir-faire"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                >
                  En savoir plus
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pourquoi TEBMP */}
      <section className="bg-surface">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img
                src={batimentPublic}
                alt="Façade en pierre claire d'un bâtiment public français avec parvis et drapeau"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rule-accent">
              <h2 className="font-display text-2xl sm:text-3xl">Pourquoi choisir TEBMP</h2>
              <ul className="mt-6 space-y-4">
                {reasons.map((r) => (
                  <li key={r} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink to="/collectivites" variant="outline">
                  Collectivités &amp; secteur public
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
