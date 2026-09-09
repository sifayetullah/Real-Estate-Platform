import type { MetadataRoute } from "next";

import { ARTICLES } from "@/data/journal";
import { BASE_URL } from "@/lib/site";

const STATIC_ROUTES = [
  "",
  "/projects",
  "/properties",
  "/about",
  "/journal",
  "/contact",
  "/schedule-visit",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const journalEntries: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${BASE_URL}/journal/${article.slug}`,
    lastModified: article.publishedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...journalEntries];
}
