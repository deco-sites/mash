import {
  Props,
} from "$store/components/product/ProductDetails.tsx";
import ProductDetails from "$store/islands/ProductDetails.tsx"

function ProductDetailsSection(props: Props) {
  return <ProductDetails {...props} />;
}

export default ProductDetailsSection;
