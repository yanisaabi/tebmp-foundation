import { ButtonLink, PhoneLink } from "./ui/button-link";

export function CtaBanner({
  title = "Un projet de construction, de rénovation ou d'entretien de bâtiment ? Parlons-en.",
}: {
  title?: string;
}) {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center sm:px-12">
          <div className="absolute inset-0 blueprint-grid-light opacity-50" aria-hidden="true" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-2xl leading-snug text-primary-foreground sm:text-3xl">
              {title}
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink to="/contact">Discuter de mon projet</ButtonLink>
              <PhoneLink variant="outlineLight" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
