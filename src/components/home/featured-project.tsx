import Image from "next/image";

import { StatusBadge } from "@/components/shared/badges";
import { Button } from "@/components/shared/button";
import { FEATURED_PROJECT } from "@/data/home";

export function FeaturedProject() {
  const facts = FEATURED_PROJECT.facts.slice(0, 4);

  return (
    <section className="border-b border-line">
      <div className="mx-auto grid w-full max-w-7xl px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Oversized project title + meta */}
        <div className="flex flex-col gap-8 py-14 lg:col-span-5 lg:justify-end lg:gap-10 lg:py-24">
          <div className="flex flex-col items-start gap-6">
            <p className="eyebrow">Featured project</p>
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <StatusBadge status={FEATURED_PROJECT.status} />
                <p className="font-body text-sm text-faint">
                  {FEATURED_PROJECT.location}
                </p>
              </div>
              <h2 className="font-serif text-5xl leading-[1.04] tracking-[0.005em] md:text-6xl">
                {FEATURED_PROJECT.name}
              </h2>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-8">
            {facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-1.5">
                <dt className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-faint">
                  {fact.label}
                </dt>
                <dd className="font-display text-xl font-semibold leading-none">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="max-w-prose font-body text-base leading-relaxed text-muted md:text-lg">
            {FEATURED_PROJECT.summary}
          </p>

          <div>
            <Button
              href={`/projects/${FEATURED_PROJECT.slug}`}
              size="lg"
            >
              View Project
            </Button>
          </div>
        </div>

        {/* Framed cinematic image */}
        <div className="relative min-h-[50vh] lg:col-span-7 lg:min-h-[92svh]">
          <div className="relative h-full min-h-[50vh] overflow-hidden lg:absolute lg:inset-y-10 lg:right-0 lg:left-0">
            <Image
              src={FEATURED_PROJECT.image.src}
              alt={FEATURED_PROJECT.image.alt}
              width={FEATURED_PROJECT.image.width}
              height={FEATURED_PROJECT.image.height}
              sizes="(min-width: 1024px) 58vw, 100vw"
              priority
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}