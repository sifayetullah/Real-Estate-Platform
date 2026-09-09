import { Container } from "@/components/shared/container";
import { ImageGallery } from "@/components/shared/image-gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import type { MediaImage } from "@/types/content";

type ProjectGalleryProps = {
  gallery: MediaImage[];
};

export function ProjectGallery({ gallery }: ProjectGalleryProps) {
  return (
    <section className="border-b border-line bg-surface py-20 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <SectionHeading eyebrow="Gallery" title="In context" />
        <ImageGallery gallery={gallery} />
      </Container>
    </section>
  );
}