import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/collectivites")({
  head: () => ({
    meta: [
      { title: "Collectivités & secteur public — marchés publics | TEBMP" },
      {
        name: "description",
        content:
          "TEBMP accompagne collectivités territoriales, établissements de santé et bailleurs dans la construction, la rénovation et l'entretien de leurs bâtiments.",
      },
      { property: "og:title", content: "Collectivités & secteur public | TEBMP" },
      {
        property: "og:description",
        content:
          "Un partenaire habitué aux exigences des marchés publics pour les bâtiments publics et collectifs en Haute-Garonne.",
      },
      { property: "og:url", content: "/collectivites" },
    ],
    links: [{ rel: "canonical", href: "/collectivites" }],
  }),
  component: Collectivites,
});

const points = [
  {
    title: "Maîtrise des procédures de marchés publics",
    text: "Une habitude des cadres, des pièces et des délais propres à la commande publique.",
  },
  {
    title: "Expérience sur bâtiments publics et établissements de santé",
    text: "Des interventions sur des bâtiments accueillant du public et des usages sensibles.",
  },
  {
    title: "Rigueur et conformité réglementaire",
    text: "Qualité d'exécution et respect des règles applicables à chaque étape du chantier.",
  },
  {
    title: "Un interlocuteur unique tout au long du projet",
    text: "Un suivi direct, sans intermédiaire, du premier échange à la réception des travaux.",
  },
];

function Collectivites() {
  return (
    <>
      <PageHero
        eyebrow="Secteur public"
        title="Un partenaire de confiance pour les collectivités et le secteur public"
        intro="TEBMP accompagne les collectivités territoriales, les établissements de santé et les bailleurs dans leurs projets de construction, de rénovation et d'entretien de bâtiments."
      />

      <section className="mx-auto w-full max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/85">
            Habituée aux exigences des marchés publics, l'entreprise s'engage sur la qualité
            d'exécution, le respect des délais et la conformité réglementaire à chaque étape du
            chantier.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <h2 className="font-display text-lg leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Vous préparez une consultation ou un projet de bâtiment public ? Échangeons." />
    </>
  );
}
