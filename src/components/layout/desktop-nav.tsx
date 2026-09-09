"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function DesktopNav({ inverse = false }: { inverse?: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center gap-9 lg:flex"
    >
      {NAV_ITEMS.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "group relative inline-flex min-h-11 items-center font-body text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
              inverse
                ? active
                  ? "text-white"
                  : "text-white/70 hover:text-white"
                : active
                  ? "text-foreground"
                  : "text-muted hover:text-foreground",
            )}
          >
            {item.label}
            <span
              aria-hidden="true"
              className={cn(
                "absolute -bottom-0.5 left-0 h-px transition-all motion-safe:duration-200",
                inverse ? "bg-white" : "bg-accent",
                active ? "w-full" : "w-0 group-hover:w-full",
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}
