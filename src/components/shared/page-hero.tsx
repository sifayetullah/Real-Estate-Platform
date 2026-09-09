import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import type { BreadcrumbItem } from "@/components/shared/breadcrumbs";
import { Container } from "@/components/shared/container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
};

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  lede,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("border-b border-line py-16 md:py-24", className)}>
      <Container className="flex flex-col gap-8">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="max-w-5xl font-display text-[2.9rem] font-semibold leading-[1.01] tracking-[-0.015em] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {lede ? (
          <p className="max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg">
            {lede}
          </p>
        ) : null}
      </Container>
    </section>
  );
}