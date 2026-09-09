import Image from "next/image";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import type { MediaImage } from "@/types/content";

type PropertyFloorPlanProps = {
  name: string;
  floorPlan: MediaImage;
};

export function PropertyFloorPlan({ name, floorPlan }: PropertyFloorPlanProps) {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container className="flex flex-col items-center gap-12 md:gap-16">
        <SectionHeading
          eyebrow="Floor plan"
          title={`${name} — layout`}
          lede="Indicative layout for presentation; final plans may vary."
          align="center"
        />
        <div className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden border border-line bg-surface">
          <Image
            src={floorPlan.src}
            alt={floorPlan.alt}
            width={floorPlan.width}
            height={floorPlan.height}
            sizes="(min-width: 768px) 768px, 100vw"
            className="h-full w-full object-contain"
          />
        </div>
      </Container>
    </section>
  );
}