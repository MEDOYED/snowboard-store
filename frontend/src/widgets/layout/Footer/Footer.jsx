import MainLogo from "../../../shared/UI/layout/MainLogo/MainLogo";
import LineDivider from "../../../shared/UI/lines/LineDivider/LineDivider";
import ButtonAppDownload from "../../../shared/UI/buttons/ButtonAppDownload/ButtonAppDownload";
import IconAppleIphone from "../../../shared/UI/icons/IconAppleIphone/IconAppleIphone";
import IconGooglePlay from "../../../shared/UI/icons/IconGooglePlay/IconGooglePlay";
import ButtonContactPhone from "../../../shared/UI/buttons/ButtonContactPhone/ButtonContactPhone";
import ButtonContactEmail from "../../../shared/UI/buttons/ButtonContactEmail/ButtonContactEmail";

import SectionFooterHelp from "./sections/SectionFooterHelp/SectionFooterHelp";
import SectionFooterCompany from "./sections/SectionFooterCompany/SectionFooterCompany";

import imgQR from "/footer/qr-code.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <div className="footer__top">
          <MainLogo reverse />
          <div>Подпишись на рассылку и получи -10% скидку</div>
        </div>

        <LineDivider />

        <div className="footer__content">
          <div className="links">
            <h2 className="links__title">Access to early releases in the app</h2>
            <div className="links__btns-and-qr">
              <div className="links__buttons-link">
                <ButtonAppDownload
                  Icon={IconAppleIphone}
                  text="Download on the"
                  title="App Store"
                  fontSize="38"
                />
                <ButtonAppDownload
                  Icon={IconGooglePlay}
                  text="Get it on"
                  title="Google Play"
                  fontSize="31"
                />
              </div>
              <div className="links__qr-wrapper">
                <img src={imgQR} className="links__qr" alt="QR code" />
              </div>
            </div>
          </div>

          <div className="contacts">
            <h2 className="contacts__title">Contacts</h2>
            <div className="contacts__phone">
              <ButtonContactPhone />
              <span className="contacts__text">Бесплатная горячая линия Ежедневно с 9 до 21</span>
            </div>

            <div className="contacts__email">
              <ButtonContactEmail />
              <span className="contacts__text">info@brd.ru</span>
            </div>
          </div>

          <SectionFooterHelp />

          <SectionFooterCompany />

          <div className="inc">
            <h2 className="contacts__title">Contacts</h2>
            <div className="contacts__phone">
              <ButtonContactPhone />
              <span>Бесплатная горячая линия Ежедневно с 9 до 21</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
