import Image from "deco-sites/std/components/Image.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Highlight {
  src: LiveImage;
  alt: string;
  href: string;
  label: string;
}

export interface Props {
  highlights?: Highlight[];
  title: string;
}

function Highlights({ highlights = [], title }: Props) {
  return (
    <section class="grid grid-cols-1 grid-rows-[48px_1fr] py-10">
      <div class="max-w-[1250px] mx-auto flex justify-start w-full">
        <h2 class="ml-4 uppercase text-[22px] uppercase font-list-bold">
          {title}
        </h2>
      </div>

      <Slider
        class="gap-6"
        snap="snap-center sm:snap-start block first:ml-6 sm:first:ml-0 last:mr-6 sm:last:mr-0"
      >
        {highlights.map(({ href, src, alt, label }) => (
          <a
            href={href}
            class="flex flex-col gap-4 items-center min-w-[190px]"
          >
            <Image
              class="rounded-full"
              src={src}
              alt={alt}
              width={225}
              height={225}
            />
            <span class="text-[.72917vw] uppercase font-heading-1">{label}</span>
          </a>
        ))}
      </Slider>
    </section>
  );
}

export default Highlights;
