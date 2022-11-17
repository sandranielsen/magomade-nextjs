import "tailwindcss/tailwind.css";
import "/styles/globals.css";
import ShopProvider from "../context/shopContext";
import Cart from "../components/Cart";


function MyApp({ Component, pageProps }) {
  
  return (
    <ShopProvider>
      <Cart />
      <Component {...pageProps} />
    </ShopProvider>
  );
}

export default MyApp;
