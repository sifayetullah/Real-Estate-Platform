import type { Project } from "@/types/content";

export const FEATURED_PROJECT_SLUG = "the-atlas";

export const PROJECTS: Project[] = [
  {
    slug: "the-atlas",
    name: "The Atlas",
    location: "Harbour Quarter",
    status: "under-construction",
    summary:
      "A low-rise residential building shaped around a private courtyard, with considered floor plans and shared gardens at its heart.",
    description: [
      "The Atlas is a low-rise residential building of seventeen apartments, arranged around a landscaped courtyard and reached through a single, measured threshold. Floor plans are kept clear and generous, with living rooms facing the garden and bedrooms given quiet corners of their own.",
      "Construction is underway on the harbour edge of the quarter, with completion expected in late 2026. Sales are open by appointment, and a small number of residences remain available.",
    ],
    facts: [
      { label: "Neighbourhood", value: "Harbour Quarter" },
      { label: "Typology", value: "Apartments" },
      { label: "Homes", value: "17" },
      { label: "Completion", value: "Q4 2026" },
      { label: "Parking", value: "Underground — 1 space per home" },
      { label: "Architecture", value: "In-house design team" },
    ],
    amenities: [
      "Landscaped courtyard garden",
      "Rooftop garden",
      "Underground parking",
      "Resident bike store",
      "Underfloor heating",
      "Triple-glazed windows",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1762277755007-819935c31a01?auto=format&fit=crop&w=1600&h=1100&q=80",
      alt: "Low-rise apartment buildings with glass balconies and trees",
      width: 1600,
      height: 1100,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1762277755007-819935c31a01?auto=format&fit=crop&w=1600&h=1100&q=80",
        alt: "The Atlas courtyard elevation with glazed balconies and planting",
        width: 1600,
        height: 1100,
      },
      {
        src: "https://images.unsplash.com/photo-1721170628059-2585e657c113?auto=format&fit=crop&w=1600&h=900&q=80",
        alt: "City context with green rooftops seen from above",
        width: 1600,
        height: 900,
      },
      {
        src: "https://images.unsplash.com/photo-1776653095063-895a05001818?auto=format&fit=crop&w=1200&h=800&q=80",
        alt: "Bright living room with a large window and seating",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: "cedar-house",
    name: "Cedar House",
    location: "Old Town",
    status: "completed",
    summary:
      "An intimate apartment building of robust brick and deep window reveals, designed for long, quiet days.",
    description: [
      "Cedar House is an intimate building of ten apartments in the Old Town, faced in robust brick with deep window reveals and heavy-set joinery throughout. Each home has a generous entrance hall, a south-facing living room and built-in storage designed into the plan.",
      "Completed in 2024, the building was sold through private appointment and is now fully occupied. Its calm has made it a quiet fixture of the street.",
    ],
    facts: [
      { label: "Neighbourhood", value: "Old Town" },
      { label: "Typology", value: "Luxury flats" },
      { label: "Homes", value: "10" },
      { label: "Completion", value: "2024" },
      { label: "Architecture", value: "In-house design team" },
    ],
    amenities: [
      "Private courtyard",
      "Secure parcel store",
      "Underfloor heating",
      "Sound-insulated party walls",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1713026511073-853c2c3d2f7e?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Modern brick house with planting at the facade",
      width: 1200,
      height: 900,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1713026511073-853c2c3d2f7e?auto=format&fit=crop&w=1200&h=900&q=80",
        alt: "Cedar House street elevation in brick with generous reveals",
        width: 1200,
        height: 900,
      },
      {
        src: "https://images.unsplash.com/photo-1776614277420-9eeaa6523a30?auto=format&fit=crop&w=1200&h=750&q=80",
        alt: "Close study of a brick facade with a grid of windows",
        width: 1200,
        height: 750,
      },
      {
        src: "https://images.unsplash.com/photo-1759238136859-b6fe007fe126?auto=format&fit=crop&w=1200&h=800&q=80",
        alt: "Refined living room with deep window seat and soft light",
        width: 1200,
        height: 800,
      },
    ],
  },
  {
    slug: "halcyon-residences",
    name: "Halcyon Residences",
    location: "The Gardens",
    status: "coming-soon",
    summary:
      "A future residential project of generous apartments and rooftop terraces, opening in the coming year.",
    description: [
      "Halcyon Residences will be a residential project of twenty-four apartments and two penthouses overlooking The Gardens. Plans favour generous rooms, cross-ventilated layouts and private outdoor space at every level.",
      "The project is in the final stage of design, with sales expected to open in the coming year. We are inviting early expressions of interest by visit, before public launch.",
    ],
    facts: [
      { label: "Neighbourhood", value: "The Gardens" },
      { label: "Typology", value: "Apartments & penthouses" },
      { label: "Homes", value: "24 + 2 penthouses" },
      { label: "Completion", value: "TBC" },
      { label: "Parking", value: "Underground" },
      { label: "Architecture", value: "In-house design team" },
    ],
    amenities: [
      "Rooftop terraces",
      "Landscaped grounds",
      "Underground parking",
      "Resident bike store",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1762195804066-2fece9b24496?auto=format&fit=crop&w=1200&h=900&q=80",
      alt: "Rooftop terrace with natural wood decking and lounge seating",
      width: 1200,
      height: 900,
    },
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1762195804066-2fece9b24496?auto=format&fit=crop&w=1200&h=900&q=80",
        alt: "Study of the Halcyon rooftop terrace and pergola",
        width: 1200,
        height: 900,
      },
      {
        src: "https://images.unsplash.com/photo-1741036303670-040ed2cfdf5c?auto=format&fit=crop&w=1200&h=750&q=80",
        alt: "People relaxing on a city rooftop with skyline views",
        width: 1200,
        height: 750,
      },
      {
        src: "https://images.unsplash.com/photo-1775241183056-06f3f6c10c76?auto=format&fit=crop&w=1200&h=800&q=80",
        alt: "Minimalist bedroom with a black accent wall and warm light",
        width: 1200,
        height: 800,
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}