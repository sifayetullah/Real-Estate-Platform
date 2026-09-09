import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/lib/format";
import type { Article } from "@/types/content";

type ArticleCardProps = {
  article: Article;
  priority?: boolean;
};

export function ArticleCard({ article, priority = false }: ArticleCardProps) {
  return (
    <article className="group">
      <Link
        href={`/journal/${article.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
          <Image
            src={article.image.src}
            alt={article.image.alt}
            width={article.image.width}
            height={article.image.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <p className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-accent">
            {article.category}
          </p>
          <h3 className="max-w-prose font-display text-2xl font-semibold leading-snug tracking-[-0.01em] transition-colors group-hover:text-accent">
            {article.title}
          </h3>
          <p className="max-w-prose font-body text-[0.9375rem] leading-relaxed text-muted">
            {article.excerpt}
          </p>
          <p className="border-t border-line pt-3 font-body text-[0.8125rem] text-faint">
            {formatDate(article.publishedAt)} · {article.readTime} min read
          </p>
        </div>
      </Link>
    </article>
  );
}
