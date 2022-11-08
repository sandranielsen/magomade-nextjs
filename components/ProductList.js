import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Product = ({ product, goToProductPage }) => {
  const { id, title, images, variants, handle } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => goToProductPage(handle)}
       className="w-80"
    >
      <img
        src={productImage}
        srcSet={productImage}
        alt={title}
        loading="lazy"
      />
      <div
        title={title}
        subtitle={<span>Price: {price}</span>}
        position="below"
      />
    </div>
  );
};

export default function ProductList({ products }) {
  
  const router = useRouter();
 
  const goToProductPage = (productHandle) =>
    router.push(`/products/${productHandle}`);


  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="flex text-4xl justify-center mb-8">Patterns</h2>

      <div>
        {products && products.length > 0 ? (
          <div className="flex flex-row gap-3 overflow-x-auto snap-mandatory">
            {products.map((product) => (
              <Product
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

