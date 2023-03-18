import Text from "$store/components/ui/Text.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
  specialLink?: boolean;
  specialLinkColor?: string;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, children, image, specialLink, specialLinkColor } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <Text
          class={`group-hover:border-black border-solid  border-white pb-2 uppercase ${
            specialLink ? `text-[${specialLinkColor}]` : "text-black border-b-4"
          }`}
          variant="menu"
        >
          {label}
        </Text>
      </a>

      {children && children.length > 0 &&
        (
          <div
            class={`fixed invisible hover:visible group-hover:visible bg-default z-50 flex items-start justify-center gap-6 border-b-4 border-default border-[#db0005] w-screen mt-[${headerHeight}]`}
            style={{ top: "0px", left: "0px" }}
          >
            {image?.src && (
              <Image
                class="p-6"
                src={image.src}
                alt={image.alt}
                width={300}
                height={332}
                loading="lazy"
              />
            )}
            <ul class="flex items-start justify-center gap-6">
              {children.map((node) => (
                <li class="p-6">
                  <Text variant="menu" class="uppercase font-bold text-sm">
                    {node.label}
                  </Text>

                  <ul class="flex flex-col gap-1 mt-4">
                    {node.children?.map((leaf) => (
                      <li>
                        <a class="hover:underline uppercase" href={leaf.href}>
                          <Text variant="caption">{leaf.label}</Text>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        )}
    </li>
  );
}

export default NavItem;
