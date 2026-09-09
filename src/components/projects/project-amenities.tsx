import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

type ProjectAmenitiesProps = {
  amenities: string[];
};

export function ProjectAmenities({ amenities }: ProjectAmenitiesProps) {
  return (
    <section className="border-b border-line bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <SectionHeading eyebrow="Amenities" title="What is shared" />
        <ul className="grid gap-x-12 gap-y-0 border-t border-line sm:grid-cols-2">
          {amenities.map((amenity, index) => (
            <li
              key={amenity}
              className="flex items-baseline gap-6 border-b border-line py-6"
            >
              <span className="font-display text-xl font-semibold leading-none text-accent/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-body text-lg font-medium text-foreground">
                {amenity}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}