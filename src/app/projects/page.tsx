import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { StatusBadge } from "@/components/shared/badges";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { ProjectCard } from "@/components/shared/project-card";
import { PROJECTS } from "@/data/home";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Aurora Estates' residential developments — considered buildings that belong to their neighbourhoods.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  const [lead, ...rest] = PROJECTS;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        eyebrow="Portfolio"
        title="Buildings with something to say"
        lede="A considered portfolio of residential buildings, each shaped by its place — from the courtyard apartment building to the townhouse and the future penthouses."
      />

      {lead ? (
        <section className="py-20 md:py-28">
          <Container>
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
                  priority
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-end">
                <div className="flex flex-col gap-4 md:col-span-8">
                  <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-faint">
                    {lead.location}
                  </p>
                  <h2 className="font-serif text-4xl leading-[1.02] tracking-[0.005em] transition-colors group-hover:text-accent md:text-6xl">
                    {lead.name}
                  </h2>
                </div>
                <div className="flex flex-col gap-3 md:col-span-4 md:items-end">
                  <StatusBadge status={lead.status} />
                  <p className="font-body text-sm text-muted">{lead.summary}</p>
                </div>
              </div>
            </Link>
          </Container>
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section className="border-t border-line bg-surface py-20 md:py-28">
          <Container>
            <ul className="grid items-start gap-x-10 gap-y-16 sm:grid-cols-2">
              {rest.map((project, index) => (
                <li key={project.slug} className={index % 2 === 1 ? "sm:mt-20" : ""}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}