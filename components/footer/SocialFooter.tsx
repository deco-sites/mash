import { Link } from "./Footer.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
    links: Link[];
}

const SocialFooter = ({links = []}: Props) => {
    return (
        <section class="flex h-[74px] gap-[30px] bg-black justify-center items-center">
            {links.map((link: Link) => {
                return (
                    <a href={link.href}>
                        <Image
                            src={link.image.src}
                            class="h-[33px]"
                            sizes="(max-width: 640px) 50vw, 20vw"
                            width={link.image.width}
                            height={link.image.height}
                            loading="lazy"
                            decoding="async"
                            fetchPriority="high"
                            alt={link.image.alt}
                        />
                    </a>
                )
            })}
        </section>
    )
}

export default SocialFooter