import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";

export default function NotFound() {
  return (
    <section className="py-24 md:py-36">
      <Container className="flex flex-col items-start gap-8">
        <p className="eyebrow">Error 404</p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-7xl">
          Page not found
        </h1>
        <p className="max-w-prose font-body text-base leading-relaxed text-muted md:text-lg">
          The page you are looking for does not exist or may have moved.
        </p>
        <div className="mt-2">
          <Button href="/">Return home</Button>
        </div>
      </Container>
    </section>
  );
}