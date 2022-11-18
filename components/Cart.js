import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Image from "next/image"; 

export default function Cart() {
    const { isCartOpen, checkout, closeCart } = useContext(ShopContext);
    return (
      <div className={isCartOpen ? "cart active" : "cart"}>
        <div
          onClick={() => closeCart()}
          className="absolute w-full h-screen top-0 left-0 bg-black/[.4] z-0"
        ></div>
        <div className="relative w-3/4 bg-white z-1 flex flex-col justify-between py-12 px-8 overflow-x-scroll snap-mandatory snap-x md:w-1/4">
          <div className="flex flex-col gap-4">
            {checkout.lineItems &&
              checkout.lineItems.map((item) => (
                <div key={item.id} className="flex flex-row gap-4">
                  <Image
                    width={300}
                    height={300}
                    src={item.variant.image.src}
                    alt={item.title}
                    className="h-32 w-fit"
                  />

                  <div className="flex flex-col">
                    <h4 className="title">{item.title}</h4>
                    <p className="quantity">{item.quantity}</p>
                    {/* <div className="flex items-center justify-between">
                              <div className="price">{item.variant.price}</div>
                    </div> */}
                  </div>
                </div>
              ))}
          </div>
          <a
            id="secondary-button"
            className="flex w-full items-center justify-center rounded-full border border-transparent mt-12 px-8 py-3 text-base font-medium"
            href={checkout.webUrl}
          >
            Checkout
          </a>
        </div>
      </div>
    );
}