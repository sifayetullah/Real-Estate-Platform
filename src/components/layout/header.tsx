import Link from "next/link";

import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/shared/button";
import { SCHEDULE_VISIT_HREF } from "@/lib/navigation";
import { SITE_NAME } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${SITE_NAME} — Home`}
          className="group flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="font-display text-xl font-semibold leading-none uppercase tracking-[0.18em] text-foreground transition-colors group-hover:text-accent">
            {SITE_NAME}
          </span>
          <span
            aria-hidden="true"
            className="mt-1.5 h-px w-full bg-accent opacity-70 transition-opacity group-hover:opacity-100"
          />
        </Link>

        <DesktopNav />

        <div className="hidden lg:block">
          <Button href={SCHEDULE_VISIT_HREF} size="sm">
            Schedule a Visit
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}