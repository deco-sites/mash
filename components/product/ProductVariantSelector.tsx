import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";
import Image from "deco-sites/std/components/Image.tsx";
interface Props {
  product: Product;
}

interface ColorSku {
  url: string;
  value: string;
  img: string | undefined;
}

interface SizeSku {
  url: string;
  value: string;
}

function VariantSelector({ product }: Props) {
  const possibilities = useVariantPossibilities(product);
  const { url: currentUrl } = product;

  const colorSkus: ColorSku[] = [];
  const sizesSkus: SizeSku[] = [];

  Object.keys(possibilities).filter((name) => {
    if (name === "Cor") {
      return Object.entries(possibilities[name]).map(([url, value]) => {
        const uniqueColor = colorSkus.find((color) => color.value === value);
        if (!uniqueColor) {
          const sku = url.split("/").slice(-1)[0].split("=").slice(-1)[0];
          const skuProduct = product.isVariantOf?.hasVariant.find((item) =>
            item.sku === sku
          ) ?? product;
          if (skuProduct.image != undefined) {
            const img = skuProduct.image[0].url;
            return colorSkus.push({ url, value, img });
          }
        }
      });
    }
    

    if (name === "Tamanho") {
      return Object.entries(possibilities[name]).map(([url, value]) => {
        const uniqueSize = sizesSkus.find((size) => size.value === value);
        if (!uniqueSize) {
          const sku = url.split("/").slice(-1)[0].split("=").slice(-1)[0];
          const skuProduct = product.isVariantOf?.hasVariant.find((item) =>
            item.sku === sku
          ) ?? product;
          
          return sizesSkus.push({ url, value });
        }
      });
    }

    return null;
  });


  return (
    <ul class="flex flex-col gap-4">
      <span class="font-bold uppercase">Escolha o Tamanho</span>
      {colorSkus && (
        <div class="flex flex-col gap-2">
          {colorSkus.map((color) => {
            return (
              <div class="flex">
                <Image
                  src={color.img as string}
                  class="w-[50px] h-[50px]"
                  sizes="(max-width: 640px) 50vw, 20vw"
                  width={1000}
                  height={1000}
                  loading="lazy"
                  decoding="sync"
                  fetchPriority="low"
                  alt={color.value}
                />
                <div class="flex flex-col">
                  <span class="lowercase">{color.value}</span>
                  
                  <select class="focus:outline-none w-[170px] px-[7px] bg-[#f7f7f7]" onChange={(e) => window.location.href = (e.target as HTMLInputElement).value}>
                    {sizesSkus.map((size) => {
                      return (
                        <option class="bg-[#f7f7f7] py-2" value={size.url}>
                          {size.value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </ul>
  );
}

export default VariantSelector;

// {Object.keys(possibilities).filter(name => {
//   return (
//   <li class="flex flex-col gap-2">
//     <ul class="flex flex-row gap-2">
//       {Object.entries(possibilities[name]).map(([url, value]) => {

//         return (
//           <li>
//             <a href={url}>
//               <Avatar
//                 // deno-lint-ignore no-explicit-any
//                 content={value as any}
//                 disabled={url === currentUrl}
//                 variant={name === "Cor" || "Cores" ? "color" : "abbreviation"}
//               />
//             </a>
//           </li>
//         )
//       })}
//     </ul>
//   </li>
//   )
// })}
