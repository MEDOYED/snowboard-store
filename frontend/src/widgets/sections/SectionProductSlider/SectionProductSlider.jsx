import { useState, useEffect } from "react";

import CardProduct from "../../../shared/cards/CardProduct/CardProduct";

import "./SectionProductSlider.scss";

const SectionProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/PRODUCTS.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="section-product-slider">
      <h2 className="section-product-slider__heading">New Products</h2>
      <div className="section-product-slider__cards">
        {products.map((element) => (
          <CardProduct
            brand={element.brand}
            title={element.title}
            key={element.id}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionProductSlider;
