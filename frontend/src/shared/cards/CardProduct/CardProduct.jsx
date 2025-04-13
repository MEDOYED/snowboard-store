import React from "react";
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import classNames from "classnames";

import "./CardProduct.scss";

const MotionStarOutline = motion(IoStarOutline);
const MotionStarFilled = motion(IoStarSharp);

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

const CardProduct = ({
  linkSlug,
  brand,
  title,
  img,
  alt,
  isFavorite,
  toggleFavorite,
  discount,
  price,
  currency,
  discountedPrice,
}) => {
  return (
    <article className="card-product">
      <Link to={`/product/${linkSlug}`}>
        <figure className="card-product__product-photo product-photo">
          <img src={img} alt={alt} className="product-photo__img" />

          {discount && (
            <figcaption className="product-photo__discount">
              {discount}
            </figcaption>
          )}
        </figure>
      </Link>

      <button
        className={classNames("card-product_favorite-btn favorite-btn", {
          "favorite-btn--is-favorite": isFavorite,
        })}
        aria-label="Toggle favorite"
        onClick={toggleFavorite}
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
        <Link className="describtion__link" to={`/product/${linkSlug}`}>
          <h3 className="describtion__brand-name">{brand}</h3>
          <p className="describtion__title">{title}</p>
        </Link>

        <p className="describtion__price">
          <strong
            className={discount ? "describtion__price--original" : undefined}
          >
            {price}
            {currency}
          </strong>

          {discount && (
            <strong className="describtion__price--discounted">
              {discountedPrice}
              {currency}
            </strong>
          )}
        </p>
      </div>
    </article>
  );
};

export default CardProduct;
