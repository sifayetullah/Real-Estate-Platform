"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/shared/button";
import { SCHEDULE_VISIT_HREF } from "@/lib/navigation";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const overlay = isHome && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background-color,backdrop-filter,border-color] duration-500 ease-out",
        overlay
          ? "border-transparent bg-transparent"
          : "border-line bg-[#f7f4ee]/95 backdrop-blur-md",
      )}
    >
      {isHome && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-28 transition-opacity duration-500",
            overlay ? "opacity-100" : "opacity-0",
          )}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,.42), transparent)",
          }}
        />
      )}

      <div className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${SITE_NAME} — Home`}
          className="group flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span
            className={cn(
              "font-display text-xl font-semibold uppercase tracking-[0.18em] transition-colors duration-500",
              overlay ? "text-white" : "text-foreground",
              "group-hover:text-accent",
            )}
          >
            {SITE_NAME}
          </span>

          <span
            aria-hidden="true"
            className={cn(
              "mt-1.5 h-px w-full opacity-70 transition-colors duration-500",
              overlay ? "bg-white/60" : "bg-accent",
            )}
          />
        </Link>

        <DesktopNav inverse={overlay} />

        <div className="hidden lg:block">
          <Button
            href={SCHEDULE_VISIT_HREF}
            size="sm"
            variant={overlay ? "inverse" : "primary"}
          >
            Schedule a Visit
          </Button>
        </div>

        <MobileNav inverse={overlay} />
      </div>
    </header>
  );
}
