import SliderPromo from "../../../widgets/sliders/SliderPromo/SliderPromo";

import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";

import "./PageHomeSlider.scss";

const PageHomeSlider = () => {
  return (
    <>
      <SliderPromo>
        <img className="page-home-slider item-1" src={img1} alt="promo slider" />
        <img className="page-home-slider item-2" src={img2} alt="promo slider" />
        <img className="page-home-slider item-3" src={img3} alt="promo slider" />
      </SliderPromo>
    </>
  );
};

export default PageHomeSlider;
