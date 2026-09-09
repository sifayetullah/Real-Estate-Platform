import { Container } from "@/components/shared/container";
import { ImageGallery } from "@/components/shared/image-gallery";
import { SectionHeading } from "@/components/shared/section-heading";
import type { MediaImage } from "@/types/content";

type PropertyGalleryProps = {
  gallery: MediaImage[];
};

export function PropertyGallery({ gallery }: PropertyGalleryProps) {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container className="flex flex-col gap-12 md:gap-16">
        <SectionHeading eyebrow="Gallery" title="Inside the residence" />
        <ImageGallery gallery={gallery} />
      </Container>
    </section>
  );
}