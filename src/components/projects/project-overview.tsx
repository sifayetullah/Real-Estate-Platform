import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

type ProjectOverviewProps = {
  project: Project;
};

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-7 lg:col-span-7">
            <p className="eyebrow">Overview</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-5xl">
              About this project
            </h2>
            {project.description.map((paragraph, index) => (
              <p
                key={paragraph}
                className={cn(
                  "font-body leading-relaxed text-muted",
                  index === 0 ? "text-lg md:text-xl" : "text-base md:text-lg",
                )}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <dl className="border-t border-line">
              {project.facts.map((fact, index) => (
                <div
                  key={fact.label}
                  className={cn(
                    "flex items-baseline justify-between gap-4 border-b border-line py-5",
                    index === 0 && "pt-7",
                  )}
                >
                  <dt className="font-body text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-faint">
                    {fact.label}
                  </dt>
                  <dd className="text-right font-body text-base font-semibold text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}