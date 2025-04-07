import { IoStarOutline, IoStarSharp } from "react-icons/io5";

import "./CardProduct.scss";
import classNames from "classnames";

const CardProduct = ({
  brand,
  title,
  img,
  alt,
  isFavorite,
  discount,
  price,
  currency,
  discountedPrice,
}) => {
  return (
    <article className="card-product">
      <figure className="card-product__product-photo product-photo">
        <img src={img} alt={alt} className="product-photo__img" />

        <button
          className={classNames("product-photo__favorite-btn favorite-btn", {
            "favorite-btn--is-favorite": isFavorite,
          })}
          aria-label="Toggle favorite"
        >
          {isFavorite ? (
            <IoStarSharp className="favorite-btn__icon" />
          ) : (
            <IoStarOutline className="favorite-btn__icon" />
          )}
        </button>

        {discount && (
          <figcaption className="product-photo__discount">
            {discount}
          </figcaption>
        )}
      </figure>

      <div className="card-product__describtion describtion">
        <h3 className="describtion__brand-name">{brand}</h3>
        <p className="describtion__title">{title}</p>

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
