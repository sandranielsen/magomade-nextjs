import * as React from "react";

import ProductList from "../../components/ProductList";
import { shopifyClient, parseShopifyResponse } from "../../lib/shopify";



export default function CollectionPage({ products, collectionName }) {
  return (
    <div className="relative">
      <h1 className="text-black">{collectionName}</h1>
      <ProductList products={products} />
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { collectionName } = params;
  // Fetch all the collections
  const collectionsData = await shopifyClient.collection.fetchAllWithProducts();
  const collections = parseShopifyResponse(collectionsData);
  // Get the right one
  const collection = collections.find(
    (collection) => collection.handle === collectionName
  );

  return {
    props: {
      collectionName,
      products: collection.products,
    },
  };
};
