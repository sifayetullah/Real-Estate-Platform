import Image from "next/image";

import { Container } from "@/components/shared/container";

const PARAGRAPHS = [
  "Aurora Estates began with a simple conviction: that a residence should be built the way it will be lived in — deliberately, and for decades. We are designers and builders rather than marketers. We judge a building by how it serves the people who live in it, by how it ages, and by how quietly it enters its street.",
  "Each project is carried by one team from concept to completion, so that the design intent survives every handoff. We keep the plan clear, the materials honest and the details considered. The result is a home that asks for little and returns much — a calm, durable frame for daily life.",
];

const DETAIL_IMAGE = {
  src: "https://images.unsplash.com/photo-1776614277420-9eeaa6523a30?auto=format&fit=crop&w=1200&h=750&q=80",
  alt: "Close study of a brick facade with a grid of windows",
  width: 1200,
  height: 750,
};

export function BrandManifesto() {
  return (
    <section className="border-b border-line py-28 md:py-40">
      <Container className="flex flex-col items-center gap-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-9 text-center">
          <p className="eyebrow eyebrow--flush">Manifesto</p>
          <h2 className="font-display text-4xl font-semibold leading-[1.04] tracking-[-0.015em] sm:text-5xl md:text-6xl">
            We build residences the way we would build our own.
          </h2>
          <div className="flex max-w-3xl flex-col gap-6">
            {PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph}
                className="font-body text-base leading-relaxed text-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="relative aspect-[3/2] w-full max-w-4xl overflow-hidden bg-subtle">
          <Image
            src={DETAIL_IMAGE.src}
            alt={DETAIL_IMAGE.alt}
            width={DETAIL_IMAGE.width}
            height={DETAIL_IMAGE.height}
            sizes="(min-width: 896px) 896px, 100vw"
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}