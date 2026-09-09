import { FEATURED_PROJECT_SLUG, PROJECTS } from "@/data/projects";
import { PROPERTIES } from "@/data/properties";
import { ARTICLES as ALL_ARTICLES } from "@/data/journal";

import type { MediaImage } from "@/types/content";

export { PROJECTS, PROPERTIES };

export const ARTICLES = ALL_ARTICLES.slice(0, 3);

export const FEATURED_PROJECT = PROJECTS.find(
  (project) => project.slug === FEATURED_PROJECT_SLUG,
)!;

export const HERO_IMAGE: MediaImage = {
  src: "https://images.unsplash.com/photo-1766590044402-8d752b59efeb?auto=format&fit=crop&w=2400&h=1350&q=80",
  alt: "Modern residential building with wavy balconies at sunset, warm golden light",
  width: 2400,
  height: 1350,
};

export const LOCATION = {
  area: "Harbour Quarter",
  summary:
    "Our developments sit within established residential districts — near water, gardens and transport — so daily life never depends on the car.",
  prose:
    "Each location is chosen for what already exists around it: mature streets, quiet squares, corner shops and dependable public transport. We build homes that belong to their neighbourhood rather than float above it.",
  image: {
    src: "https://images.unsplash.com/photo-1770490181527-d5709b868166?auto=format&fit=crop&w=1600&h=900&q=80",
    alt: "Narrow old-town street with traditional buildings in the evening",
    width: 1600,
    height: 900,
  },
} as const;

export const BRAND_STORY = {
  eyebrow: "Our approach",
  statement:
    "We build residences the way we would build our own — deliberately, and to be lived in for decades.",
  prose:
    "As a residential developer we oversee our projects from first sketch to final fitting. We favour clear plans, honest materials and buildings that make few demands and give much in return. The result is homes that age well, remain calm, and leave room for life to happen.",
} as const;

export const TRUST_POINTS = [
  {
    title: "Design-led development",
    body: "Every project begins with architecture and context, not with a sales floor plan.",
  },
  {
    title: "End-to-end delivery",
    body: "One team carries each building from concept to completion — a single point of accountability.",
  },
  {
    title: "Honest availability",
    body: "Prices, plans and availability are stated plainly, so you can compare with confidence.",
  },
  {
    title: "Private, unhurried visits",
    body: "Tours are arranged one at a time, with a member of the development team.",
  },
] as const;