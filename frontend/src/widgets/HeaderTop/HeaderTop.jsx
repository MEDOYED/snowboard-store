import IconDelivery from "../../shared/UI/icons/IconDelivery/IconDelivery";
import IconPaymentLocation from "../../shared/UI/icons/IconPaymentLocation/IconPaymentLocation";
import IconProductReturn from "../../shared/UI/icons/IconProductReturn/IconProductReturn";
import IconGpsMark from "../../shared/UI/icons/IconGpsMark/IconGpsMark";

import RowIconText from "../../shared/components/RowIconText/RowIconText";
import "./HeaderTop.scss";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="header-top__content container">
          <div className="header-top__content--left">
            <IconGpsMark />
            <span>Choose your city:</span>
            <span>test1</span>
            <span>test2</span>
            <span>test3</span>
            <span>test4</span>
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
