import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const PRINCIPLES = [
  {
    title: "Context before plan",
    body: "Every project begins with its street, its light and its neighbours. The building belongs to its place before it belongs to anyone.",
  },
  {
    title: "Honest materials",
    body: "Brick, stone, timber and glass, used for what they are. Nothing dressed up, nothing pretending to be more than it is.",
  },
  {
    title: "Light first",
    body: "Rooms are drawn around the path of the sun, so that every hour of the day finds a place where it belongs.",
  },
  {
    title: "End-to-end care",
    body: "One team carries each building from sketch to final fitting — a single point of accountability from first meeting to handover.",
  },
];

export function Philosophy() {
  return (
    <section className="border-b border-line bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow="Principles"
          title="What we hold to"
          lede="Four convictions guide every decision, from the first sketch to the final fitting."
        />
        <ol className="border-t border-line">
          {PRINCIPLES.map((principle, index) => (
            <li
              key={principle.title}
              className="group grid gap-5 border-b border-line py-10 md:grid-cols-12 md:gap-8"
            >
              <span className="font-display text-5xl font-semibold leading-none text-accent/60 transition-colors group-hover:text-accent md:col-span-2 md:text-6xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-4 md:col-span-10">
                <h3 className="font-display text-2xl font-semibold leading-snug tracking-[-0.01em] transition-colors group-hover:text-accent md:text-3xl">
                  {principle.title}
                </h3>
                <p className="max-w-prose font-body text-base leading-relaxed text-muted">
                  {principle.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}