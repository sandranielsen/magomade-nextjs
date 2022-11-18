import * as React from "react";
import { useRouter } from "next/router";
import ProductCard from "./ProductCard";


export default function ProductSlider({ products }) {
  
  const router = useRouter();
 
  const goToProductPage = (productHandle) =>
    router.push(`/products/${productHandle}`);


  return (
    <div id="side-padding " className="mb-12">
      <div>
        {products && products.length > 0 ? (
          <div className="flex flex-row gap-6 overflow-x-scroll snap-mandatory snap-x">
            {products.map((product) => (
              <ProductCard
                key={product.handle}
                product={product}
                goToProductPage={goToProductPage}
              />
            ))}
          </div>
        ) : (
          <p>There are no products in this collection</p>
        )}
      </div>
    </div>
  );
}

