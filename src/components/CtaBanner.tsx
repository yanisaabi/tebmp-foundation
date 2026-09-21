import { ButtonLink, PhoneLink } from "./ui/button-link";

export function CtaBanner({
  title = "Un projet de construction, de rénovation ou d'entretien de bâtiment ? Parlons-en.",
}: {
  title?: string;
}) {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="overflow-hidden rounded-sm bg-primary px-6 py-14 text-center sm:px-12 lg:py-20">
          <span className="mx-auto mb-6 block h-1 w-16 bg-accent" aria-hidden="true" />
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight text-primary-foreground sm:text-5xl">
            {title}
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink to="/contact">Discuter de mon projet</ButtonLink>
            <PhoneLink variant="outlineLight" />
          </div>
        </div>
      </div>
    </section>
  );
}
