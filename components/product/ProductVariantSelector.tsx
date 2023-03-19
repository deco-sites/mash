import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

interface Props {
  product: Product;
}

function VariantSelector({ product }: Props) {
  const possibilities = useVariantPossibilities(product);
  const { url: currentUrl } = product;
  console.log(possibilities,"socorro")

  return (
    <ul class="flex flex-col gap-4">
      {Object.keys(possibilities).map((name) => {
        return (
        <li class="flex flex-col gap-2">
          <Text variant="caption">{name}</Text>
          <ul class="flex flex-row gap-2">
            {Object.entries(possibilities[name]).map(([url, value]) => {
              console.log(url, value, name, "socorro22")
              return (
                <li>
                  <a href={url}>
                    <Avatar
                      // deno-lint-ignore no-explicit-any
                      content={value as any}
                      disabled={url === currentUrl}
                      variant={name === "Cor" ? "color" : "abbreviation"}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </li>
        )
      })}
    </ul>
  );
}

export default VariantSelector;
