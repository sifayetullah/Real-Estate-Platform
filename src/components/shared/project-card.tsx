import Image from "next/image";
import Link from "next/link";

import { StatusBadge } from "@/components/shared/badges";
import type { Project } from "@/types/content";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group">
      <Link
        href={`/projects/${project.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div className="relative aspect-[16/11] overflow-hidden bg-subtle">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute right-0 top-0 border-b border-l border-line bg-background/90 px-3 py-2 backdrop-blur-sm">
            <StatusBadge status={project.status} />
          </div>
        </div>
        <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5">
          <div className="flex flex-col gap-2">
            <h3 className="font-serif text-2xl leading-none tracking-[0.01em] transition-colors group-hover:text-accent md:text-[1.75rem]">
              {project.name}
            </h3>
            <p className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
              {project.location}
            </p>
          </div>
          <p className="shrink-0 font-display text-xl font-semibold text-accent">
            <span aria-hidden="true">→</span>
          </p>
        </div>
      </Link>
    </article>
  );
}
