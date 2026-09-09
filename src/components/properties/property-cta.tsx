import { ArrowLink } from "@/components/shared/arrow-link";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { SCHEDULE_VISIT_HREF } from "@/lib/navigation";
import type { Property } from "@/types/content";

type PropertyCtaProps = {
  property: Property;
};

export function PropertyCta({ property }: PropertyCtaProps) {
  return (
    <section className="bg-inverse-bg text-inverse-fg">
      <Container className="flex flex-col items-start gap-10 py-24 md:py-36">
        <p className="eyebrow">Private visits</p>
        <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-7xl">
          Visit {property.name} in person.
        </h2>
        <p className="max-w-xl font-body text-lg leading-relaxed text-inverse-muted">
          Arrange a private visit and tour this residence with a member of the
          development team — unhurried, and on your terms.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Button href={SCHEDULE_VISIT_HREF} size="lg" variant="inverse">
            Schedule a Visit
          </Button>
          <ArrowLink
            href={`/contact?property=${property.slug}`}
            onDark
          >
            Request Information
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}