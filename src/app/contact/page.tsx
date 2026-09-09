import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { ArrowLink } from "@/components/shared/arrow-link";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { getPropertyBySlug } from "@/data/properties";
import { PROJECTS } from "@/data/projects";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Aurora Estates — ask about a residence, a project, or anything else. We reply within two working days.",
  alternates: {
    canonical: "/contact",
  },
};

type ContactPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const propertySlug =
    typeof params.property === "string" ? params.property : undefined;
  const property = propertySlug ? getPropertyBySlug(propertySlug) : undefined;

  const neighbourhoods = [...new Set(PROJECTS.map((p) => p.location))];

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Contact"
        title="Start a conversation."
        lede="Whether you have a question about a residence, a project or the way we work, we'd be glad to hear from you — and to reply within two working days."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-10 lg:col-span-5">
            <div className="flex flex-col gap-5">
              <p className="eyebrow">Contact information</p>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.015em]">
                Reach us directly
              </h2>
            </div>
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
              <div className="flex flex-col gap-2 border-b border-line py-6">
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
              <div className="flex flex-col gap-2 border-b border-line py-6">
                <dt className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
                  Neighbourhoods
                </dt>
                <dd className="font-body text-lg font-medium text-foreground">
                  {neighbourhoods.join(" · ")}
                </dd>
              </div>
              <div className="flex flex-col gap-2 py-6">
                <dt className="font-body text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-faint">
                  Visits
                </dt>
                <dd className="max-w-prose font-body text-base leading-relaxed text-muted">
                  Tours are arranged one at a time, by appointment, with a
                  member of the development team.
                </dd>
              </div>
            </dl>
            <div>
              <ArrowLink href="/schedule-visit">
                Schedule a visit instead
              </ArrowLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-line bg-surface p-6 sm:p-14">
              <ContactForm
                preselect={
                  property ? { propertyName: property.name } : null
                }
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}