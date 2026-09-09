import Image from "next/image";

import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Container } from "@/components/shared/container";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types/content";

type ArticleHeroProps = {
  article: Article;
};

export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <section className="border-b border-line pt-10 md:pt-14">
      <Container className="flex flex-col gap-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Journal", href: "/journal" },
            { label: article.title },
          ]}
        />
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-5 md:items-center md:text-center">
          <p className="font-body text-xs font-medium uppercase tracking-[0.22em] text-accent">
            {article.category}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.04] tracking-[-0.015em] md:text-6xl">
            {article.title}
          </h1>
          <p className="font-body text-sm text-faint">
            {formatDate(article.publishedAt)} · {article.readTime} min read
          </p>
        </div>
        <div className="overflow-hidden bg-subtle">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={article.image.src}
              alt={article.image.alt}
              width={article.image.width}
              height={article.image.height}
              sizes="100vw"
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}