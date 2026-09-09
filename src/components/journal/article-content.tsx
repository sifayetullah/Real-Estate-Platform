import Image from "next/image";

import { Container } from "@/components/shared/container";
import type { Article, ArticleBlock } from "@/types/content";

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="max-w-prose font-body text-lg leading-relaxed text-muted">
          {block.text}
        </p>
      );
    case "heading":
      return (
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.015em] md:text-4xl">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="border-l border-accent pl-8">
          <p className="font-serif text-2xl leading-snug text-foreground md:text-3xl">
            {block.text}
          </p>
        </blockquote>
      );
    case "image":
      return (
        <figure className="flex flex-col gap-4">
          <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              width={block.image.width}
              height={block.image.height}
              sizes="(min-width: 768px) 768px, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          {block.caption ? (
            <figcaption className="font-body text-sm text-faint">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    default:
      return null;
  }
}

type ArticleContentProps = {
  article: Article;
};

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container className="mx-auto flex max-w-3xl flex-col gap-10">
        {article.body.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </Container>
    </section>
  );
}