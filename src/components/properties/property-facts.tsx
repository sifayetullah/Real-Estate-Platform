import { Container } from "@/components/shared/container";
import type { Property } from "@/types/content";

type PropertyFactsProps = {
  property: Property;
};

const FACTS_LABELS = ["Type", "Bedrooms", "Bathrooms", "Area"] as const;

export function PropertyFacts({ property }: PropertyFactsProps) {
  const values: Record<(typeof FACTS_LABELS)[number], string> = {
    Type: property.type,
    Bedrooms: String(property.bedrooms),
    Bathrooms: String(property.bathrooms),
    Area: `${property.sizeSqm} m\u00B2`,
  };

  return (
    <section className="border-b border-line bg-surface py-14 md:py-20">
      <Container>
        <dl className="grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-4">
          {FACTS_LABELS.map((label) => (
            <div
              key={label}
              className="flex flex-col gap-2.5 border-l border-line pl-6"
            >
              <dt className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
                {label}
              </dt>
              <dd className="font-display text-2xl font-semibold leading-none tracking-[-0.01em] md:text-3xl">
                {values[label]}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}