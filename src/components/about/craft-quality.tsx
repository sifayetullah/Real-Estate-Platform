import Image from "next/image";

import { Container } from "@/components/shared/container";

const CRAFT_IMAGE = {
  src: "https://images.unsplash.com/photo-1774311237295-a65a4c1ff38a?auto=format&fit=crop&w=1600&h=1100&q=80",
  alt: "Open-plan living area with floor-to-ceiling glazing and a nature outlook",
  width: 1600,
  height: 1100,
};

export function CraftQuality() {
  return (
    <section className="border-b border-line py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden bg-subtle lg:col-span-7 lg:mt-12">
            <Image
              src={CRAFT_IMAGE.src}
              alt={CRAFT_IMAGE.alt}
              width={CRAFT_IMAGE.width}
              height={CRAFT_IMAGE.height}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col items-start gap-8 lg:col-span-5 lg:justify-center">
            <p className="eyebrow">Craft &amp; responsibility</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-[-0.015em] md:text-5xl">
              Built to age well, and to stay well
            </h2>
            <div className="flex flex-col gap-6 border-t border-line pt-8">
              <p className="max-w-prose font-body text-base leading-relaxed text-muted md:text-lg">
                A considered building is not finished when it is handed over —
                it begins to earn its keep. We choose materials that deepen with
                use, we build to standards we would accept in our own homes, and
                we remain involved once the building is occupied.
              </p>
              <p className="max-w-prose font-body text-base leading-relaxed text-muted md:text-lg">
                Responsibility is part of the design: sound-insulated party
                walls, dependable heating, deep window reveals and honest
                availability. We would rather understate what we promise than
                overstate what we build.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}