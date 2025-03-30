import { MdOutlineMail } from "react-icons/md";

import "./ButtonContactEmail.scss";

const ButtonContactEmail = () => {
  return (
    <a className="button-contact-email" href="mailto:info@brd.ru">
      <MdOutlineMail className="button-contact-email__icon" />
      <span>Контактный Email</span>
    </a>
  );
};

export default ButtonContactEmail;
