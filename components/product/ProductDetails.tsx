import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";
import { useState } from "preact/hooks";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";

import ProductSelector from "./ProductVariantSelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
    additionalProperty,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];
  const [image, setImage] = useState(front);
  console.log(product, "product")
  

  return (
    <section class=" bg-[#f7f7f7] w-full">
      <Container class="">
        <div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-10 h-[860px]">
          {/* Image Gallery */}
          <div class="flex flex-col overflow-auto snap-x snap-mandatory scroll-smooth gap-4 w-[690px]">
            <Breadcrumb
              itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
            />
            <section class="flex gap-2">
              <section class="flex flex-col gap-4">
                {[front, back ?? front].map((img, index) => (
                  <section
                    onClick={() => {
                      setImage(img);
                    }}
                    class={`${
                      image == img ? "border(1 [#cfcfcf])" : ""
                    } bg-white h-[75px] w-[75px]`}
                  >
                    <Image
                      style={{ aspectRatio: "360 / 500" }}
                      class="h-full w-full object-contain rounded-md"
                      sizes="(max-width: 640px) 100vw, 30vw"
                      src={img.url!}
                      alt={img.alternateName}
                      width={360}
                      height={500}
                      // Preload LCP image for better web vitals
                      preload={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                </section>
              ))}
            </section>
            <section class="w-[590px] h-[590px] bg-white">
              <Image
                style={{ aspectRatio: "360 / 500" }}
                class="h-full w-full object-contain rounded-md"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={image?.url!}
                alt={image?.alternateName}
                width={360}
                height={500}
                loading={"lazy"}
              />
            </section>
          </section>
          {/* Description card */}
          <div class="mt-4 sm:mt-6">
            <Text variant="caption">
              {description && (
                <details>
                  <summary class="cursor-pointer">Descrição</summary>
                  <div class="ml-2 mt-2">{description}</div>
                </details>
              )}
            </Text>
          </div>
          <div class="mt-4 sm:mt-6">
            <Text variant="caption">
              {additionalProperty && (
                <details>
                  <summary class="cursor-pointer">Caracteristicas</summary>
                  <div class="ml-2 mt-2">
                    {additionalProperty.map((prop) => {
                      return (
                        <div>
                          <span class="font-bold">{prop.name}: </span>
                          <span>{prop.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </details>
              )}
            </Text>
          </div>
        </div>
        {/* Product Info */}
        <div class="flex-auto px-4 bg-white h-full">       
          {/* Code and name */}
          <div class="mt-4 sm:mt-8">
            <h1>
              <Text variant="heading-3">{name}</Text>
            </h1>
            <div>
              estrelas
            </div>
            <div>
              <Text tone="subdued" variant="caption">
                REF: {gtin}
              </Text>
            </div>
          </div>
          {/* Prices */}
          <div class="mt-4">
            <div class="flex flex-row gap-2 items-center">
              <Text tone="price" variant="heading-3">
                {formatPrice(price, offers!.priceCurrency!)}
              </Text>
              <Text
                class="line-through"
                tone="price"
                variant="heading-3"
              >
                {formatPrice(listPrice, offers!.priceCurrency!)}
              </Text>
            </div>
            <section class="flex gap-4">
                <section class="flex">
                  <button id="provador"></button>
                  <span class="cursor-pointer">PROVADOR VIRTUAL</span>
                </section>
                <section class="flex">
                  <button id="medidor" class=""></button>
                  <span class="cursor-pointer">TABELA DE MEDIDAS</span>
                </section>
            </section>
          </div>
          {/* Sku Selector */}
          <div class="mt-4 sm:mt-6">
            <ProductSelector product={product} />
          </div>
          {/* Add to Cart and Favorites button */}
          <div class="mt-4 sm:mt-10 flex flex-col gap-2">
            {seller && (
              <AddToCartButton
                skuId={productID}
                sellerId={seller}
              />
            )}
            <Button variant="secondary">
              <Icon id="Heart" width={20} height={20} strokeWidth={2} />{" "}
              Favoritar
            </Button>
          </div>
        </div>
      </div>
    </Container>
    </section>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
