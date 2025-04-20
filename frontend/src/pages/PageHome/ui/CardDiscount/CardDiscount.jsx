import { IoMailOutline } from "react-icons/io5";

import FormEmailSubscribe from "../../../../shared/UI/forms/FormEmailSubscribe/FormEmailSubscribe";

import "./CardDiscount.scss";

const CardDiscount = () => {
  return (
    <article className="card-discount">
      <div className="card-discount__content">
        <IoMailOutline className="card-discount__content-logo" />
        <h2 className="card-discount__content-title">10% discount</h2>
        <p className="card-discount__content-text">
          For subscribing to our newsletter
        </p>
        <FormEmailSubscribe />
      </div>
    </article>
  );
};

export default CardDiscount;
