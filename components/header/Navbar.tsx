import HeaderButton from "$store/islands/HeaderButton.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Button from "$store/components/ui/Button.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import type { INavItem } from "./NavItem.tsx";
import type { Props as SearchbarProps } from "$store/components/search/Searchbar.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import HeaderSearchMenu from "$store/islands/HeaderSearchMenu.tsx";
import UserIcon from "$store/components/icons/UserIcon.tsx";
import Searchbar, {
  EditableProps,
} from "$store/components/search/Searchbar.tsx";

function Navbar({ items, searchbar, logo }: {
  items: INavItem[];
  searchbar: EditableProps;
  logo: LiveImage;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        class={`md:hidden flex flex-row justify-between items-center h-[${navbarHeight}] w-full px-2 gap-2 `}
      >
        <HeaderButton variant="menu" />

        <a
          href="/"
          class={`flex-grow inline-flex items-center min-h-[${navbarHeight}]`}
          aria-label="Store logo"
        >
          <Image
            src={logo}
            sizes="(max-width: 640px) 100vw, 50vw"
            width={100}
            height={31}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            alt="Logo da Mash"
          />
        </a>

        <div class="flex gap-3">
          <HeaderButton variant="search" />
          <Button
            as="a"
            variant="icon"
            href="/login"
            aria-label="Log in"
          >
            <UserIcon />
          </Button>
          <HeaderButton variant="cart" />
        </div>
      </div>

      {/* Desktop Version */}
      <section class="hidden md:block max-w-[1205px] mx-auto">
        <div class="hidden md:flex flex-row justify-between items-center w-full pl-2 pr-3">
          <div class="flex-none w-1/3">
            <a
              href="/"
              aria-label="Mash Logo"
              class="block px-4 py-3 w-[160px]"
            >
              <Image
                src={logo}
                sizes="(max-width: 640px) 100vw, 50vw"
                width={100}
                height={31}
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </a>
          </div>
          <div class="flex-none w-2/3 flex items-center justify-end gap-2">
            <Searchbar {...searchbar} variant="desktop" />
            <Button
              as="a"
              variant="icon"
              href="/login"
              aria-label="Log in"
            >
              <UserIcon />
            </Button>
            <HeaderButton variant="cart" />
          </div>
        </div>
        {
          <div class="flex-auto flex justify-between mx-2">
            {items.map((item) => <NavItem item={item} />)}
          </div>
        }
      </section>
    </>
  );
}

export default Navbar;
