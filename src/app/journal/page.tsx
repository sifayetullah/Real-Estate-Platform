import type { Metadata } from "next";

import { ArticleCard } from "@/components/shared/article-card";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { FeaturedArticle } from "@/components/journal/featured-article";
import { ARTICLES } from "@/data/journal";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Essays on architecture, material and the rhythms of daily life — from the Aurora Estates design studio.",
  alternates: {
    canonical: "/journal",
  },
};

export default function JournalPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Journal" }]}
        eyebrow="Journal"
        title="Notes on building a calmer home."
        lede="Essays from the studio on material, light, courtyard life and the small arrangements that make a residence easy to live in."
      />
      <FeaturedArticle article={featured} />
      <section className="border-b border-line py-20 md:py-28">
        <Container className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">All articles</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-5xl">
              Further reading
            </h2>
          </div>
          <ul className="grid items-start gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article, index) => (
              <li key={article.slug}>
                <ArticleCard article={article} priority={index === 0} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}