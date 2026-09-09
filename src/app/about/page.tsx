import type { Metadata } from "next";

import { AboutHero } from "@/components/about/about-hero";
import { AboutTrust } from "@/components/about/about-trust";
import { BrandManifesto } from "@/components/about/brand-manifesto";
import { CraftQuality } from "@/components/about/craft-quality";
import { Philosophy } from "@/components/about/philosophy";
import { Process } from "@/components/about/process";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aurora Estates is a residential developer with an in-house design team — from first sketch to final fitting, deliberately and to be lived in for decades.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandManifesto />
      <Philosophy />
      <Process />
      <CraftQuality />
      <AboutTrust />
      <FinalCta />
    </>
  );
}