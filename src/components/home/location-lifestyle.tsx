import Image from "next/image";

import { Container } from "@/components/shared/container";
import { LOCATION } from "@/data/home";

export function LocationLifestyle() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Framed portrait image with offset support */}
          <div className="relative lg:order-2 lg:col-span-6">
            <div className="overflow-hidden bg-subtle">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] md:aspect-[3/4]">
                <Image
                  src={LOCATION.image.src}
                  alt={LOCATION.image.alt}
                  width={LOCATION.image.width}
                  height={LOCATION.image.height}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-[-2rem] ml-auto mr-6 flex w-fit items-end gap-4 border border-line bg-background px-5 py-4 lg:mr-10">
              <p className="font-body text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-faint">
                Neighbourhood
              </p>
              <p className="font-serif text-2xl leading-none">
                {LOCATION.area}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-8 lg:order-1 lg:col-span-6 lg:justify-center">
            <p className="eyebrow">Location &amp; lifestyle</p>
            <h2 className="max-w-xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-6xl">
              Homes that belong to their place
            </h2>
            <p className="max-w-prose font-body text-lg leading-relaxed text-muted">
              {LOCATION.summary}
            </p>
            <p className="max-w-prose font-body text-base leading-relaxed text-muted">
              {LOCATION.prose}
            </p>
            <dl className="mt-2 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-7">
              <div className="flex flex-col gap-1">
                <dt className="font-body text-xs font-medium uppercase tracking-[0.18em] text-faint">
                  Streets
                </dt>
                <dd className="font-body text-sm font-semibold text-foreground">
                  Mature, chosen for daily life
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="font-body text-xs font-medium uppercase tracking-[0.18em] text-faint">
                  Transport
                </dt>
                <dd className="font-body text-sm font-semibold text-foreground">
                  Car not required
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}