import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";

const STEPS = [
  {
    number: "01",
    title: "Understand the place",
    body: "We begin with context: the street, the light, the existing buildings and the daily life of the neighbourhood. The plot teaches us its plan before we draw a single wall.",
  },
  {
    number: "02",
    title: "Design the rooms around light",
    body: "Plans are arranged around the sun and the garden, with clear, generous rooms and built-in storage designed into the layout rather than added to it.",
  },
  {
    number: "03",
    title: "Build with care",
    body: "Construction is managed by the same team that designed the building. Materials are chosen to age well, and workmanship is checked on site at every stage.",
  },
  {
    number: "04",
    title: "Hand over, and stay close",
    body: "After completion we remain involved — commissioning, settling in, and standing behind the building as it begins its life.",
  },
];

export function Process() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <SectionHeading
          eyebrow="Process"
          title="From first sketch to final fitting"
          lede="One team carries each project from site appraisal to handover, so the intent of the design survives every stage."
        />
        <ol className="border-t border-line">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="group grid gap-5 border-b border-line py-10 md:grid-cols-12 md:gap-8"
            >
              <span className="font-display text-3xl font-semibold leading-none text-accent/60 transition-colors group-hover:text-accent md:col-span-2 md:text-4xl">
                {step.number}
              </span>
              <div className="flex flex-col gap-4 md:col-span-10">
                <h3 className="font-display text-2xl font-semibold leading-snug tracking-[-0.01em] transition-colors group-hover:text-accent md:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-prose font-body text-base leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}