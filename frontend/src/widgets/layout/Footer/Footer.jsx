import MainLogo from "../../../shared/UI/layout/MainLogo/MainLogo";
import LineDivider from "../../../shared/UI/lines/LineDivider/LineDivider";
import ButtonAppDownload from "../../../shared/UI/buttons/ButtonAppDownload/ButtonAppDownload";

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

        <div className="footer__content">
          <div className="footer__content__links">
            <h2 className="footer__content__title">Access to early releases in the app</h2>
            <div>
              <ButtonAppDownload />
            </div>
          </div>
          <div className="footer__content__contacts"></div>
          <div className="footer__content__help"></div>
          <div className="footer__content__company"></div>
          <div className="footer__content__inc"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
