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
  return null
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
