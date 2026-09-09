"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/shared/button";
import {
  NAV_ITEMS,
  SCHEDULE_VISIT_HREF,
} from "@/lib/navigation";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);
  const pathname = usePathname();

  function close() {
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    const wasOpen = wasOpenRef.current;
    wasOpenRef.current = open;
    if (wasOpen === open) return;

    if (open) {
      dialogRef.current?.focus();
    } else {
      toggleRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="site-nav-overlay"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-11 min-w-11 items-center justify-center text-foreground hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
      >
        <span aria-hidden="true" className="flex flex-col items-center gap-[7px]">
          <span
            className={cn(
              "block h-px w-7 bg-current transition-transform motion-safe:duration-200",
              open && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-7 bg-current transition-opacity motion-safe:duration-200",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-7 bg-current transition-transform motion-safe:duration-200",
              open && "-translate-y-2 -rotate-45",
            )}
          />
        </span>
      </button>

      <div
        ref={dialogRef}
        id="site-nav-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={open ? -1 : undefined}
        hidden={!open}
        className="fixed inset-0 top-0 z-50 flex flex-col bg-background motion-safe:animate-[navfade_0.2s_ease-out] lg:hidden"
      >
        <div className="flex h-20 items-center justify-between border-b border-line px-4 sm:px-6">
          <span className="font-display text-lg font-semibold uppercase tracking-[0.18em]">{SITE_NAME}</span>
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="inline-flex h-11 min-w-11 items-center justify-center text-foreground hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              &times;
            </span>
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-6 py-10">
          <div className="mb-10">
            <Button
              href={SCHEDULE_VISIT_HREF}
              size="lg"
              className="w-full"
              onClick={close}
            >
              Schedule a Visit
            </Button>
          </div>
          <ul className="flex flex-col divide-y divide-line border-t border-line">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className={cn(
                    "group flex min-h-16 items-center gap-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="font-body text-xs tracking-[0.2em] text-accent"
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={cn(
                      "font-display text-3xl leading-none transition-colors group-hover:text-accent",
                      pathname === item.href
                        ? "text-accent"
                        : "text-foreground",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
