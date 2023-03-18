import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import Button from "$store/components/ui/Button.tsx";
import Text from "$store/components/ui/Text.tsx";

function Coupon() {
  const { cart, loading, addCouponsToCart } = useCart();
  const ref = useRef<HTMLInputElement>(null);
  const displayInput = useSignal(true);
  const coupon = cart.value?.marketingData?.coupon;

  const toggleInput = () => {
    displayInput.value = !displayInput.value;
  };

  const applyCouponToCart = (e: MouseEvent) => {
    e.preventDefault();

    const text = ref.current?.value;

    if (typeof text === "string") {
      addCouponsToCart({ text });
    }
  };

  return (
    <div class="flex justify-between items-center px-4">
      {displayInput.value && (
        <form class="flex gap-2 w-full border-1">
          <input
            id="coupon"
            name="coupon"
            ref={ref}
            class="w-full p-2 text-caption font-caption focus:outline-none"
            type="text"
            value={coupon ?? ""}
            placeholder={"Insira seu melhor cupom de desconto"}
          />
          <Button
            type="submit"
            htmlFor="coupon"
            variant="coupon"
            loading={loading.value}
            onClick={applyCouponToCart}
          >
            Aplicar
          </Button>
        </form>
      )}
    </div>
  );
}

export default Coupon;
