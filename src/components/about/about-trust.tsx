import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { TRUST_POINTS } from "@/data/home";
import { PROJECTS } from "@/data/projects";

const completed = PROJECTS.filter((p) => p.status === "completed").length;
const moving = PROJECTS.filter((p) => p.status !== "completed").length;
const neighbourhoods = new Set(PROJECTS.map((p) => p.location)).size;

const FACTS = [
  { value: String(PROJECTS.length), label: "Active projects", detail: "Listed on this site, with sales open or opening soon." },
  { value: String(completed), label: "Completed building", detail: "Delivered and now fully occupied." },
  { value: String(moving), label: "Buildings underway or announced", detail: "Moving toward completion in the coming year." },
  { value: String(neighbourhoods), label: "Neighbourhoods", detail: "Established districts near water, gardens and transport." },
];

export function AboutTrust() {
  return (
    <section className="border-b border-line bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          eyebrow="Trust"
          title="What we can put in writing"
          lede="Not claims — the projects themselves. Everything below is drawn directly from our published portfolio."
        />

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-4 border-l border-line pl-6">
              <span className="font-display text-5xl font-semibold leading-none tracking-[-0.01em] text-accent md:text-6xl">
                {fact.value}
              </span>
              <div className="flex flex-col gap-2">
                <p className="font-display text-xl font-semibold leading-snug text-foreground">
                  {fact.label}
                </p>
                <p className="max-w-xs font-body text-base leading-relaxed text-muted">
                  {fact.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ol className="border-t border-line">
          {TRUST_POINTS.map((point, index) => (
            <li
              key={point.title}
              className="group grid gap-5 border-b border-line py-10 md:grid-cols-12 md:gap-8"
            >
              <span className="font-display text-5xl font-semibold leading-none text-accent/60 transition-colors group-hover:text-accent md:col-span-2 md:text-6xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-4 md:col-span-10">
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
      </Container>
    </section>
  );
}