import { IoMailOutline } from "react-icons/io5";

import FormEmailSubscribe from "../../../../shared/UI/forms/FormEmailSubscribe/FormEmailSubscribe";

import discountImg from "../../assets/img/discount-img.png";

import "./CardDiscount.scss";

const CardDiscount = () => {
  return (
    <article className="card-discount">
      <img className="card-discount__background" src={discountImg} alt="" />
      <div className="card-discount__content">
        <IoMailOutline className="card-discount__content-logo" />
        <h2 className="card-discount__content-title">10% discount</h2>
        <p className="card-discount__content-text">For subscribing to our newsletter</p>
        <FormEmailSubscribe />
      </div>
    </article>
  );
};

export default CardDiscount;
