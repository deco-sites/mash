import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { BreadcrumbList } from "deco-sites/std/commerce/types.ts";

interface Props {
  itemListElement?: BreadcrumbList["itemListElement"];
  itemList?: string;
}

function Item({ name, item }: { name?: string; item?: string }) {
  if (!name || !item) {
    return null;
  }

  return (
    <li class="whitespace-nowrap overflow-hidden overflow-ellipsis">
      <a href={item} class="">
        <span class="text(xs black)">
          {name}
        </span>
      </a>
    </li>
  );
}

function Breadcrumb({ itemListElement = [], itemList }: Props) {
  const items = itemList?.split("/").filter((item) => item !== "");

  return (
    <ul class="flex flex-row gap-2 items-center w-full">
      <Item name="Home" item="/" />
      {itemListElement.length > 0 ? itemListElement.map((item) => (
        <>
          <li class="mt-0.5">
            <Icon id="ChevronRight" width={16} height={16} strokeWidth={2} />
          </li>
          <Item {...item} />
        </>
      ))
      : items?.map((item) => (
        <>
          <li class="mt-0.5 text(xs black) capitalize">
            |
          </li>
          <li class="whitespace-nowrap overflow-hidden overflow-ellipsis">
            <a href={`/${item}`} class="">
              <span class="text(xs black) capitalize">
                {item}
              </span>
            </a>
          </li>
        </>
      ))
    }
    </ul>
  );
}

export default Breadcrumb;
