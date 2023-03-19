import { useMemo } from "preact/hooks";
import Text from "$store/components/ui/Text.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import type { JSX } from "preact";

const SORT_QUERY_PARAM = "sort";

// TODO: The search query should also be from a commerce schema
const options = [
  { value: "", label: "Ordenar" },
  { value: "price:desc", label: "Preço: do menor para o maior" },
  { value: "price:asc", label: "Preço: do maior para o menor" },
  { value: "name:asc", label: "Nome do produto: a-z" },
  { value: "name:desc", label: "Nome do produto: z-a" },
  { value: "release:desc", label: "Data de lançamento" },
  { value: "discount:desc", label: "Melhor Desconto" },
];

const useSort = () =>
  useMemo(() => {
    const urlSearchParams = new URLSearchParams(window.location?.search);
    return urlSearchParams.get(SORT_QUERY_PARAM) ?? "";
  }, []);

// TODO: Replace with "search utils"
const applySort = (value: string) => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  urlSearchParams.set(SORT_QUERY_PARAM, value);
  window.location.search = urlSearchParams.toString();
};

function Sort() {
  const sort = useSort();

  return (
    <section
      id="sort"
      name="sort"
      class="group h-[40px] m-2 text-button font-button cursor-pointer outline-none w-[200px]"
    >
      <section
        id="MenuOrdenar"
        class="h-full flex justify-center items-center group-hover:(bg-black text-white) transition"
      >
        <Icon id="MenuOrdenar" width={20} height={16} strokeWidth={0.1} />
        <span>Ordenar</span>
      </section>
      <section class="invisible group-hover:visible absolute z-10 bg-white w-[200px] py-[15px] px-[10px]">
        {options.map(({ value, label }) => (
          <section
            class="my-2"
            key={value}
            onClick={() => {
              applySort(value);
            }}
          >
            <span class="py-2 text(xs black) font-body">{label}</span>
          </section>
        ))}
      </section>
    </section>
  );
}

export default Sort;
