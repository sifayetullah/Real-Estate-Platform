"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/shared/button";
import { NAV_ITEMS, SCHEDULE_VISIT_HREF } from "@/lib/navigation";
import { SITE_NAME } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav({ inverse = false }: { inverse?: boolean }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    // Don't steal focus on initial page load — only move focus on open/close transitions.
    if (!mountedRef.current) {
      mountedRef.current = true;
      if (open) {
        dialogRef.current?.focus();
        document.body.style.overflow = "hidden";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }

    if (open) {
      dialogRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      toggleRef.current?.focus();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Menu trigger — icon + label */}
      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "relative inline-flex items-center gap-2 lg:hidden",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
          inverse ? "text-white" : "text-foreground",
        )}
      >
        {/* Hamburger / X icon */}
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span
            className={cn(
              "absolute left-0 top-0 block h-px w-5 bg-current transition-all duration-300",
              open && "translate-y-[7px] rotate-45",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[7px] block h-px w-5 bg-current transition-opacity duration-200",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 top-[14px] block h-px w-5 bg-current transition-all duration-300",
              open && "-translate-y-[7px] -rotate-45",
            )}
          />
        </span>

        {/* Label */}
        <span
          className={cn(
            "font-body text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300",
          )}
        >
          {open ? "Close" : "Menu"}
        </span>
      </button>

      {/* Full-screen navigation overlay */}
      <div
        ref={dialogRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={-1}
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[55] flex flex-col bg-[#f7f4ee] text-foreground lg:hidden",
          "transition-[opacity,visibility] duration-300",
          open
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none",
        )}
      >
        {/* Top bar */}
        <div className="flex h-20 shrink-0 items-center justify-between border-b border-[#ded8cd] px-5">
          <Link
            href="/"
            onClick={close}
            className="font-display text-lg font-semibold uppercase tracking-[0.16em]"
          >
            {SITE_NAME}
          </Link>

          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span className="absolute left-0 top-0 block h-px w-5 bg-current rotate-45 translate-y-[7px]" />
              <span className="absolute left-0 top-[7px] block h-px w-5 bg-current opacity-0" />
              <span className="absolute left-0 top-[14px] block h-px w-5 bg-current -rotate-45 -translate-y-[7px]" />
            </span>
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.2em]">
              Close
            </span>
          </button>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col overflow-y-auto px-5 py-8"
        >
          <div className="mb-8">
            <p className="mb-3 font-body text-[10px] uppercase tracking-[0.28em] text-muted">
              Explore
            </p>
            <div className="h-px bg-[#ded8cd]" />
          </div>

          <ul className="divide-y divide-[#ded8cd] border-y border-[#ded8cd]">
            {NAV_ITEMS.map((item, index) => {
              const active = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={close}
                    className="group flex min-h-[72px] items-center gap-5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
                  >
                    <span
                      aria-hidden="true"
                      className="font-body text-[10px] tracking-[0.2em] text-accent"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={cn(
                        "font-display text-[2rem] leading-none tracking-[-0.02em] transition-colors duration-200",
                        active
                          ? "text-accent"
                          : "text-foreground group-hover:text-accent",
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="mt-auto pt-10">
            <Button
              href={SCHEDULE_VISIT_HREF}
              size="lg"
              className="w-full"
              onClick={close}
            >
              Schedule a Visit
            </Button>

            <p className="mt-4 text-center font-body text-xs text-muted">
              Begin your journey home.
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
