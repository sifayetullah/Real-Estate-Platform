import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/home/final-cta";
import { ArticleContent } from "@/components/journal/article-content";
import { ArticleHero } from "@/components/journal/article-hero";
import { RelatedArticles } from "@/components/journal/related-articles";
import { ARTICLES, getArticleBySlug } from "@/data/journal";
import type { SlugPageProps } from "@/types/endpoints";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const { image, title, excerpt } = article;
  return {
    title,
    description: excerpt,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      type: "article",
      title,
      description: excerpt,
      publishedTime: article.publishedAt,
      images: [
        { url: image.src, width: image.width, height: image.height, alt: image.alt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: excerpt,
      images: [image.src],
    },
  };
}

export default async function JournalArticlePage({ params }: SlugPageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <ArticleHero article={article} />
      <ArticleContent article={article} />
      <RelatedArticles slug={article.slug} />
      <FinalCta />
    </>
  );
}