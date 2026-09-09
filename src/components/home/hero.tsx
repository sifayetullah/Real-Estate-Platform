import Image from "next/image";

import { Button } from "@/components/shared/button";
import { HERO_IMAGE } from "@/data/home";
import { SCHEDULE_VISIT_HREF } from "@/lib/navigation";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#17130f]">
      {/* ── Desktop (≥1024px): full-viewport cinematic composition ── */}
      <div className="relative hidden min-h-screen -mt-20 lg:block">
        {/* Architectural image — fills viewport */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            priority
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Wordmark — ABOVE the image, editorial layer */}
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
          <span
            aria-hidden="true"
            className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-white/[0.06]"
            style={{ fontSize: "clamp(8rem, 18vw, 28rem)" }}
          >
            AURORA
            <br />
            ESTATES
          </span>
        </div>

        {/* Gradient — left side darkening for text contrast */}
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

        {/* Content layer */}
        <div className="absolute inset-0 z-30 flex flex-col justify-between px-10 pt-28 pb-16 xl:px-16 2xl:px-20">
          {/* Top — brand name */}
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Aurora Estates
          </p>

          {/* Center — headline block */}
          <div className="max-w-3xl">
            <h1 className="font-display text-[3.25rem] font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white xl:text-[4.5rem] 2xl:text-[5.5rem]">
              Where
              <br />
              Design Meets
              <br />
              Home
            </h1>
            <p className="mt-8 max-w-md font-body text-base leading-relaxed text-white/70 xl:text-lg">
              A residential developer building considered homes — clear plans,
              honest materials and a lasting calm.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={SCHEDULE_VISIT_HREF} size="lg">
                Schedule a Visit
              </Button>
              <Button href="/projects" size="lg" variant="inverse-outline">
                Explore Projects
              </Button>
            </div>
          </div>

          {/* Bottom — technical facts strip */}
          <div className="flex items-center gap-10 border-t border-white/15 pt-6">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-white">
                3
              </span>
              <span className="mt-1 font-body text-[0.625rem] font-medium uppercase tracking-[0.18em] text-white/40">
                Neighbourhoods
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold text-white">
                51
              </span>
              <span className="mt-1 font-body text-[0.625rem] font-medium uppercase tracking-[0.18em] text-white/40">
                Residences
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display text-2xl font-bold text-white">
                2026
              </span>
              <span className="mt-1 font-body text-[0.625rem] font-medium uppercase tracking-[0.18em] text-white/40">
                Next Completion
              </span>
            </div>
            <p className="ml-auto hidden font-body text-[0.625rem] font-medium uppercase tracking-[0.18em] text-white/40 lg:block">
              Design-led developments — in-house team
            </p>
          </div>
        </div>
      </div>

      {/* ── Tablet (768–1023px): adjusted composition ── */}
      <div className="relative hidden min-h-[85vh] -mt-20 flex-col md:flex lg:hidden">
        {/* Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            priority
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Wordmark — above image */}
        <div className="absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
          <span
            aria-hidden="true"
            className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-white/[0.05]"
            style={{ fontSize: "clamp(6rem, 20vw, 16rem)" }}
          >
            AURORA
            <br />
            ESTATES
          </span>
        </div>

        {/* Gradient */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-30 flex flex-1 flex-col justify-between px-8 py-12 sm:px-12">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Aurora Estates
          </p>

          <div className="max-w-xl">
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.92] tracking-[-0.02em] text-white sm:text-6xl">
              Where
              <br />
              Design Meets
              <br />
              Home
            </h1>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-white/70 sm:text-lg">
              A residential developer building considered homes — clear plans,
              honest materials and a lasting calm.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={SCHEDULE_VISIT_HREF} size="lg">
                Schedule a Visit
              </Button>
              <Button href="/projects" size="lg" variant="inverse-outline">
                Explore Projects
              </Button>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-8 border-t border-white/15 pt-6">
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-white">
                3
              </span>
              <span className="mt-1 font-body text-[0.625rem] font-medium uppercase tracking-[0.18em] text-white/40">
                Neighbourhoods
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-white">
                51
              </span>
              <span className="mt-1 font-body text-[0.625rem] font-medium uppercase tracking-[0.18em] text-white/40">
                Residences
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold text-white">
                2026
              </span>
              <span className="mt-1 font-body text-[0.625rem] font-medium uppercase tracking-[0.18em] text-white/40">
                Next Completion
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile (<768px): dedicated full-bleed composition ── */}
      <div className="relative flex min-h-[100dvh] -mt-20 flex-col md:hidden">
        {/* Full background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            priority
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>

        {/* Wordmark — above image */}
        <div className="absolute inset-0 z-[1] flex items-center justify-center overflow-hidden">
          <span
            aria-hidden="true"
            className="font-display font-bold leading-[0.85] tracking-[-0.04em] text-white/[0.04]"
            style={{ fontSize: "clamp(4rem, 22vw, 10rem)" }}
          >
            AURORA
            <br />
            ESTATES
          </span>
        </div>

        {/* Content positioned over image */}
        <div className="relative z-10 flex flex-1 flex-col justify-between px-5 pb-8 pt-28">
          {/* Brand */}
          <p className="font-display text-[0.625rem] font-semibold uppercase tracking-[0.3em] text-white/50">
            Aurora Estates
          </p>

          {/* Center — massive headline */}
          <div className="flex flex-1 items-center">
            <h1 className="font-display text-[2.5rem] font-bold uppercase leading-[0.9] tracking-[-0.01em] text-white">
              Where
              <br />
              Design
              <br />
              Meets Home
            </h1>
          </div>

          {/* Bottom — CTA + facts */}
          <div className="flex flex-col gap-5">
            <Button href={SCHEDULE_VISIT_HREF} size="lg" className="w-full">
              Schedule a Visit
            </Button>
            <div className="flex items-center gap-6 border-t border-white/15 pt-4">
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-white">
                  3
                </span>
                <span className="font-body text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-white/40">
                  Neighbourhoods
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-white">
                  51
                </span>
                <span className="font-body text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-white/40">
                  Residences
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-white">
                  2026
                </span>
                <span className="font-body text-[0.5625rem] font-medium uppercase tracking-[0.16em] text-white/40">
                  Completion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom blend — smooth transition into next section's cream background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[60] h-24 bg-gradient-to-b from-transparent to-[#f7f4ee]"
      />
    </section>
  );
}
