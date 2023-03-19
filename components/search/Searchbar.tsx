/**
 * We use a custom route at /s?q= to perform the search. This component
 * redirects the user to /s?q={term} when the user either clicks on the
 * button or submits the form. Make sure this page exists in deco.cx/admin
 * of yout site. If not, create a new page on this route and add the appropriate
 * loader.
 *
 * Note that this is the most performatic way to perform a search, since
 * no JavaScript is shipped to the browser!
 */

import type { Product, Suggestion } from "deco-sites/std/commerce/types.ts";
import type { ClientConfigVTEX } from "deco-sites/std/functions/vtexConfig.ts";
import SearchLegacy from "$store/islands/SearchLegacy.tsx";

// Editable props
export interface EditableProps {
  /**
   * @title Placeholder
   * @description Search bar default placeholder message
   * @default What are you looking for?
   */
  placeholder?: string;
  /**
   * @title Page path
   * @description When user clicks on the search button, navigate it to
   * @default /s
   */
  action?: string;
  /**
   * @title Term name
   * @description Querystring param used when navigating the user
   * @default q
   */
  name?: string;
  /**
   * TODO: Receive querystring from parameter in the server-side
   */
  query?: string;
}

export type Props = EditableProps & {
  /**
   * @title Product suggestions
   * @description Product suggestions displayed on searchs
   */
  products?: Product[] | null;
  suggestions?: Suggestion | null;

  /** used for autocomplete */
  configVTEX?: ClientConfigVTEX;

  variant?: "desktop" | "mobile";
};

function Searchbar({
  placeholder = "O que você está procurando?",
  action = "/s",
  name = "q",
  query,
  products,
  suggestions: _suggestions,
  configVTEX,
  variant = "mobile",
}: Props) {
  return (
    <SearchLegacy
      placeholder={placeholder}
      name={name}
      query={query}
      configVTEX={configVTEX}
      action={action}
      products={products}
      variant={variant}
    />
  );
}

export default Searchbar;
