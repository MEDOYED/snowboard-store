import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import classNames from "classnames";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import CardProduct from "../../../shared/cards/CardProduct/CardProduct";
import ButtonShowMore from "../../../shared/UI/buttons/ButtonShowMore/ButtonShowMore";

import "./SectionProductSlider.scss";

const SectionProductSlider = () => {
  const [products, setProducts] = useState([]);
  const [cardWidth, setCardWidth] = useState(0);
  const [canScrollDirection, setCanScrollDirection] = useState({
    left: false,
    right: true,
  });
  const cardsRef = useRef(null);

  const btnVarants = {
    enabled: { opacity: 1, scale: 1 },
    disabled: { opacity: 0.4, scale: 0.9 },
  };

  useEffect(() => {
    if (!products.length) return;

    const cardsContainer = cardsRef.current;
    const card = cardsContainer.querySelector(".card-product");
    setCardWidth(card.offsetWidth);
  }, [products]);

  useEffect(() => {
    fetch("/data/NEW_PRODUCTS.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const container = cardsRef.current;

    const updateScrollButtons = () => {
      const { scrollLeft, clientWidth, scrollWidth } = container;

      setCanScrollDirection({
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth,
      });
    };

    updateScrollButtons();

    container.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      container.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [cardWidth, products]);

  const handlePrev = () => {
    cardsRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const handleNext = () => {
    cardsRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section className="section-product-slider">
      <h2 className="section-product-slider__heading">New Products</h2>
      <div className="section-product-slider__slider-wrapper">
        <motion.ul
          className="section-product-slider__cards"
          ref={cardsRef}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {products.map((product) => (
            <li key={product.slug}>
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
              />
            </li>
          ))}
        </motion.ul>

        <motion.button
          onClick={handlePrev}
          className={classNames(
            "section-product-slider__button",
            "section-product-slider__button--left",
          )}
          aria-label="Previous card button"
          disabled={!canScrollDirection.left}
          variants={btnVarants}
          animate={canScrollDirection.left ? "enabled" : "disabled"}
          whileHover={
            canScrollDirection.left
              ? { scale: 1.2, transition: { duration: 0.2 } }
              : {}
          }
        >
          <IoChevronBack />
        </motion.button>
        <motion.button
          onClick={handleNext}
          className={classNames(
            "section-product-slider__button",
            "section-product-slider__button--right",
          )}
          aria-label="Next card button"
          disabled={!canScrollDirection.right}
          variants={btnVarants}
          animate={canScrollDirection.right ? "enabled" : "disabled"}
          whileHover={
            canScrollDirection.right
              ? { scale: 1.2, transition: { duration: 0.2 } }
              : {}
          }
          //transition={{ type: "spring", duration: 0.3 }}
        >
          <IoChevronForward />
        </motion.button>
      </div>

      <div className="section-product-slider__show-more-btn">
        <ButtonShowMore>Show more</ButtonShowMore>
      </div>
    </section>
  );
};

export default SectionProductSlider;
