import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import classNames from "classnames";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import CardProduct from "../../../shared/cards/CardProduct/CardProduct";
import ButtonShowMore from "../../../shared/UI/buttons/ButtonShowMore/ButtonShowMore";
import Product from "@sharedTypes/product";

import "./SectionProductSlider.scss";

const btnVariants = {
  enabled: { opacity: 1, scale: 1 },
  disabled: { opacity: 0.4, scale: 0.9 },
};

type CanScrollDirection = {
  left: boolean;
  right: boolean;
};

const SectionProductSlider: React.FC<{
  sectionHeading: string;
  productsJsonPath: string;
}> = ({ sectionHeading, productsJsonPath }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cardWidth, setCardWidth] = useState(0);
  const [canScrollDirection, setCanScrollDirection] =
    useState<CanScrollDirection>({
      left: false,
      right: true,
    });

  const cardsRef = useRef<HTMLUListElement>(null);

  // fetches products json
  useEffect(() => {
    if (!productsJsonPath) return;
    fetch(productsJsonPath)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to fetch products json", error));
  }, [productsJsonPath]);

  // does not worth optimizing with memo, prolly may take some refactoring
  // to not rerender all the cards on a single isFavorite toggle
  // OLD CODE
  // const toggleFavorite = (slug: string): void => {
  //   setProducts((prevProducts) => {
  //     return prevProducts.map((product) => {
  //       return product.slug === slug
  //         ? { ...product, isFavorite: !product.isFavorite }
  //         : product;
  //     });
  //   });
  // };

  // finds the width of one card
  // may need adjustments if card will change its width
  useEffect(() => {
    if (!products.length || !cardsRef.current) return;

    const cardsContainer = cardsRef.current;
    const card = cardsContainer.querySelector(".card-product") as HTMLElement;
    setCardWidth(card.offsetWidth);
  }, [products]);

  // for disabling scroll btns when there is nothing left to scroll
  useEffect(() => {
    const container = cardsRef.current!;

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
    cardsRef.current!.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  const handleNext = () => {
    cardsRef.current!.scrollBy({ left: cardWidth, behavior: "smooth" });
  };

  return (
    <section className="section-product-slider">
      <h2 className="section-product-slider__heading">{sectionHeading}</h2>
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
              <CardProduct product={product} />
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
          // TODO: FIX? disabled does not prevent focusing with vimium
          disabled={!canScrollDirection.left}
          variants={btnVariants}
          initial={canScrollDirection.left ? "enabled" : ""}
          animate={canScrollDirection.left ? "" : "disabled"}
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
          variants={btnVariants}
          initial={canScrollDirection.right ? "enabled" : ""}
          animate={canScrollDirection.right ? "" : "disabled"}
          whileHover={
            canScrollDirection.right
              ? { scale: 1.2, transition: { duration: 0.2 } }
              : {}
          }
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
