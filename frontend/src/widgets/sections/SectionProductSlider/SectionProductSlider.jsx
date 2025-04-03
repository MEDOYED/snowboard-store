import { useState, useEffect } from "react";

import "./SectionProductSlider.scss";
import CardProduct from "../../../shared/cards/CardProduct/CardProduct";

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
      {products.map((element) => (
        <CardProduct
          brand={element.brand}
          title={element.title}
          key={element.id}
        />
      ))}
    </section>
  );
};

export default SectionProductSlider;
