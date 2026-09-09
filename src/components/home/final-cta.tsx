import { ArrowLink } from "@/components/shared/arrow-link";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site";
import { SCHEDULE_VISIT_HREF } from "@/lib/navigation";

export function FinalCta() {
  return (
    <section className="bg-inverse-bg text-inverse-fg">
      <Container className="grid gap-14 py-24 md:py-36 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="flex flex-col gap-8 lg:col-span-8">
          <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-7xl">
            See the difference a considered home makes.
          </h2>
        </div>
        <div className="flex flex-col gap-8 lg:col-span-4 lg:items-start">
          <p className="max-w-md font-body text-base leading-relaxed text-inverse-muted md:text-lg">
            Arrange a private visit and tour a residence with a member of our
            development team — unhurried, and on your terms.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Button href={SCHEDULE_VISIT_HREF} size="lg" variant="inverse">
              Schedule a Visit
            </Button>
            <ArrowLink href="/contact" onDark>
              Contact
            </ArrowLink>
          </div>
          <p className="border-t border-inverse-fg/15 pt-6 font-body text-[0.8125rem] tracking-wide text-inverse-muted">
            {CONTACT_EMAIL} · {CONTACT_PHONE}
          </p>
        </div>
      </Container>
    </section>
  );
}