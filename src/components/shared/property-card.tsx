import Image from "next/image";
import Link from "next/link";

import { AvailabilityBadge } from "@/components/shared/badges";
import { formatPrice } from "@/lib/format";
import type { Property } from "@/types/content";

type PropertyCardProps = {
  property: Property;
  priority?: boolean;
};

export function PropertyCard({ property, priority = false }: PropertyCardProps) {
  return (
    <article className="group">
      <Link
        href={`/properties/${property.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-subtle">
          <Image
            src={property.image.src}
            alt={property.image.alt}
            width={property.image.width}
            height={property.image.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute right-0 top-0 border-b border-l border-line bg-background/90 px-3 py-2 backdrop-blur-sm">
            <AvailabilityBadge availability={property.availability} />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
                {property.type} · {property.project}
              </p>
              <h3 className="font-serif text-2xl leading-none tracking-[0.01em] transition-colors group-hover:text-accent">
                {property.name}
              </h3>
            </div>
            <p className="shrink-0 font-body text-sm font-medium text-accent">
              {property.price !== undefined
                ? formatPrice(property.price)
                : "Price on request"}
            </p>
          </div>

          <div className="border-t border-line pt-4">
            <p className="font-body text-sm text-muted">
              {property.bedrooms} bed · {property.bathrooms} bath ·{" "}
              {property.sizeSqm} m&sup2;
            </p>
          </div>

          <p className="font-body text-sm font-semibold uppercase tracking-wide text-foreground transition-colors group-hover:text-accent">
            View Residence <span aria-hidden="true">→</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
