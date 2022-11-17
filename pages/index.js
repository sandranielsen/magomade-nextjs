import Hero from "/components/Hero";
import ProductSlider from "/components/ProductSlider";
import { client, parseShopifyResponse } from "../lib/shopify";
import Layout from "../components/Layout";
import GuidePreview from "../components/GuidePreview";




export default function Home({products}) {
  return (
    <>
      <Layout navbarType={1}>
        <Hero />
        <div id="side-padding">
          <h2 className="flex text-4xl justify-center mt-24 mb-16">Patterns</h2>
          <ProductSlider products={products} />
        </div>
        <GuidePreview />
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  // Fetch all the products
  const products = await client.product.fetchAll();
  const infos = await client.shop.fetchInfo();
  const policies = await client.shop.fetchPolicies();


  return {
    props: {
      products: parseShopifyResponse(products),
      infos: parseShopifyResponse(infos),
      policies: parseShopifyResponse(policies),
    },
  };
};