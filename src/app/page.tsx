import type { Metadata } from "next";

import { AvailableResidences } from "@/components/home/available-residences";
import { BrandStory } from "@/components/home/brand-story";
import { FeaturedProject } from "@/components/home/featured-project";
import { FinalCta } from "@/components/home/final-cta";
import { Hero } from "@/components/home/hero";
import { JournalPreview } from "@/components/home/journal-preview";
import { LocationLifestyle } from "@/components/home/location-lifestyle";
import { ProjectPortfolio } from "@/components/home/project-portfolio";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export const metadata: Metadata = {
  description:
    "Aurora Estates develops considered residential buildings, apartments and penthouses — design-led, honest and built to last.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <ProjectPortfolio />
      <AvailableResidences />
      <BrandStory />
      <LocationLifestyle />
      <WhyChooseUs />
      <JournalPreview />
      <FinalCta />
    </>
  );
}