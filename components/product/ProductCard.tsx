import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */

function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex justify-center items-center gap-2">
      {options.map(([url, value]) => (
        <a href={url}>
          <Avatar
            class="bg-default"
            variant="abbreviation"
            content={value}
            disabled={url === product.url}
          />
        </a>
      ))}
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
  search?: boolean;
}

function ProductCard({ product, preload, search }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller } = useOffer(offers);

  return (
    <div
      id={`product-card-${productID}`}
      class={`w-full group ${search ? "flex" : ""}`}
    >
      <a
        href={url}
        aria-label="product link"
        class={`${search ? "flex items-center" : ""}`}
      >
        <div class="relative w-full group">
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={961}
            height={961}
            class={`rounded w-full  ${
              search ? "w-[80px] h-[80px]" : "group-hover:hidden"
            }`}
            preload={preload}
            loading={preload ? "eager" : "lazy"}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          <Image
            src={front.url!}
            alt={front.alternateName}
            width={961}
            height={961}
            class={`rounded w-full hidden ${search ? "" : "group-hover:block"}`}
            sizes="(max-width: 640px) 50vw, 20vw"
          />
          {seller && !search && (
            <div class="w-full bg-gray-500 relative">
              {/* <Sizes {...product} /> */}
              <a
                href={product.url}
                class="bg-[#24b26d] text-white px-4 py-2 absolute bottom-0 left-0 right-0 mx-auto mb-4 opacity-0 transform translate-y-full transition duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 text-center"
              >
                ADICIONAR A SACOLA
              </a>
            </div>
          )}
        </div>
        <div class="flex flex-col gap-1 py-2">
          <Text
            class="overflow-hidden overflow-ellipsis whitespace-nowrap"
            variant="caption"
          >
            {name}
          </Text>
          <div class="flex items-center gap-2">
            <Text variant="caption" tone="price">
              {formatPrice(price, offers!.priceCurrency!)}
            </Text>
            <Text
              class="line-through"
              variant="list-price"
              tone="subdued"
            >
              {formatPrice(listPrice, offers!.priceCurrency!)}
            </Text>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
