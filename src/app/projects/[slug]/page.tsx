import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectAmenities } from "@/components/projects/project-amenities";
import { ProjectCta } from "@/components/projects/project-cta";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectOverview } from "@/components/projects/project-overview";
import { ProjectResidences } from "@/components/projects/project-residences";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import type { SlugPageProps } from "@/types/endpoints";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: SlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const { image, summary, name } = project;

  return {
    title: name,
    description: summary,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      type: "website",
      title: name,
      description: summary,
      images: [
        {
          url: image.src,
          width: image.width,
          height: image.height,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description: summary,
      images: [image.src],
    },
  };
}

export default async function ProjectDetailPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectGallery gallery={project.gallery} />
      <ProjectAmenities amenities={project.amenities} />
      <ProjectResidences projectSlug={project.slug} />
      <ProjectCta />
    </>
  );
}