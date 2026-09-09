import Image from "next/image";
import Link from "next/link";

import { StatusBadge } from "@/components/shared/badges";
import { ArrowLink } from "@/components/shared/arrow-link";
import { Container } from "@/components/shared/container";

import { ProjectCard } from "@/components/shared/project-card";
import { PROJECTS } from "@/data/home";

export function ProjectPortfolio() {
  const [lead, ...rest] = PROJECTS;

  if (!lead) return null;

  return (
    <section className="border-b border-line py-24 md:py-32">
      <Container className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-6">
            <p className="eyebrow">Portfolio</p>
            <h2 className="max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-6xl">
              Buildings shaped by their place
            </h2>
          </div>
          <ArrowLink href="/projects">View all projects</ArrowLink>
        </div>

        {/* Lead project — dominant editorial feature */}
        <Link
          href={`/projects/${lead.slug}`}
          className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-subtle md:aspect-[21/9]">
            <Image
              src={lead.image.src}
              alt={lead.image.alt}
              width={lead.image.width}
              height={lead.image.height}
              sizes="100vw"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="flex flex-col gap-4 md:col-span-8">
              <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-faint">
                {lead.location}
              </p>
              <h3 className="font-serif text-4xl leading-[1.02] tracking-[0.005em] transition-colors group-hover:text-accent md:text-6xl">
                {lead.name}
              </h3>
            </div>
            <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
              <StatusBadge status={lead.status} />
              <p className="font-body text-sm text-muted">{lead.summary}</p>
            </div>
          </div>
        </Link>

        {/* Supporting projects — asymmetric editorial rows */}
        {rest.length > 0 ? (
          <ul className="grid gap-14 border-t border-line pt-14 sm:grid-cols-2 sm:gap-x-10">
            {rest.map((project, index) => (
              <li key={project.slug} className={index % 2 === 1 ? "sm:mt-20" : ""}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}