import { BsFillTelephoneFill } from "react-icons/bs";

import "./ButtonContactPhone.scss";

const ButtonContactPhone = () => {
  return (
    <a className="button-contact-phone" href="tel:+88005117468">
      <BsFillTelephoneFill className="button-contact-phone__icon" />
      <span>8 (800) 511-74-68</span>
    </a>
  );
};

export default ButtonContactPhone;
