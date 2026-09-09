export type ProjectStatus = "completed" | "under-construction" | "coming-soon";

export type Availability = "available" | "reserved" | "sold";

export type MediaImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  summary: string;
  description: string[];
  facts: ProjectFact[];
  amenities: string[];
  image: MediaImage;
  gallery: MediaImage[];
};

export type PropertyType = "Apartment" | "Luxury Flat" | "Penthouse";

export type PropertySpec = {
  label: string;
  value: string;
};

export type Property = {
  slug: string;
  name: string;
  project: string;
  projectSlug: string;
  type: PropertyType;
  price?: number;
  sizeSqm: number;
  bedrooms: number;
  bathrooms: number;
  availability: Availability;
  image: MediaImage;
  description: string[];
  specifications: PropertySpec[];
  amenities: string[];
  gallery: MediaImage[];
  floorPlan?: MediaImage;
};

export type PropertyFilterOptions = {
  project: string;
  type: string;
  bedrooms: string;
  availability: string;
  location: string;
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "image"; image: MediaImage; caption?: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  image: MediaImage;
  body: ArticleBlock[];
  relatedSlugs?: string[];
};