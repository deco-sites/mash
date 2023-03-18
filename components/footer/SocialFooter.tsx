import { Link } from "./Footer.tsx";

export interface Props {
    links: Link[];
}

const SocialFooter = ({links = []}: Props) => {
    return (
        <section class="flex h-[74px] gap-[30px] bg-black justify-center items-center">
            {links.map((link: Link) => {
                return (
                    <section class="h-[33px]">
                        <a href={link.href}>
                            <img class="max-h-[33px]" src={link.image.src} alt={link.image.alt} />
                        </a>
                    </section>
                )
            })}
        </section>
    )
}

export default SocialFooter