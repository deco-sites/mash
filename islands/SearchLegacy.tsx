// import Searchbar from "$store/components/search/Searchbar.tsx";
// import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import useAutoComplete from "$store/sdk/useAutoComplete.ts";
import { Suspense, useEffect, useRef } from "preact/compat";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";
import Loading from "$store/components/ui/Loading.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import type { Product } from "deco-sites/std/commerce/types.ts";
import ProductCard from "$store/components/product/ProductCard.tsx";

import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import SearchIcon from "$store/components/icons/SearchIcon.tsx";

export interface Props {
  placeholder?: string;
  query?: string;
  name: string;
  configVTEX?: ClientConfigVTEX;
  action: string;
  products: Product[] | null | undefined;
  variant: "desktop" | "mobile";
}

function SearchLegacy(
  { placeholder, query, name, configVTEX, action, products, variant }: Props,
) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { setSearch, suggestions } = useAutoComplete({
    configVTEX,
  });

  //TODO: Remove this later on

  useEffect(() => {
  }, [suggestions.value?.products]);

  useEffect(() => {
    if (!searchInputRef.current) {
      return;
    }

    searchInputRef.current.focus();
  }, []);

  const SearchResults = () => {
    const firstResults = suggestions.value?.products?.slice(0, 2);
    return (
      <Suspense fallback={<Loading />}>
        <div class="flex flex-col">
          {firstResults?.map((product: Product) => (
            <section class="w-full">
              <ProductCard product={product} search={true} />
            </section>
          ))}

          <section class="flex justify-center">
            <a href={`${action}?q=${searchInputRef?.current?.value}`}>Ver tudo</a>
          </section>
        </div>
      </Suspense>
    );
  };

  const emptySuggestions = suggestions.value?.products?.length === 0 ||
    suggestions.value?.products === undefined ||
    searchInputRef.current?.value === "";
  const _products = suggestions.value?.products &&
    suggestions.value?.products?.length !== 0 &&
    suggestions.value.products;

  return (
    <div class="flex flex-col p-4 md:(py-6 w-2/3) ">
      <div class="flex gap-4">
        <form
          id="searchbar"
          action={action}
          class="flex-grow flex gap-3 px-3 py-2 bg-mash-grey"
        >
          <div class="w-full flex items-center flex-col md:flex-row justify-center md:justify-start">
            <input
              ref={searchInputRef}
              id="search-input"
              class="flex-grow outline-none  bg-mash-grey w-full"
              name={name}
              defaultValue={query}
              placeholder={placeholder}
              role="combobox"
              aria-controls="search-suggestion"
              autocomplete="off"
              onInput={(e) => {
                const value = e.currentTarget.value;
                setSearch(value);
              }}
            />
          </div>
          <Button
            variant="icon"
            aria-label="Search"
            htmlFor="searchbar"
            tabIndex={-1}
          >
            <SearchIcon />
          </Button>
        </form>
      </div>
      <div
        class={`flex flex-col gap-6 divide-y divide-default empty:mt-0 md:(flex-row divide-y-0) relative`}
      >
        <div
          class={`py-4 md:(py-6!) flex flex-col gap-4 w-full bg-white absolute top-8 transform z-[99]  ${
            emptySuggestions
              ? "-translate-y-6 invisible"
              : "translate-y-0 visible"
          }  transition-all duration-500 ease-in-out`}
        >
          <SearchResults />
        </div>
      </div>
    </div>
  );
}

export default SearchLegacy;
