import Image from "next/image";

import type { MediaImage } from "@/types/content";

type ImageGalleryProps = {
  gallery: MediaImage[];
};

export function ImageGallery({ gallery }: ImageGalleryProps) {
  const [lead, ...rest] = gallery;

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {/* Dominant lead image */}
      {lead ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-subtle">
          <Image
            src={lead.src}
            alt={lead.alt}
            width={lead.width}
            height={lead.height}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}

      {/* Asymmetric editorial pair */}
      {rest.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-12 sm:gap-5">
          <div className="relative aspect-[4/3] overflow-hidden bg-subtle sm:col-span-7 sm:mt-16">
            <Image
              src={rest[0].src}
              alt={rest[0].alt}
              width={rest[0].width}
              height={rest[0].height}
              sizes="(min-width: 640px) 58vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-subtle sm:col-span-5 sm:self-end">
            <Image
              src={(rest[1] ?? rest[0]).src}
              alt={(rest[1] ?? rest[0]).alt}
              width={(rest[1] ?? rest[0]).width}
              height={(rest[1] ?? rest[0]).height}
              sizes="(min-width: 640px) 42vw, 100vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ) : null}

      {/* Remaining images */}
      {rest.length > 2 ? (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {rest.slice(2).map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden bg-subtle lg:aspect-[16/10]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}