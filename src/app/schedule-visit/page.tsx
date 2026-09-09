import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { VisitForm } from "@/components/visit/visit-form";
import { PROJECTS } from "@/data/projects";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule a Visit",
  description:
    "Arrange a private, unhurried tour of an Aurora Estates residence with a member of the development team.",
  alternates: {
    canonical: "/schedule-visit",
  },
};

export default function ScheduleVisitPage() {
  const projects = PROJECTS.map((project) => ({
    value: project.slug,
    label: project.name,
  }));

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Schedule a Visit" },
        ]}
        eyebrow="Schedule a Visit"
        title="See the home, not just the plans."
        lede="Tell us which project you'd like to see and when suits you. We'll arrange a private, unhurried tour with a member of the development team."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="flex flex-col gap-5">
              <p className="eyebrow">What to expect</p>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.015em]">
                Private, and on your terms
              </h2>
            </div>
            <p className="max-w-prose font-body text-base leading-relaxed text-muted md:text-lg">
              Visits are arranged one at a time so you have the residence
              essentially to yourself. You&rsquo;ll be accompanied by a member
              of the development team who can answer questions about the plan,
              the materials and the building itself.
            </p>
            <dl className="flex flex-col border-t border-line">
              <div className="flex flex-col gap-2 border-b border-line py-6">
                <dt className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-body text-lg font-medium text-foreground underline-offset-4 hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
              <div className="flex flex-col gap-2 py-6">
                <dt className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${CONTACT_PHONE.replace(/[^0-9+]/g, "")}`}
                    className="font-body text-lg font-medium text-foreground underline-offset-4 hover:text-accent hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {CONTACT_PHONE}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="max-w-prose font-body text-base leading-relaxed text-muted">
              Prefer to ask a question first?{" "}
              <a
                href="/contact"
                className="text-foreground underline underline-offset-4 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Head to the contact page
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-line bg-surface p-6 sm:p-14">
              <VisitForm projects={projects} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}