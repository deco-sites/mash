import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import type {
  Filter,
  FilterToggle,
  ProductListingPage,
} from "deco-sites/std/commerce/types.ts";
import { useState } from "preact/hooks";

interface Props {
  filters: ProductListingPage["filters"];
}

const isToggle = (filter: Filter): filter is FilterToggle =>
  filter["@type"] === "FilterToggle";

function FilterValues({ key, values, label }: FilterToggle) {
  const flexDirection = key === "tamanho" || key === "Cores"
    ? "flex-row"
    : "flex-col";

  return (
    <section class="group">
      <section class="flex items-center md:justify-evenly justify-between px-4 md:px-0 md:w-[145px] cursor-pointer border(b-[1px] [#D9D9D9]) md:border-none">
        <span class="text(xs black) font-semibold uppercase py-6">{label}</span>
        <p class="cursor-pointer group-hover:hidden">+</p>
        <p class="cursor-pointer hidden group-hover:block">-</p>
      </section>
      <ul
        class={`md:invisible md:group-hover:visible hidden group-hover:flex md:flex border-none md:border(t-[3px] [#D9D9D9]) p-6 bg-white md:absolute z-10 flex-wrap gap-6 ${flexDirection}`}
      >
        {values.map(({ label, value, url, selected }) => {
          if (key === "Cores") {
            return (
              <a href={url}>
                <Avatar
                  // deno-lint-ignore no-explicit-any
                  content={value as any}
                  disabled={selected}
                  variant="color"
                />
              </a>
            );
          }

          if (key === "tamanho") {
            return (
              <a href={url}>
                <Avatar
                  content={label}
                  disabled={selected}
                  variant="abbreviation"
                />
              </a>
            );
          }

          return (
            <a href={url} class="flex items-center gap-2">
              <input
                id="checkbox-filter"
                type="checkbox"
                checked={selected}
                class="pointer-events-none appearance-none bg-white h-[15px] w-[15px] border(1 [#EBEBEB])"
              />
              <span class="text(xs black)">{label}</span>
            </a>
          );
        })}
      </ul>
    </section>
  );
}

export default function Filters({ filters }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <ul class="flex flex-col w-[90%] mx-auto md:flex-row items-center">
      <p class="mr-[5px] text([18px] black) w-full uppercase">Filtrar</p>
      {open && filters
        .filter(isToggle)
        .map((filter) => (
          <li class="flex flex-col w-full">
            <FilterValues {...filter} />
          </li>
        ))}
      <button
        class="text([10px]) uppercase px-2 focus:outline-none border-none"
        onClick={() => setOpen(!open)}
      >
        {open ? "fechar" : "abrir"}
      </button>
    </ul>
  );
}
