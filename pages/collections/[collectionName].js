import * as React from "react";

import ProductList from "../../components/ProductList";
import Layout from "../../components/Layout";
import { client, parseShopifyResponse } from "../../lib/shopify";



export default function CollectionPage({ products, collectionName }) {
  return (
    <>
      <Layout navbarType={2}>
        <div className="page-header flex h-40 mb-16">
          <h2 className="text-white m-auto text-3xl uppercase">
            {collectionName}
          </h2>
        </div>
        <div id="side-padding">
          <ProductList products={products} />
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { collectionName } = params;
  // Fetch all the collections
  const collectionsData = await client.collection.fetchAllWithProducts();
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
