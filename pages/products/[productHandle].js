import * as React from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "../../context/shopContext";


import Image from "next/image";
import { client, parseShopifyResponse } from "../../lib/shopify";
import Layout from "../../components/Layout";

export default function ProductPage({ product }) {
  const { title, images, variants, handle, vendor, description } = product;
  const { src: productImage } = images[0];
    const { price } = variants[0];
    
    const router = useRouter();
    const { addItemTocheckout, openCart } = useContext(ShopContext);
    if (router.isFallback) {
      return <div>Loading....</div>;
    }


  return (
    <Layout navbarType={2}>
      <div id="side-padding" className="mb-8 md:mb-16">
        {product && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Image src={productImage} alt={title} width={800} height={800} />

              <div className="grid grid-cols-3 gap-2 mt-4">
                {images.map((image) => (
                  <Image src={image} />
                ))}
              </div>
            </div>

            <div>
              <h6 className="font-extralight text-base">{vendor}</h6>
              <h2 className="text-4xl py-8">{title}</h2>

              <div className="flex flex-row justify-between mb-8">
                <p>{price.variant}</p>

                <button
                  onClick={() => {
                    addItemTocheckout(product.variants[0].id, 1);
                    openCart();
                  }}
                  id="secondary-button"
                  className="flex items-center justify-center rounded-full border border-transparent px-8 py-3 text-base font-medium"
                >
                  Add to cart
                </button>
              </div>

              <p className="font-extralight text-base">{description}</p>
            </div>

            <div></div>
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
