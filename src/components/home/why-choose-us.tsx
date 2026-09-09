import { Container } from "@/components/shared/container";
import { TRUST_POINTS } from "@/data/home";

export function WhyChooseUs() {
  return (
    <section className="border-b border-line bg-surface py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col items-start gap-7 lg:col-span-5">
            <p className="eyebrow">Why choose us</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-6xl">
              A developer, not a marketplace
            </h2>
            <p className="max-w-prose font-body text-lg leading-relaxed text-muted">
              A single team responsible for its work, end to end. These are the
              commitments we make on every project.
            </p>
          </div>

          <ol className="border-t border-line lg:col-span-7">
            {TRUST_POINTS.map((point, index) => (
              <li
                key={point.title}
                className="group grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-8"
              >
                <span className="font-display text-5xl font-semibold leading-none text-accent/60 transition-colors group-hover:text-accent md:col-span-3 md:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-3 md:col-span-9">
                  <h3 className="font-display text-2xl font-semibold leading-snug tracking-[-0.01em] transition-colors group-hover:text-accent md:text-3xl">
                    {point.title}
                  </h3>
                  <p className="max-w-prose font-body text-base leading-relaxed text-muted">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}