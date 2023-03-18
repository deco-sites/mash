import Image from "deco-sites/std/components/Image.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Button from "$store/components/ui/Button.tsx";
import QuantitySelector from "$store/components/ui/QuantitySelector.tsx";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import { formatPrice } from "$store/sdk/format.ts";

interface Props {
  index: number;
}

function CartItem({ index }: Props) {
  const { loading, cart, updateItems } = useCart();
  const item = cart.value!.items[index];
  const locale = cart.value?.clientPreferencesData.locale;
  const currencyCode = cart.value?.storePreferencesData.currencyCode;
  const {
    imageUrl,
    skuName,
    sellingPrice,
    listPrice,
    name,
    quantity,
  } = item;

  const isGift = sellingPrice < 0.01;

  return (
    <div class="flex flex-row justify-between items-start gap-4">
      <Image
        src={imageUrl}
        alt={skuName}
        width={216}
        height={150}
        class="w-20 h-20"
      />
      <div class="flex-grow">
        <span class="text-sm font-normal">
          {name}
        </span>
        <div class="flex items-center">
          <div class="mt-2 max-w-min">
            <QuantitySelector
              disabled={loading.value || isGift}
              quantity={quantity}
              onChange={(quantity) =>
                updateItems({ orderItems: [{ index, quantity }] })}
            />
          </div>
          <div class="flex items-center gap-2 ml-3">
            <span class="text-sm font-light text-black">X</span>
            <Text tone="price" variant="important">
              {isGift
                ? "Grátis"
                : formatPrice(sellingPrice / 100, currencyCode!, locale)}
            </Text>
          </div>
        </div>
      </div>
      <Button
        onClick={() => updateItems({ orderItems: [{ index, quantity: 0 }] })}
        disabled={loading.value || isGift}
        loading={loading.value}
        variant="icon"
      >
        <Icon id="Trash" width={20} height={20} />
      </Button>
    </div>
  );
}

export default CartItem;
