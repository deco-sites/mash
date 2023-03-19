import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useUI } from "$store/sdk/useUI.ts";
import { useCart } from "deco-sites/std/commerce/vtex/hooks/useCart.ts";
import SearchIcon from '$store/components/icons/SearchIcon.tsx';
import CartIcon from "$store/components/icons/CartIcon.tsx";
import UserIcon from "$store/components/icons/UserIcon.tsx";

function SearchButton() {
  const { displaySearchbar } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="search icon button"
      onClick={() => {
        displaySearchbar.value = !displaySearchbar.peek();
      }}
    >
      <SearchIcon />
    </Button>
  );
}

function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon id="Bars3" width={40} height={40} strokeWidth={0.1} />
    </Button>
  );
}

function CartButton() {
  const { displayCart } = useUI();
  const { loading, cart } = useCart();
  const totalItems = cart.value?.items.length || null;

  return (
    <Button
      variant="icon"
      class="relative"
      aria-label="open cart"
      disabled={loading.value}
      onClick={() => {
        displayCart.value = true;
      }}
    >
      <CartIcon />
      {totalItems && (
        <span class="absolute text-[9px] right-0 top-0 rounded-full bg-badge text-white w-4 h-4 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );
}


function LoginButton() {
  const { displayLogin } = useUI();

  return (
    <Button
      variant="icon"
      aria-label="open login"
      onClick={() => {
        displayLogin.value = true;
      }}
    >
      <UserIcon />
    </Button>
  );
}


function HeaderButton({ variant }: { variant: "cart" | "search" | "menu" | "login"}) {
  if (variant === "cart") {
    return <CartButton />;
  }

  if (variant === "search") {
    return <SearchButton />;
  }

  if (variant === "menu") {
    return <MenuButton />;
  }

  if (variant === "login") {
    return <LoginButton />;
  }

  return null;
}

export default HeaderButton;
