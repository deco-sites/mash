import Button from "$store/components/ui/Button.tsx";
import { useAddToCart } from "$store/sdk/useAddToCart.ts";

interface Props {
  skuId: string;
  sellerId: string;
  variant?: "icon" | "primary" | "secondary" | "tertiary" | "quantity" | "coupon" | "purchase" | "productCard";
}

function AddToCartButton({ skuId, sellerId, variant }: Props) {
  const props = useAddToCart({
    skuId,
    sellerId,
  });

  const variants = variant ?? "primary";

  return (
    <Button {...props} class="w-full" variant={variants}>
      Adicionar à Sacola
    </Button>
  );
}

export default AddToCartButton;
