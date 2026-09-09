import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/shared/container";
import { formatDate } from "@/lib/format";
import type { Article } from "@/types/content";

type FeaturedArticleProps = {
  article: Article;
};

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <Link
          href={`/journal/${article.slug}`}
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  width={article.image.width}
                  height={article.image.height}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  priority
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-6 lg:col-span-5">
              <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Featured
              </p>
              <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-[-0.01em] transition-colors group-hover:text-accent md:text-5xl">
                {article.title}
              </h2>
              <p className="max-w-prose font-body text-base leading-relaxed text-muted md:text-lg">
                {article.excerpt}
              </p>
              <p className="border-t border-line pt-4 font-body text-sm text-faint">
                {article.category} · {formatDate(article.publishedAt)} ·{" "}
                {article.readTime} min read
              </p>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  );
}