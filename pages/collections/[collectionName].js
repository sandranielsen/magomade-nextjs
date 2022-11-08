import * as React from "react";
import { useRouter } from "next/router";

import ProductList from "../../components/ProductList";
import PRODUCTS from "../../data.js";

export default function CollectionPage() {
  const router = useRouter();
  const { collectionName } = router.query;
  const products = PRODUCTS.filter(
    (product) => product.collection === collectionName
  );
  return (
      <div>
        <ProductList products={products} />
    </div>
  );
}
