import Image from "next/image";
import Link from "next/link";

import { ArrowLink } from "@/components/shared/arrow-link";
import { StatusBadge } from "@/components/shared/badges";
import { Container } from "@/components/shared/container";
import { getProjectBySlug } from "@/data/projects";
import type { Property } from "@/types/content";

type PropertyLocationProps = {
  property: Property;
};

export function PropertyLocation({ property }: PropertyLocationProps) {
  const project = getProjectBySlug(property.projectSlug);

  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Location &amp; project</p>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-5xl">
              Part of something larger
            </h2>
          </div>
          <div className="flex flex-col gap-2 border-t border-line pt-6 md:items-end md:border-t-0 md:pt-0">
            <p className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
              Neighbourhood
            </p>
            <p className="font-serif text-3xl leading-none">
              {project?.location ?? property.project}
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {project ? (
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-subtle">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col items-start gap-3">
                <StatusBadge status={project.status} />
                <h3 className="font-display text-3xl font-semibold leading-snug tracking-[-0.01em] transition-colors group-hover:text-accent md:text-4xl">
                  {project.name}
                </h3>
                <p className="max-w-prose font-body text-base leading-relaxed text-muted">
                  {project.summary}
                </p>
                <ArrowLink href={`/projects/${project.slug}`}>
                  View the project
                </ArrowLink>
              </div>
            </Link>
          ) : null}
          <div className="flex flex-col items-start gap-6 border-t border-line pt-8 lg:border-t-0 lg:pt-0">
            <p className="max-w-prose font-body text-lg leading-relaxed text-muted">
              This residence sits within an established residential district,
              chosen for what already exists around it — mature streets, quiet
              squares and dependable public transport.
            </p>
            <ArrowLink href={`/projects/${property.projectSlug}`}>
              View the {property.project} project
            </ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  );
}