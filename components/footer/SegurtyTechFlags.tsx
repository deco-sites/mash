import Image from "deco-sites/std/components/Image.tsx";
import Text from "../ui/Text.tsx";
import { Flag } from "./PaymentFlags.tsx";

export interface Props {
  title?: string;
  flags: Flag[];
}

const SegurtyTechFlags = ({ flags, title }: Props) => {
  return (
    <section class="flex md:block flex-col items-center">
      <Text variant="heading-3" tone="default-inverse" class="text-black">
        {title}
      </Text>
      <section class="flex items-center justify-center md:justify-start flex-wrap gap-6 pt-2">
        {flags.map((flag: Flag) => {
          return (
            <section class="flex items-center gap-1">
              {flag.text && <p class="text-xs">{flag.text}</p>}
              <Image
                src={flag.image}
                sizes="(max-width: 640px) 50vw, 20vw"
                class="max-w-[fit-content]"
                width={flag.width}
                height={flag.height}
                loading="lazy"
                decoding="async"
                fetchPriority="high"
                alt={flag.alt}
              />
            </section>
          );
        })}
      </section>
    </section>
  );
};

export default SegurtyTechFlags;
