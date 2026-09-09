import { Container } from "@/components/shared/container";
import { BRAND_STORY } from "@/data/home";

export function BrandStory() {
  return (
    <section className="border-b border-line py-28 md:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-10 lg:col-span-8">
            <p className="eyebrow">{BRAND_STORY.eyebrow}</p>
            <p className="font-serif text-4xl leading-[1.12] tracking-[0.005em] md:text-6xl">
              &ldquo;{BRAND_STORY.statement}&rdquo;
            </p>
          </div>
          <div className="flex flex-col justify-end gap-8 lg:col-span-4">
            <div className="h-px w-full bg-line" />
            <p className="max-w-prose font-body text-base leading-relaxed text-muted md:text-lg">
              {BRAND_STORY.prose}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}