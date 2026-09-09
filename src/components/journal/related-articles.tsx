import { ArticleCard } from "@/components/shared/article-card";
import { Container } from "@/components/shared/container";
import { getRelatedArticles } from "@/data/journal";

type RelatedArticlesProps = {
  slug: string;
};

export function RelatedArticles({ slug }: RelatedArticlesProps) {
  const related = getRelatedArticles(slug);

  if (related.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-line bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-6">
          <p className="eyebrow">Keep reading</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-5xl">
            Related articles
          </h2>
        </div>
        <ul className="grid items-start gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((article) => (
            <li key={article.slug}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}