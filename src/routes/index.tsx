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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 blueprint-grid opacity-35" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-20">
          <div className="lg:col-span-6">
            <p className="inline-flex border-l-4 border-accent-soft pl-3 text-xs font-bold uppercase tracking-[0.12em] text-accent">
              Toulouse &amp; Haute-Garonne · Depuis 2007
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
              Gros œuvre et maçonnerie générale au service des collectivités
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              TEBMP construit, rénove et entretient des bâtiments publics et collectifs à Toulouse et
              en Haute-Garonne depuis 2007. Une entreprise à taille humaine, rigoureuse et habituée
              aux marchés publics.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Discuter de mon projet</ButtonLink>
              <PhoneLink variant="outline" />
            </div>
          </div>

          <div className="relative pb-7 lg:col-span-6 lg:pl-8">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-lift lg:aspect-[4/5]">
              <img
                src={heroImage}
                alt="Structure en béton armé d'un bâtiment en cours de construction, avec grues et coffrages"
                width={1600}
                height={1008}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-primary/80 to-transparent" aria-hidden="true" />
            </div>
            <div className="absolute bottom-0 left-0 border-l-4 border-accent-soft bg-card px-5 py-4 shadow-lift lg:left-0">
              <p className="font-display text-base font-bold text-primary">Gros œuvre · Génie civil</p>
              <p className="mt-1 text-[11px] text-muted-foreground">Image d'illustration de chantier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="border-y border-border bg-primary">
        <div className="mx-auto grid w-full max-w-7xl gap-px bg-primary-foreground/15 px-0 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.value} className="bg-primary px-6 py-8 lg:px-8">
              <p className="font-display text-lg font-bold text-primary-foreground">{f.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/65">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="max-w-2xl rule-accent">
            <h2 className="font-display text-2xl sm:text-3xl">Notre savoir-faire</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Trois domaines complémentaires qui couvrent la vie structurelle d'un bâtiment, de sa
              construction à son entretien.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {expertises.map((e, i) => (
            <Reveal key={e.title} delay={i * 90} className="h-full">
              <article className="group flex h-full flex-col rounded-sm border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
                <span className="font-display text-sm font-extrabold text-accent">
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
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-24">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm shadow-soft">
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
          <Reveal delay={100} className="lg:col-span-5">
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
