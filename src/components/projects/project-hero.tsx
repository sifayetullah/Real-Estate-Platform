import Image from "next/image";

import { StatusBadge } from "@/components/shared/badges";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Container } from "@/components/shared/container";
import type { Project } from "@/types/content";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="border-b border-line pt-10 md:pt-14">
      <Container className="flex flex-col gap-10 md:gap-14">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Projects", href: "/projects" },
            { label: project.name },
          ]}
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="flex flex-col items-start gap-6 lg:col-span-8">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-faint">
              {project.location}
            </p>
            <h1 className="font-serif text-5xl leading-[1.02] tracking-[0.005em] md:text-7xl">
              {project.name}
            </h1>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:items-end">
            <StatusBadge status={project.status} />
            <p className="max-w-md font-body text-base leading-relaxed text-muted md:text-lg">
              {project.summary}
            </p>
          </div>
        </div>

        {/* Framed architectural image */}
        <div className="overflow-hidden bg-subtle">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9]">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
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