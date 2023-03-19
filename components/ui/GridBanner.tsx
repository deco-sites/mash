import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Button from "$store/components/ui/Button.tsx";

export interface GridBannerProps {
  images?: GridBanners[];
}

export interface GridBanners {
  /** @description desktop otimized image */
  desktop: LiveImage;
  /** @description mobile otimized image */
  mobile: LiveImage;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
  };
}

function GridBanner(
  { images, lcp }: { images?: GridBanners[]; lcp?: boolean },
) {
  return (
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ">
      {images?.map((image) => (
        <a href={image.action?.href} class="w-[92%] lg:w-full mx-auto">
          <Picture class="w-[92%] lg:w-full" preload={lcp}>
            <Source
              media="(max-width: 767px)"
              fetchPriority={lcp ? "high" : "auto"}
              src={image.mobile}
              width={345}
              height={345}
            />
            <Source
              media="(min-width: 768px)"
              fetchPriority={lcp ? "high" : "auto"}
              src={image.desktop}
              width={947}
              height={447}
            />
            <img
              class="object-cover w-full"
              loading={lcp ? "eager" : "lazy"}
              src={image.desktop}
              alt={image.alt}
            />
          </Picture>
        </a>
      ))}
    </div>
  );
}

export default GridBanner;
