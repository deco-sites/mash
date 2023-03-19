import Container from "$store/components/ui/Container.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Filters from "$store/components/search/Filters.tsx";
import Sort from "$store/components/search/Sort.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import { useSignal } from "@preact/signals";
import type { ProductListingPage } from "deco-sites/std/commerce/types.ts";
import type { LoaderReturnType } from "$live/types.ts";

export interface Props {
  page: LoaderReturnType<ProductListingPage | null>;
}

function NotFound() {
  return <div />;
}

function Controls({ page }: { page: ProductListingPage }) {
  const open = useSignal(false);
  const filters = page?.filters;
  const breadcrumb = page?.breadcrumb;
  const itemsList = window?.location?.pathname;
  const pageTitle = itemsList?.replaceAll("/", " ");

  return (
    <section class="w-full md:h-[112px] md:border-y-1">
        <section class="max-w-[1280px] h-full mx-auto flex flex-col justify-between mb-4 md:mb-0 p-4 md:p-0 sm:gap-4 sm:flex-row">
        <section class="w-full">
          <div class="flex flex-row items-center sm:p-0">
            <Breadcrumb itemListElement={breadcrumb?.itemListElement} itemList={itemsList} />
          </div>
          <span class="block md:hidden  uppercase text([18px] black) mt-[15px] mr-[5px] font-semibold">{pageTitle}</span>
          <div class="flex flex-row sm:gap-4 items-center justify-between border-b-1 border-default md:border-none">
            <section class="block lg:hidden">
              <Button
                variant="tertiary"
                onClick={() => {
                  open.value = true;
                }}
              >
                <Icon id="FilterList" width={16} height={16} />
                Filtrar
              </Button>
            </section>
            <section class="hidden lg:flex w-[fit-content] items-center">
              <span class="uppercase text([18px] black) mr-[5px] font-semibold">{pageTitle}</span>
              <Filters filters={filters} />
            </section>
            <Sort />
          </div>
          <Modal
            title="Filtrar"
            mode="sidebar-right"
            open={open.value}
            onClose={() => {
              open.value = false;
            }}
          >
            <Filters filters={filters} />
          </Modal>
        </section>
      </section>
    </section>
  );
}

function SearchControls({ page }: Props) {
  if (!page || !page.filters || page.filters.length === 0) {
    return <NotFound />;
  }

  return <Controls page={page} />;
}

export default SearchControls;
