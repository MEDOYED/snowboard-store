import IconDelivery from "../../shared/UI/icons/IconDelivery/IconDelivery";
import IconPaymentLocation from "../../shared/UI/icons/IconPaymentLocation/IconPaymentLocation";
import IconProductReturn from "../../shared/UI/icons/IconProductReturn/IconProductReturn";
import IconGpsMark from "../../shared/UI/icons/IconGpsMark/IconGpsMark";
import RowIconText from "../../shared/components/RowIconText/RowIconText";
import ButtonDropDownMenu from "../../shared/components/buttons/ButtonDropDownMenu/ButtonDropDownMenu";

import "./HeaderTop.scss";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-top__content container">
          <div className="header-top__content--left">
            <ButtonDropDownMenu Icon={IconGpsMark} text={"Choose your city:"} />

            <ul className="header-top__content__list">
              <li className="header-top__item">Stores</li>
              <li className="header-top__item">Help</li>
              <li className="header-top__item">Blogs</li>
            </ul>
          </div>
          <div className="header-top__content--right">
            <RowIconText Icon={IconDelivery} text={"Free delivery*"} />
            <RowIconText
              Icon={IconPaymentLocation}
              text={"Payment upon receipt"}
            />
            <RowIconText
              Icon={IconProductReturn}
              text={"Return within 14 days"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
