import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-gros-oeuvre.jpg";
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
      <section className="relative min-h-[38rem] overflow-hidden bg-primary text-primary-foreground sm:min-h-[42rem] lg:min-h-[46rem]">
        {/* Photographie en arrière-plan de toute la section */}
        <div className="image-reveal absolute inset-0">
          <img
            src={heroImage}
            alt="Ouvriers du bâtiment au travail sur la structure d'un chantier de gros œuvre au coucher du soleil"
            width={1179}
            height={790}
            className="hero-ken-burns h-full w-full object-cover object-[42%_66%] lg:object-[58%_62%]"
          />
          {/* Voile vertical sous le texte en mobile, latéral en desktop : la photo reste lisible sans jamais gêner la lecture */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary/88 via-primary/72 to-primary lg:hidden"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden lg:block lg:bg-gradient-to-r lg:from-primary lg:via-primary/75 lg:to-primary/20"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 hidden lg:block lg:bg-gradient-to-b lg:from-primary/70 lg:via-transparent lg:to-primary"
            aria-hidden="true"
          />
        </div>

        <div className="relative mx-auto flex w-full min-h-[38rem] max-w-7xl items-center px-5 py-16 sm:min-h-[42rem] lg:min-h-[46rem] lg:px-8 lg:py-24">
          <div className="hero-rise max-w-xl lg:max-w-2xl">
            <p className="inline-flex border-l-4 border-accent pl-3 text-xs font-bold uppercase tracking-[0.12em] text-accent-soft">
              Toulouse &amp; Haute-Garonne · Depuis 2007
            </p>
            <h1 className="mt-7 text-balance font-display text-4xl font-semibold leading-[1.04] text-primary-foreground sm:text-5xl lg:text-6xl">
              Gros œuvre et maçonnerie <span className="text-accent-soft">générale</span> au service
              des collectivités
            </h1>
            <p className="mt-7 max-w-md text-base leading-relaxed text-primary-foreground/68 sm:text-lg">
              TEBMP construit, rénove et entretient des bâtiments publics et collectifs à Toulouse
              et en Haute-Garonne depuis 2007. Une entreprise à taille humaine, rigoureuse et
              habituée aux marchés publics.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink to="/contact">Discuter de mon projet</ButtonLink>
              <PhoneLink variant="outlineLight" />
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid w-full max-w-[96rem] gap-px bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.value} delay={i * 90} className="h-full bg-surface">
              <div className="h-full bg-surface px-6 py-9 lg:px-8">
                <p className="font-display text-xl font-semibold text-foreground">{f.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="mx-auto w-full max-w-7xl px-5 py-20 lg:px-8 lg:py-32">
        <Reveal>
          <div className="max-w-2xl rule-accent">
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">Notre savoir-faire</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Trois domaines complémentaires qui couvrent la vie structurelle d'un bâtiment, de sa
              construction à son entretien.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-stretch border-y border-border md:grid-cols-3">
          {expertises.map((e, i) => (
            <Reveal key={e.title} delay={i * 90} className="h-full">
              <article className="group flex h-full flex-col border-b border-border bg-card p-7 transition-all duration-300 hover:bg-surface md:border-b-0 md:border-r md:p-9 md:last:border-r-0">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold leading-snug">{e.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {e.text}
                </p>
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
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-32">
          <Reveal className="lg:col-span-7">
            <div className="overflow-hidden rounded-sm shadow-lift">
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
              <h2 className="font-display text-3xl font-semibold sm:text-5xl">
                Pourquoi choisir TEBMP
              </h2>
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
