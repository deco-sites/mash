import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useSignal } from "@preact/signals";
import type { INavItem } from "./NavItem.tsx";

export interface Props {
  items: INavItem[];
}

function MenuItem({ item, level = 0 }: { item: INavItem; level?: number }) {
  const open = useSignal(false);
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  const title = (
    <Text
      class={`flex-grow min-h-[40px] flex items-center justify-start ${
        level > 1 ? "font-normal" : "font-bold"
      } uppercase`}
      variant={level === 0 ? "menu" : "caption"}
    >
      {item.label}
    </Text>
  );

  return (
    <li>
      <div
        class={`flex justify-between items-center w-full py-2 px-4 ${
          level > 0 ? "pl-2" : ""
        }`}
        onClick={() => {
          if (hasChildren) open.value = !open.value;
        }}
      >
        {hasChildren
          ? title
          : <a class="w-full inline-block" href={item.href}>{title}</a>}

        {hasChildren && (
          <Button variant="icon">
            <Icon
              class={open.value === true ? "hidden" : "block"}
              id="Plus"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
            <Icon
              class={open.value === true ? "block" : "hidden"}
              id="Minus"
              height={20}
              width={20}
              strokeWidth={1.5}
            />
          </Button>
        )}
      </div>

      {hasChildren && (
        <ul
          class={`flex-col ${
            open.value === true ? "flex" : "hidden"
          } bg-mash-grey px-4`}
        >
          <li>
            <a href={item.href} class="w-full py-2 pl-2 inline-block">
              <Text class="uppercase font-bold" variant="caption">
                Ver tudo
              </Text>
            </a>
          </li>
          {item.children!.map((node) => (
            <MenuItem
              item={node}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function Menu({ items }: Props) {
  return (
    <>
      <ul class="flex-grow flex flex-col divide-y divide-default">
        {items.map((item) => <MenuItem item={item} />)}
      </ul>
    </>
  );
}

export default Menu;
