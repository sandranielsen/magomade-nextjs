import Hero from "/components/Hero";
import ProductList from "/components/ProductList";
import { shopifyClient, parseShopifyResponse } from "../lib/shopify";



export default function Home({products}) {
  return (
    <>
      <Hero />
      <div>
        <h2 className="flex text-4xl justify-center mb-8">Patterns</h2>
        <ProductList products={products} />
      </div>
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