import { ArrowLink } from "@/components/shared/arrow-link";
import { Container } from "@/components/shared/container";
import { PropertyCard } from "@/components/shared/property-card";
import { PROPERTIES } from "@/data/home";

export function AvailableResidences() {
  const available = PROPERTIES.filter(
    (property) => property.availability !== "sold",
  );

  return (
    <section className="border-b border-line bg-surface py-24 md:py-32">
      <Container className="flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Available residences</p>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-6xl">
              A considered selection, available now
            </h2>
            <p className="max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg">
              A small selection of current apartments, flats and penthouses
              across our projects — availability and prices stated plainly.
            </p>
          </div>
          <ArrowLink href="/properties">
            Explore all properties
          </ArrowLink>
        </div>

        <ul className="grid items-start gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((property, index) => (
            <li key={property.slug} className={index === 1 ? "lg:mt-16" : ""}>
              <PropertyCard property={property} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}