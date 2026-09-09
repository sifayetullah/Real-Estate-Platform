import { PROJECTS } from "@/data/projects";

import type {
  Property,
  PropertyFilterOptions,
} from "@/types/content";

export const PROPERTIES: Property[] = [  {
    slug: "residence-3b-atlas",
    name: "Residence 3B",
    project: "The Atlas",
    projectSlug: "the-atlas",
    type: "Apartment",
    price: 685000,
    sizeSqm: 118,
    bedrooms: 3,
    bathrooms: 2,
    availability: "available",
    image: {
      src: "https://images.unsplash.com/photo-1776653095063-895a05001818?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Spacious living room with a large sofa and generous daylight",
      width: 1200,
      height: 800,
    },
    description: [
      "Residence 3B is a three-bedroom apartment on the third floor of The Atlas, arranged around a south-facing living room with views over the courtyard garden. The plan is kept clear and generous, with bedrooms grouped to the quiet east side of the building.",
      "Each room has been sized for daily comfort rather than display: a generous entrance hall, built-in wardrobe storage, and a private balcony overlooking the landscaped courtyard.",
    ],
    specifications: [
      { label: "Floor", value: "3rd" },
      { label: "Aspect", value: "South-facing" },
      { label: "Living area", value: "62 m\u00B2" },
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "2" },
      { label: "Balcony", value: "12 m\u00B2" },
      { label: "Total area", value: "118 m\u00B2" },
      { label: "Kitchen", value: "Open plan" },
      { label: "Heating", value: "Underfloor" },
      { label: "Windows", value: "Triple-glazed" },
    ],
    amenities: [
      "Open-plan kitchen and living",
      "South-facing living room",
      "Built-in wardrobe storage",
      "Private balcony",
      "Underfloor heating",
      "Triple-glazed windows",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1776653095063-895a05001818?auto=format&fit=crop&w=1200&h=800&q=80",
        alt: "Living space at Residence 3B with seating and afternoon light",
        width: 1200,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1721170628059-2585e657c113?auto=format&fit=crop&w=1600&h=1100&q=80",
        alt: "Private courtyard garden with a planted green roof",
        width: 1600,
        height: 1100,
      },
      {
        src: "https://images.unsplash.com/photo-1741036303670-040ed2cfdf5c?auto=format&fit=crop&w=1600&h=900&q=80",
        alt: "City neighbourhood seen from an elevated roof terrace",
        width: 1600,
        height: 900,
      },
    ],
    floorPlan: {
      src: "/images/floor-plan-3b.svg",
      alt: "Floor plan for Residence 3B at The Atlas",
      width: 800,
      height: 600,
    },
  },
  {
    slug: "atelier-12-cedar",
    name: "Atelier 12",
    project: "Cedar House",
    projectSlug: "cedar-house",
    type: "Luxury Flat",
    sizeSqm: 86,
    bedrooms: 2,
    bathrooms: 2,
    availability: "reserved",
    image: {
      src: "https://images.unsplash.com/photo-1759238136859-b6fe007fe126?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Refined living room with a deep window reveal and soft light",
      width: 1200,
      height: 800,
    },
    description: [
      "Atelier 12 is a two-bedroom luxury flat on the first floor of Cedar House, with east and south-facing rooms that catch the morning and midday light. The plan centres on a generous living room with deep window reveals and hand-finished joinery.",
      "Cedar House was completed in 2024 and is now fully occupied. Atelier 12 remains under reservation and is not currently available for new buyers.",
    ],
    specifications: [
      { label: "Floor", value: "1st" },
      { label: "Aspect", value: "East and south" },
      { label: "Living area", value: "44 m\u00B2" },
      { label: "Bedrooms", value: "2" },
      { label: "Bathrooms", value: "2" },
      { label: "Balcony", value: "8 m\u00B2" },
      { label: "Total area", value: "86 m\u00B2" },
      { label: "Kitchen", value: "Galley" },
      { label: "Heating", value: "Underfloor" },
      { label: "Windows", value: "Double-glazed" },
    ],
    amenities: [
      "Generous entrance hall",
      "East and south-facing rooms",
      "Built-in storage throughout",
      "Sound-insulated party walls",
      "Underfloor heating",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1759238136859-b6fe007fe126?auto=format&fit=crop&w=1200&h=800&q=80",
        alt: "Living space at Atelier 12 with seating and joinery detail",
        width: 1200,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1759217598991-3a4d35d8d6f3?auto=format&fit=crop&w=1200&h=750&q=80",
        alt: "Detail of a brick facade with rhythmic window reveals",
        width: 1200,
        height: 750,
      },
      {
        src: "https://images.unsplash.com/photo-1776614277420-9eeaa6523a30?auto=format&fit=crop&w=1200&h=900&q=80",
        alt: "Street elevation of Cedar House with deep-set windows",
        width: 1200,
        height: 900,
      },
    ],
    floorPlan: {
      src: "/images/floor-plan-atelier.svg",
      alt: "Floor plan for Atelier 12 at Cedar House",
      width: 800,
      height: 600,
    },
  },
  {
    slug: "the-sky-penthouse",
    name: "The Sky Penthouse",
    project: "Halcyon Residences",
    projectSlug: "halcyon-residences",
    type: "Penthouse",
    price: 1420000,
    sizeSqm: 214,
    bedrooms: 4,
    bathrooms: 3,
    availability: "available",
    image: {
      src: "https://images.unsplash.com/photo-1774311237295-a65a4c1ff38a?auto=format&fit=crop&w=1200&h=800&q=80",
      alt: "Open-plan living area with floor-to-ceiling glazing and nature outlook",
      width: 1200,
      height: 800,
    },
    description: [
      "The Sky Penthouse is a four-bedroom residence at the top of Halcyon Residences, with wraparound terraces and floor-to-ceiling glazing on every habitable room. The open-plan living area centres on a kitchen island, with the master suite tucked behind to the quiet side.",
      "The project is in the final stage of design, with completion expected in the coming year. This penthouse is currently available by private appointment.",
    ],
    specifications: [
      { label: "Floor", value: "Penthouse level" },
      { label: "Aspect", value: "Wraparound" },
      { label: "Living area", value: "98 m\u00B2" },
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "3" },
      { label: "Terrace", value: "34 m\u00B2" },
      { label: "Total area", value: "214 m\u00B2" },
      { label: "Kitchen", value: "Open plan with island" },
      { label: "Heating", value: "Underfloor" },
      { label: "Ceiling height", value: "3.1 m" },
    ],
    amenities: [
      "Wraparound terrace",
      "Open-plan kitchen with island",
      "Master suite with dressing room",
      "Floor-to-ceiling glazing",
      "Underfloor heating",
      "Private roof garden access",
    ],
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1774311237295-a65a4c1ff38a?auto=format&fit=crop&w=1200&h=800&q=80",
        alt: "The Sky Penthouse living room with window views to trees",
        width: 1200,
        height: 800,
      },
      {
        src: "https://images.unsplash.com/photo-1750268746235-1657249daa37?auto=format&fit=crop&w=1200&h=750&q=80",
        alt: "Minimalist bedroom with soft light and a made bed",
        width: 1200,
        height: 750,
      },
      {
        src: "https://images.unsplash.com/photo-1773994788136-64d0896159e6?auto=format&fit=crop&w=1200&h=900&q=80",
        alt: "Rooftop pool terrace with lounge chairs and evening light",
        width: 1200,
        height: 900,
      },
    ],
    floorPlan: {
      src: "/images/floor-plan-sky.svg",
      alt: "Floor plan for The Sky Penthouse at Halcyon Residences",
      width: 800,
      height: 600,
    },
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((property) => property.slug === slug);
}

export type PropertyFilterOption = { label: string; value: string };

export type PropertyFilterOptionsShape = {
  projects: PropertyFilterOption[];
  types: PropertyFilterOption[];
  bedrooms: PropertyFilterOption[];
  availability: PropertyFilterOption[];
  locations: PropertyFilterOption[];
};

export function getPropertyFilterOptions(): PropertyFilterOptionsShape {
  const projects = [...new Set(PROPERTIES.map((p) => p.projectSlug))]
    .map((slug) => ({
      label: PROJECTS.find((project) => project.slug === slug)?.name ?? slug,
      value: slug,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));

  const types = [...new Set(PROPERTIES.map((p) => p.type))]
    .sort()
    .map((value) => ({ label: value, value }));

  const bedrooms = [...new Set(PROPERTIES.map((p) => p.bedrooms))]
    .sort((a, b) => a - b)
    .map((value) => ({ label: `${value} beds`, value: String(value) }));

  const availability = (
    ["available", "reserved", "sold"] as const
  ).map((value) => ({
    label: value.charAt(0).toUpperCase() + value.slice(1),
    value,
  }));

  const locations = [...new Set(PROJECTS.map((p) => p.location))]
    .sort()
    .map((value) => ({ label: value, value }));

  return { projects, types, bedrooms, availability, locations };
}

export function filterProperties(
  properties: Property[],
  filters: Partial<PropertyFilterOptions>,
): Property[] {
  return properties.filter((property) => {
    if (filters.project && property.projectSlug !== filters.project) {
      return false;
    }
    if (filters.type && property.type !== filters.type) {
      return false;
    }
    if (filters.bedrooms && property.bedrooms !== Number(filters.bedrooms)) {
      return false;
    }
    if (
      filters.availability &&
      property.availability !== filters.availability
    ) {
      return false;
    }
    if (filters.location) {
      const project = PROJECTS.find((p) => p.slug === property.projectSlug);
      if (!project || project.location !== filters.location) {
        return false;
      }
    }
    return true;
  });
}