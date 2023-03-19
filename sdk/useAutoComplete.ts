import { ReadonlySignal, signal } from "@preact/signals";
import { debounce } from "std/async/debounce.ts";
import type { LegacyProduct } from "deco-sites/std/commerce/vtex/types.ts";
import { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";
import { Suggestion } from "deco-sites/std/commerce/types.ts";
import { createClient } from "deco-sites/std/commerce/vtex/client.ts";
import { toProduct } from "deco-sites/std/commerce/vtex/transform.ts";

async function vtexSearchSuggestion(
  client: ReturnType<typeof createClient>,
  query: string,
) {
  try {
    const data: LegacyProduct[] = await client.catalog_system.products({
      term: query,
    });

    if (!data) return;

    const url = new URL(window.location.href);
    return {
      products: data.map((p) =>
        toProduct(p, p.items[0], 0, { url, priceCurrency: client.currency() })
      ),
    };
  } catch (_) {
    console.error("Something went wrong with the suggestion \n", _);
    return;
  }
}

interface UseVTEXAutocompleteProps {
  configVTEX?: ClientConfigVTEX;
}

interface AutocompleteHook {
  setSearch: (search: string) => void;
  suggestions: ReadonlySignal<Suggestion | undefined>;
}

let vtexClient: ReturnType<typeof createClient>;
const suggestions = signal<Suggestion | undefined>(undefined);
const setSuggestions = (_suggestions: Suggestion | undefined) => {
  suggestions.value = _suggestions;
};

const setSearch = debounce(async (search: string) => {
  if (!vtexClient) return;

  if (search === "") {
    setSuggestions(undefined);
    return;
  }

  const _suggestion = await vtexSearchSuggestion(
    vtexClient,
    search,
  );

  console.log(_suggestion, "_");
  console.log(suggestions, "suggestions");

  setSuggestions(_suggestion);
}, 0);

/**
 * This hook only works if the vtex intelligent search app is installed at VTEX Account.
 */
export default function useAutocomplete(
  { configVTEX }: UseVTEXAutocompleteProps,
): AutocompleteHook {
  if (configVTEX && !vtexClient) {
    // TODO: create a singleton
    vtexClient = createClient({
      ...configVTEX,
      baseUrl: "https://vtex-search-proxy.global.ssl.fastly.net/v2/mash/",
    });
  }

  return {
    setSearch,
    suggestions,
  };
}
