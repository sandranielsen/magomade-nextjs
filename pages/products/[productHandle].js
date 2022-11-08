import * as React from "react";
import { useRouter } from "next/router";
import Image from "next/image";


import ProductList from "../../components/ProductList";
import PRODUCTS from "../../data.js";

export default function ProductPage() {
  const router = useRouter();
  // Get productHandle from url: /products/[productHandle]
  const { productHandle } = router.query;
  // Get product data
  const product = PRODUCTS.find(
    (product) => product.handle === parseInt(productHandle)
  );
  const { name, image, price } = product || {};

  return (
    <div>
 
      {product && (
        <div>
          
          <div>
              <Image
                src={image}
                alt={`Picture of ${name}`}
                width={500}
                height={500}
              />
            </div>
                  <div>
                      <h2>{name}</h2>
                    </div>
                
              <div>
                <p>{price}</p>
              </div>
              
              <div>
                <button>Add to cart</button>
              </div>
            </div>
      )}
    </div>
  );
}
