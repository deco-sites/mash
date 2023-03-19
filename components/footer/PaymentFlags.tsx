import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
import Text from "../ui/Text.tsx";

export interface Props {
  title?: string;
  flags: Flag[];
}

export interface Flag {
  image: LiveImage;
  alt: string;
  width: number;
  height: number;
  text?: string;
}

const PaymentFlags = ({ flags, title }: Props) => {
  return (
    <section class="flex md:block flex-col items-center">
      <Text variant="heading-3" tone="default-inverse" class="text-black">
        {title}
      </Text>
      <section class="flex items-center flex-wrap gap-6 pt-2">
        {flags.map((flag: Flag) => {
          return (
            <Image
              src={flag.image}
              class=""
              sizes="(max-width: 640px) 50vw, 20vw"
              width={flag.width}
              height={flag.height}
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              alt={flag.alt}
            />
          );
        })}
      </section>
    </section>
  );
};

export default PaymentFlags;
