import React from "react";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import classNames from "classnames";

import Product from "@sharedTypes/product";

import "./CardProduct.scss";

const MotionStarOutline = motion.create(IoStarOutline);
const MotionStarFilled = motion.create(IoStarSharp);

const iconVariants = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0 },
};

const setUpIconAnimations = {
  variants: iconVariants,
  initial: "initial",
  animate: "animate",
  exit: "exit",
};

// TEMP
const isFavorite = false;
const currency = "$";

const CardProduct: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <article className="card-product">
      <Link to={`/product/${product.slug}`}>
        <figure className="card-product__product-photo product-photo">
          <img
            src={product.image_url}
            alt={product.image_alt ? product.image_alt : undefined}
            className="product-photo__img"
          />

          {product.discount && (
            <figcaption className="product-photo__discount">
              {product.discount}
            </figcaption>
          )}
        </figure>
      </Link>

      <button
        className={classNames("card-product_favorite-btn favorite-btn", {
          "favorite-btn--is-favorite": isFavorite,
        })}
        aria-label="Toggle favorite"
        // onClick={toggleFavorite}
      >
        <AnimatePresence>
          {isFavorite ? (
            <MotionStarFilled
              className="favorite-btn__icon"
              key="star-filled"
              {...setUpIconAnimations}
            />
          ) : (
            <MotionStarOutline
              className="favorite-btn__icon"
              key="star-outline"
              {...setUpIconAnimations}
            />
          )}
        </AnimatePresence>
      </button>

      <div className="card-product__describtion describtion">
        <Link className="describtion__link" to={`/product/${product.slug}`}>
          <h3 className="describtion__brand-name">{product.brand_name}</h3>
          <p className="describtion__title">{product.name}</p>
        </Link>

        <p className="describtion__price">
          <strong
            className={
              product.discount ? "describtion__price--original" : undefined
            }
          >
            {product.price}
            {currency}
          </strong>

          {product.discount && (
            <strong className="describtion__price--discounted">
              {product.discounted_price}
              {currency}
            </strong>
          )}
        </p>
      </div>
    </article>
  );
};

export default CardProduct;
