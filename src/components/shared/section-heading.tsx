import type { ReactNode } from "react";

import { ArrowLink } from "@/components/shared/arrow-link";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  actionHref?: string;
  actionLabel?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  actionHref,
  actionLabel = "View all",
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        centered ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow",
            centered && "eyebrow--flush",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className="max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.01em] md:text-6xl">
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "max-w-2xl font-body text-base leading-relaxed text-muted md:text-lg",
            centered && "mx-auto",
          )}
        >
          {lede}
        </p>
      ) : null}
      {actionHref && actionLabel ? (
        <div className="mt-3">
          <ArrowLink href={actionHref}>{actionLabel}</ArrowLink>
        </div>
      ) : null}
    </div>
  );
}

export function SectionWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-20 md:py-28", className)}>{children}</section>
  );
}