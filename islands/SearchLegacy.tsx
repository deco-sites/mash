// import Searchbar from "$store/components/search/Searchbar.tsx";
// import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import useAutoComplete from "$store/sdk/useAutoComplete.ts";
import { useEffect, useRef } from "preact/compat";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";

export interface Props {
  placeholder?: string;
  query?: string;
  name: string;
  configVTEX?: ClientConfigVTEX;
}

function SearchLegacy({placeholder, query, name, configVTEX}: Props) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { setSearch, suggestions } = useAutoComplete({
    configVTEX,
  });

  useEffect(() => {
    console.log("Searching...");
  }, [searchInputRef.current])

  
  return (
    <div class="w-full flex items-center">
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
  );
}

export default SearchLegacy;
