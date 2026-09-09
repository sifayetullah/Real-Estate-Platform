import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Property } from "@/types/content";

type PropertySpecsProps = {
  property: Property;
};

export function PropertySpecs({ property }: PropertySpecsProps) {
  return (
    <section className="border-b border-line bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <SectionHeading eyebrow="Specifications" title="At a glance" />
        <dl className="grid gap-x-12 border-t border-line sm:grid-cols-2">
          {property.specifications.map((spec) => (
            <div
              key={spec.label}
              className="flex items-baseline justify-between gap-6 border-b border-line py-5"
            >
              <dt className="font-body text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-faint">
                {spec.label}
              </dt>
              <dd className="text-right font-body text-base font-semibold text-foreground">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}