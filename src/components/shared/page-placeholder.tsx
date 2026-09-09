type PagePlaceholderProps = {
  title: string;
  description?: string;
};

export function PagePlaceholder({ title, description }: PagePlaceholderProps) {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-7xl">
        {title}
      </h1>
      {description ? (
        <p className="max-w-prose font-body text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </section>
  );
}