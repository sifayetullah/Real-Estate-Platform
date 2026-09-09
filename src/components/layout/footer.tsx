import Link from "next/link";

import { InlineLink } from "@/components/shared/arrow-link";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { NAV_ITEMS, SCHEDULE_VISIT_HREF } from "@/lib/navigation";
import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Journal", href: "/journal" },
];

export function Footer() {
  return (
    <footer className="bg-inverse-bg text-inverse-fg">
      <Container className="py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <Link
              href="/"
              aria-label={`${SITE_NAME} — Home`}
              className="flex w-fit flex-col leading-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="font-display text-2xl font-semibold uppercase leading-none tracking-[0.18em]">
                {SITE_NAME}
              </span>
              <span
                aria-hidden="true"
                className="mt-2 h-px w-full bg-accent"
              />
            </Link>
            <p className="max-w-sm font-body text-[0.9375rem] leading-relaxed text-inverse-muted">
              {SITE_DESCRIPTION}
            </p>
            <div className="mt-2">
              <Button href={SCHEDULE_VISIT_HREF} variant="inverse">
                Schedule a Visit
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.2em] text-inverse-muted">
              Explore
            </p>
            <ul className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-base text-inverse-fg transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="mb-5 font-body text-xs font-medium uppercase tracking-[0.2em] text-inverse-muted">
              Company
            </p>
            <ul className="flex flex-col gap-4">
              {COMPANY_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-base text-inverse-fg transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-inverse-muted">
              Contact
            </p>
            <InlineLink href={`mailto:${CONTACT_EMAIL}`} onDark>
              {CONTACT_EMAIL}
            </InlineLink>
          </div>
        </div>

        <div className="mt-16 border-t border-inverse-fg/10 pt-8">
          <p className="flex flex-col gap-1 font-body text-sm text-inverse-muted sm:flex-row sm:items-center sm:justify-between">
            <span>
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights
              reserved.
            </span>
            <span>Residential developer &mdash; in-house design team.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}