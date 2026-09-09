import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import type { Property } from "@/types/content";

type PropertyDescriptionProps = {
  property: Property;
};

export function PropertyDescription({ property }: PropertyDescriptionProps) {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <p className="eyebrow">The residence</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-5xl">
            About this residence
          </h2>
          {property.description.map((paragraph, index) => (
            <p
              key={paragraph}
              className={cn(
                "font-body leading-relaxed text-muted",
                index === 0 ? "text-lg md:text-xl" : "text-base md:text-lg",
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}