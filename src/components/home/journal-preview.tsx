import Image from "next/image";
import Link from "next/link";

import { ArrowLink } from "@/components/shared/arrow-link";
import { ArticleCard } from "@/components/shared/article-card";
import { Container } from "@/components/shared/container";
import { ARTICLES } from "@/data/home";
import { formatDate } from "@/lib/format";

export function JournalPreview() {
  const [featured, ...rest] = ARTICLES;

  if (!featured) return null;

  return (
    <section className="border-b border-line py-24 md:py-32">
      <Container className="flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Journal</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-6xl">
              Notes from the studio
            </h2>
          </div>
          <ArrowLink href="/journal">View the journal</ArrowLink>
        </div>

        {/* Dominant featured article */}
        <Link
          href={`/journal/${featured.slug}`}
          className="group block border-b border-line pb-16 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/9] overflow-hidden bg-subtle">
                <Image
                  src={featured.image.src}
                  alt={featured.image.alt}
                  width={featured.image.width}
                  height={featured.image.height}
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-6 lg:col-span-5">
              <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {featured.category}
              </p>
              <h3 className="font-display text-3xl font-semibold leading-[1.05] tracking-[-0.01em] transition-colors group-hover:text-accent md:text-5xl">
                {featured.title}
              </h3>
              <p className="max-w-prose font-body text-base leading-relaxed text-muted">
                {featured.excerpt}
              </p>
              <p className="border-t border-line pt-4 font-body text-sm text-faint">
                {formatDate(featured.publishedAt)} · {featured.readTime} min
                read
              </p>
            </div>
          </div>
        </Link>

        {/* Supporting articles */}
        {rest.length > 0 ? (
          <ul className="grid gap-14 border-t border-line pt-14 sm:grid-cols-2 sm:gap-x-10">
            {rest.map((article, index) => (
              <li key={article.slug} className={index % 2 === 1 ? "sm:mt-16" : ""}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}