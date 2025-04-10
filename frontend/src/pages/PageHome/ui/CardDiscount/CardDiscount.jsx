import discountImg from "../../assets/img/discount-img.png";

import "./CardDiscount.scss";

const CardDiscount = () => {
  return (
    <article className="card-discount">
      <img src={discountImg} alt="" />
    </article>
  );
};

export default CardDiscount;
