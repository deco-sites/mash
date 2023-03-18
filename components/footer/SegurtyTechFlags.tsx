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
                        {
                            flag.text && <p class="text-xs">{flag.text}</p>
                        }
                        <img class="h-[fit-content]" src={flag.image} alt={flag.alt} />
                    </section>
                    
                )
            })}
            </section>
        </section>
    )
}

export default SegurtyTechFlags