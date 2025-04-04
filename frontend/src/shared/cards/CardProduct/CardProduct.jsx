import classNames from "classnames";
import "./CardProduct.scss";

const CardProduct = ({
  brand,
  title,
  img,
  alt,
  discount,
  price,
  currency,
  discountedPrice,
}) => {
  return (
    <article className="card-product">
      <figure className="card-product__product-photo product-photo">
        <img src={img} alt={alt} className="product-photo__img" />
        <figcaption className="product-photo__caption">{discount}</figcaption>
      </figure>

      <div className="card-product__describtion describtion">
        <h3 className="describtion__brand-name">{brand}</h3>
        <p className="describtion__title">{title}</p>

        <p className="describtion__price">
          <strong
            className={discount ? "describtion__price--original" : undefined}
          >
            {price} {currency}
          </strong>

          {discount && (
            <strong className="describtion__price--discounted">
              {discountedPrice} {currency}
            </strong>
          )}
        </p>
      </div>
    </article>
  );
};

export default CardProduct;
