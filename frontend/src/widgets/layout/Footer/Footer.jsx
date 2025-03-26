import MainLogo from "../../../shared/UI/layout/MainLogo/MainLogo";
import LineDivider from "../../../shared/UI/lines/LineDivider/LineDivider";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          <MainLogo reverse />
          <div>Подпишись на рассылку и получи -10% скидку</div>
        </div>
        <LineDivider />
      </div>
    </div>
  );
};

export default Footer;
