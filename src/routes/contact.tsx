import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { submitContactRequest } from "@/lib/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Parlons de votre projet | TEBMP Toulouse" },
      {
        name: "description",
        content:
          "Contactez TEBMP à Toulouse : 05 61 31 08 49 ou formulaire en ligne. Gros œuvre, génie civil, rénovation et entretien de bâtiments en Haute-Garonne.",
      },
      { property: "og:title", content: "Contact | TEBMP" },
      {
        property: "og:description",
        content: "Discutons de votre projet de construction, de rénovation ou d'entretien de bâtiment.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const faq = [
  {
    q: "Dans quelle zone intervenez-vous ?",
    a: "Nous intervenons principalement à Toulouse et dans les communes de la Haute-Garonne.",
  },
  {
    q: "Travaillez-vous avec les collectivités et le secteur public ?",
    a: "Oui, c'est l'un de nos domaines d'expertise : marchés publics, bâtiments collectifs et établissements de santé.",
  },
  {
    q: "Comment se déroule un projet avec TEBMP ?",
    a: "Après un premier contact, nous étudions votre projet, établissons un devis, puis réalisons les travaux avec un suivi de chantier régulier.",
  },
  {
    q: "Comment vous contacter ?",
    a: "Par téléphone au 05 61 31 08 49 ou via le formulaire de ce site.",
  },
];

type Fields = { nom: string; telephone: string; email: string; type: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = { nom: "", telephone: "", email: "", type: "", message: "" };

const fieldClass =
  "w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25";

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.nom.trim().length < 2) e.nom = "Merci d'indiquer votre nom.";
  else if (v.nom.trim().length > 100) e.nom = "Nom trop long (100 caractères maximum).";
  if (!/^[0-9+\s().-]{9,20}$/.test(v.telephone.trim()))
    e.telephone = "Merci d'indiquer un numéro de téléphone valide.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Merci d'indiquer une adresse e-mail valide.";
  if (!v.type) e.type = "Merci de choisir un type de projet.";
  if (v.message.trim().length < 10) e.message = "Merci de décrire votre projet en quelques mots.";
  else if (v.message.trim().length > 1500) e.message = "Message trop long (1500 caractères maximum).";
  return e;
}

function Contact() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const submitContact = useServerFn(submitContactRequest);

  function update<K extends keyof Fields>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(false);
    setSubmitError("");
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setSubmitting(true);
    try {
      await submitContact({ data: { ...values, website: "" } });
      setSent(true);
      setValues(initial);
    } catch {
      setSubmitError(
        "Votre demande n’a pas pu être envoyée. Merci de réessayer ou de nous appeler au 05 61 31 08 49.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        intro="Décrivez-nous votre besoin en quelques lignes, ou appelez-nous directement. Nous revenons vers vous rapidement."
      />

      <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <Reveal>
          <div className="rounded-sm border border-border bg-card p-7 shadow-soft lg:p-9">
            <h2 className="font-display text-xl">Nous écrire</h2>
            {sent && (
              <p
                role="status"
                className="mt-5 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground"
              >
                Merci, votre demande a bien été envoyée et enregistrée. Nous vous recontactons
                rapidement. Pour une réponse immédiate, appelez le 05 61 31 08 49.
              </p>
            )}
            {submitError && (
              <p
                role="alert"
                className="mt-5 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
              >
                {submitError}
              </p>
            )}

            <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
              <div>
                <label htmlFor="nom" className="mb-2 block text-sm font-medium">
                  Nom
                </label>
                <input
                  id="nom"
                  name="nom"
                  maxLength={100}
                  value={values.nom}
                  onChange={(e) => update("nom", e.target.value)}
                  className={fieldClass}
                  placeholder="Votre nom"
                  aria-invalid={!!errors.nom}
                />
                {errors.nom && <p className="mt-1.5 text-xs text-destructive">{errors.nom}</p>}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="telephone" className="mb-2 block text-sm font-medium">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    maxLength={20}
                    value={values.telephone}
                    onChange={(e) => update("telephone", e.target.value)}
                    className={fieldClass}
                    placeholder="06 00 00 00 00"
                    aria-invalid={!!errors.telephone}
                  />
                  {errors.telephone && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.telephone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={fieldClass}
                    placeholder="vous@exemple.fr"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="type" className="mb-2 block text-sm font-medium">
                  Type de projet
                </label>
                <select
                  id="type"
                  name="type"
                  value={values.type}
                  onChange={(e) => update("type", e.target.value)}
                  className={fieldClass}
                  aria-invalid={!!errors.type}
                >
                  <option value="">Sélectionnez…</option>
                  <option value="Gros œuvre">Gros œuvre</option>
                  <option value="Génie civil">Génie civil</option>
                  <option value="Rénovation/entretien">Rénovation / entretien</option>
                  <option value="Autre">Autre</option>
                </select>
                {errors.type && <p className="mt-1.5 text-xs text-destructive">{errors.type}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1500}
                  value={values.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={fieldClass}
                  placeholder="Décrivez votre projet, le type de bâtiment et le calendrier envisagé."
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="h-auto w-full rounded-sm bg-accent px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-accent-foreground shadow-soft hover:bg-accent-hover hover:shadow-lift sm:w-auto"
              >
                {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
              </Button>
            </form>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-6">
            <div className="rounded-sm border-l-4 border-accent-soft bg-primary p-7 text-primary-foreground shadow-soft">
              <h2 className="font-display text-xl">Nous joindre</h2>
              <p className="mt-4 text-sm text-primary-foreground/65">Téléphone</p>
              <a
                href="tel:+33561310849"
                className="font-display text-2xl font-bold text-accent-soft transition-opacity hover:opacity-80"
              >
                05 61 31 08 49
              </a>
              <p className="mt-6 text-sm text-primary-foreground/65">Adresse</p>
              <address className="not-italic leading-relaxed">
                13 Bis impasse de la Flambère
                <br />
                31300 Toulouse
              </address>
            </div>

            <div className="rounded-sm border border-border bg-card p-7 shadow-soft">
              <h2 className="font-display text-xl">Questions fréquentes</h2>
              <dl className="mt-5 space-y-5">
                {faq.map((item) => (
                  <div key={item.q}>
                    <dt className="text-sm font-semibold text-primary">{item.q}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
