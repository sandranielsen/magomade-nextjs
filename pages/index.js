import Hero from "/components/Hero";
import ProductList from "/components/ProductList";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";



export default function Home({products}) {
  return (
    <>
      <Hero />
      <ProductList products={products} />
    </>
  );
}

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await shopifyClient.product.fetchAll();

  return {
    props: {
      products: parseShopifyResponse(products),
    },
  };
};