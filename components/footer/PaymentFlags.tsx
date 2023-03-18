import type { Image } from "deco-sites/std/components/types.ts";
import Text from "../ui/Text.tsx";

export interface Props {
    title?: string;
    flags: Flag[];
}

export interface Flag {
    image: Image;
    alt: string;
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
                    <img class="h-[fit-content]" src={flag.image} alt={flag.alt} />
                )
            })}
            </section>
        </section>
    )
}

export default PaymentFlags