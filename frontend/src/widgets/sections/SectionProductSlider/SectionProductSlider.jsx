import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { IoChevronBackSharp, IoChevronForward } from "react-icons/io5";

import CardProduct from "../../../shared/cards/CardProduct/CardProduct";

import "./SectionProductSlider.scss";

const SectionProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [cardWidth, setCardWidth] = useState(0);
  const cardsRef = useRef(null);

  useEffect(() => {
    //  setCardWidth(cardRef.current.offsetWidth);
    if (!products.length) return;

    const cardsContainer = cardsRef.current;
    const card = cardsContainer.querySelector(".card-product");
    console.log("HERE!!!!!!!!");
    console.log(card);
    setCardWidth(card.offsetWidth);
    console.log(cardWidth);
  }, [products]);

  useEffect(() => {
    fetch("/data/NEW_PRODUCTS.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handlePrev = () => {
    cardsRef.current.scrollBy({ left: -cardWidth, behaviour: "smooth" });
  };

  const handleNext = () => {
    cardsRef.current.scrollBy({ left: cardWidth });
  };

  return (
    <section className="section-product-slider">
      <h2 className="section-product-slider__heading">New Products</h2>
      <motion.div
        className="section-product-slider__cards"
        ref={cardsRef}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{ x: 0, opacity: 1 }}
      >
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
      </motion.div>

      <button
        onClick={handlePrev}
        className="section-product-slider__button section-product-slider__button--left"
      >
        <IoChevronBackSharp />
      </button>
      <button
        onClick={handleNext}
        className="section-product-slider__button section-product-slider__button--right"
      >
        <IoChevronForward />
      </button>
    </section>
  );
};

export default SectionProductSlider;
