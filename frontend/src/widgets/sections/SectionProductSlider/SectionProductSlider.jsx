import { useState, useEffect } from "react";

import CardProduct from "../../../shared/cards/CardProduct/CardProduct";

import "./SectionProductSlider.scss";

const SectionProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/NEW_PRODUCTS.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="section-product-slider">
      <h2 className="section-product-slider__heading">New Products</h2>
      <div className="section-product-slider__cards">
        {products.map((product) => (
          <CardProduct
            linkSlug={product.slug}
            img={product.image}
            alt={product.altImage}
            isFavorite={product.isFavorite}
            discount={product.discount}
            brand={product.brand}
            title={product.title}
            price={product.price}
            currency={product.currency}
            discountedPrice={product.discountedPrice}
            key={product.slug}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionProductSlider;
