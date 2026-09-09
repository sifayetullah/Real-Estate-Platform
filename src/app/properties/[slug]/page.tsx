import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PropertyAmenities } from "@/components/properties/property-amenities";
import { PropertyCta } from "@/components/properties/property-cta";
import { PropertyDescription } from "@/components/properties/property-description";
import { PropertyFacts } from "@/components/properties/property-facts";
import { PropertyFloorPlan } from "@/components/properties/property-floor-plan";
import { PropertyGallery } from "@/components/properties/property-gallery";
import { PropertyHero } from "@/components/properties/property-hero";
import { PropertyLocation } from "@/components/properties/property-location";
import { PropertySpecs } from "@/components/properties/property-specs";
import { getPropertyBySlug, PROPERTIES } from "@/data/properties";
import type { SlugPageProps } from "@/types/endpoints";

export function generateStaticParams() {
  return PROPERTIES.map((property) => ({ slug: property.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {};
  }

  const { image, name, description } = property;

  return {
    title: name,
    description: description[0],
    alternates: {
      canonical: `/properties/${slug}`,
    },
    openGraph: {
      type: "website",
      title: name,
      description: description[0],
      images: [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description: description[0],
      images: [image.src],
    },
  };
}

export default async function PropertyDetailPage({
  params,
}: SlugPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      <PropertyHero property={property} />
      <PropertyFacts property={property} />
      <PropertyGallery gallery={property.gallery} />
      <PropertyDescription property={property} />
      <PropertySpecs property={property} />
      {property.floorPlan ? (
        <PropertyFloorPlan name={property.name} floorPlan={property.floorPlan} />
      ) : null}
      <PropertyAmenities amenities={property.amenities} />
      <PropertyLocation property={property} />
      <PropertyCta property={property} />
    </>
  );
}