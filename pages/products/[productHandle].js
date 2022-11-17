import * as React from "react";
import Image from "next/image";
import { client, parseShopifyResponse } from "../../lib/shopify";
import Layout from "../../components/Layout";



export default function ProductPage({ product }) {

  const { title, images, variants, handle, vendor } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];

  return (
    <Layout navbarType={2}>
      <div>
        {product && (
          <div>
            <div>
              <Image
                src={productImage}
                alt={`Picture of ${title}`}
                width={500}
                height={500}
              />
            </div>

            <div>
              <h6>{vendor}</h6>
              <h2>{title}</h2>
            </div>

            <div>
              <p>{price.variant}</p>
            </div>

            <div>
              <button>
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { productHandle } = params;
  // Fetch one product
  const product = await client.product.fetchByHandle(productHandle);

  return {
    props: {
      product: parseShopifyResponse(product),
    },
  };
};
