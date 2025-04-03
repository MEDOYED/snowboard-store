import "./CardProduct.scss";

const CardProduct = ({ brand, title }) => {
  return (
    <article className="card-product">
      <h3 className="card-product__heading">{brand}</h3>
      <p>{title}</p>
    </article>
  );
};

export default CardProduct;
