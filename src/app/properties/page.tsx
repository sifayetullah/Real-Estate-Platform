import type { Metadata } from "next";
import { Suspense } from "react";

import { ArrowLink } from "@/components/shared/arrow-link";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { PropertyCard } from "@/components/shared/property-card";
import { PropertyFilters } from "@/components/properties/property-filters";
import {
  filterProperties,
  getPropertyFilterOptions,
  PROPERTIES,
} from "@/data/properties";
import type { PropertyFilterOptions } from "@/types/content";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Browse apartments, luxury flats and penthouses for sale — available, reserved and sold residences across Aurora Estates' projects.",
  alternates: {
    canonical: "/properties",
  },
};

type PropertiesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;

  const pick = (key: keyof PropertyFilterOptions) => {
    const value = params[key];
    return typeof value === "string" ? value : undefined;
  };

  const filters: Partial<PropertyFilterOptions> = {
    project: pick("project"),
    type: pick("type"),
    bedrooms: pick("bedrooms"),
    availability: pick("availability"),
    location: pick("location"),
  };

  const results = filterProperties(PROPERTIES, filters);
  const options = getPropertyFilterOptions();
  const hasActiveFilters = Object.values(filters).some(Boolean);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Properties" }]}
        eyebrow="Residences"
        title="Homes that are ready to be lived in"
        lede="A current selection of apartments, luxury flats and penthouses across our projects — with availability and prices stated plainly."
      />

      <section className="border-b border-line bg-surface py-10 md:py-12">
        <Container>
          <Suspense fallback={null}>
            <PropertyFilters options={options} />
          </Suspense>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="flex flex-col gap-12">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
            <p className="font-body text-sm text-faint">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {results.length}
              </span>{" "}
              of {PROPERTIES.length} residences
            </p>
            {hasActiveFilters ? (
              <ArrowLink href="/properties">Clear all filters</ArrowLink>
            ) : null}
          </div>

          {results.length > 0 ? (
            <ul className="grid items-start gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((property, index) => (
                <li key={property.slug} className={index === 1 ? "lg:mt-16" : ""}>
                  <PropertyCard property={property} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-start gap-5 py-10">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.015em] md:text-5xl">
                No residences match your current filters.
              </h2>
              <p className="max-w-prose font-body text-base leading-relaxed text-muted">
                Try widening your search, or clear the filters to see the full
                selection.
              </p>
              {hasActiveFilters ? (
                <div className="mt-2">
                  <ArrowLink href="/properties">Clear all filters</ArrowLink>
                </div>
              ) : null}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}