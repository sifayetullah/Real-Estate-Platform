import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type ArrowLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  className?: string;
  onDark?: boolean;
};

export function ArrowLink({
  href,
  children,
  className,
  onDark = false,
  ...rest
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 font-body text-[0.9375rem] font-semibold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        onDark ? "text-inverse-fg" : "text-foreground",
        className,
      )}
      {...rest}
    >
      <span
        className={cn(
          "relative pb-1 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:transition-colors motion-safe:duration-200",
          onDark
            ? "after:bg-inverse-fg/40 group-hover:after:bg-accent"
            : "after:bg-muted group-hover:after:bg-accent",
        )}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-current/40 transition-all motion-safe:duration-200 group-hover:translate-x-0.5 group-hover:border-accent group-hover:text-accent"
      >
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

export function InlineLink({
  href,
  children,
  className,
  onDark = false,
  ...rest
}: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "font-body text-base underline decoration-1 underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        onDark
          ? "text-inverse-fg decoration-inverse-fg/40 hover:text-accent hover:decoration-accent"
          : "text-foreground decoration-muted hover:text-accent hover:decoration-accent",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}