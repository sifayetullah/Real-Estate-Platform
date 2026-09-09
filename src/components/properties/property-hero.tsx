import Image from "next/image";

import { AvailabilityBadge } from "@/components/shared/badges";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Container } from "@/components/shared/container";
import { formatPrice } from "@/lib/format";
import type { Property } from "@/types/content";

type PropertyHeroProps = {
  property: Property;
};

export function PropertyHero({ property }: PropertyHeroProps) {
  return (
    <section className="border-b border-line pt-10 md:pt-14">
      <Container className="flex flex-col gap-10 md:gap-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Properties", href: "/properties" },
            { label: property.name },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="flex flex-col gap-5 lg:col-span-8">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-faint">
              {property.type} · {property.project}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <h1 className="font-serif text-5xl leading-[1.02] tracking-[0.005em] md:text-7xl">
                {property.name}
              </h1>
              <AvailabilityBadge availability={property.availability} />
            </div>
          </div>
          <div className="flex flex-col gap-2 border-l border-line pl-6 lg:col-span-4 lg:items-end">
            <p className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
              Price
            </p>
            <p className="font-display text-3xl font-semibold leading-none tracking-[-0.01em] md:text-4xl">
              {property.price !== undefined
                ? formatPrice(property.price)
                : "Price on request"}
            </p>
          </div>
        </div>

        {/* Framed architectural image */}
        <div className="overflow-hidden bg-subtle">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={property.image.src}
              alt={property.image.alt}
              width={property.image.width}
              height={property.image.height}
              sizes="100vw"
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}