import Image from "next/image";

import { Button } from "@/components/shared/button";
import { HERO_IMAGE } from "@/data/home";
import { SCHEDULE_VISIT_HREF } from "@/lib/navigation";

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line">
      <div className="mx-auto grid w-full max-w-7xl px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        {/* Oversized editorial typography block */}
        <div className="py-14 lg:col-span-6 lg:flex lg:flex-col lg:justify-between lg:py-20">
          <div className="flex flex-col items-start gap-6">
            <p className="eyebrow">Residential developer</p>
            <h1 className="font-display text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.02em] sm:text-6xl md:text-7xl">
              Aurora
              <span className="block">Estates</span>
            </h1>
          </div>
          <div className="mt-10 flex flex-col items-start gap-7 lg:mt-16">
            <p className="max-w-md font-body text-base leading-relaxed text-muted md:text-lg">
              A residential developer building considered homes — clear plans,
              honest materials and a lasting calm.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={SCHEDULE_VISIT_HREF} size="lg">
                Schedule a Visit
              </Button>
              <Button href="/projects" size="lg" variant="secondary">
                Explore Projects
              </Button>
            </div>
          </div>
        </div>

        {/* Framed architectural image */}
        <div className="relative order-first min-h-[46vh] lg:order-none lg:col-span-6 lg:min-h-[86vh]">
          <div className="relative h-full min-h-[46vh] overflow-hidden lg:absolute lg:inset-y-8 lg:-right-0 lg:left-10">
            <Image
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              priority
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Technical metadata strip */}
        <div className="col-span-full lg:flex lg:items-center lg:justify-between lg:border-t lg:border-line lg:py-5">
          <p className="border-t border-line py-4 font-body text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-faint lg:border-t-0 lg:py-0">
            Harbour Quarter · Old Town · The Gardens
          </p>
          <p className="hidden font-body text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-faint lg:block">
            Design-led developments — in-house team
          </p>
        </div>
      </div>
    </section>
  );
}
