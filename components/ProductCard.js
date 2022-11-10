
import * as React from "react";

const ProductCard = ({ product, goToProductPage }) => {
  const { id, title, images, variants, handle, vendor } = product;
  const { src: productImage } = images[0];
  const { price } = variants[0];
  return (
    <div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => goToProductPage(handle)}
        className="w-80 snap-center"
      >
        <img src={productImage} srcSet={productImage} alt={title} />

        <div className="grid grid-cols-2 mt-4 leading-8">
          <h1>{title}</h1>
          <div className="text-right">
            <p>{price.amount}0 DKK</p>
            <p>{vendor}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard

