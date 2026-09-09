import { ArrowLink } from "@/components/shared/arrow-link";
import { Container } from "@/components/shared/container";
import { PropertyCard } from "@/components/shared/property-card";
import { PROPERTIES } from "@/data/home";

type ProjectResidencesProps = {
  projectSlug: string;
};

export function ProjectResidences({ projectSlug }: ProjectResidencesProps) {
  const residences = PROPERTIES.filter(
    (property) => property.projectSlug === projectSlug,
  );

  if (residences.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Residences</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-5xl">
              Available in this project
            </h2>
            <p className="max-w-2xl font-body text-base leading-relaxed text-muted">
              A selection of current residences within this development.
            </p>
          </div>
          <ArrowLink href="/properties">View all properties</ArrowLink>
        </div>

        <ul className="grid items-start gap-x-10 gap-y-14 sm:grid-cols-2">
          {residences.map((property, index) => (
            <li key={property.slug} className={index === 1 ? "sm:mt-16" : ""}>
              <PropertyCard property={property} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}