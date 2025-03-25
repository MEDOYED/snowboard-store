import MainLogo from "../../../shared/UI/layout/MainLogo/MainLogo";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <MainLogo reverse />
        <div>Подпишись на рассылку и получи -10% скидку</div>
      </div>
    </div>
  );
};

export default Footer;
