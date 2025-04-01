import Slider from "../../../widgets/sliders/Slider/Slider";

import "./PageHomeSlider.scss";

const PageHomeSlider = () => {
  return (
    <>
      <Slider>
        <div className="page-home-slider item-1">Item 1</div>
        <div className="page-home-slider item-2">Item 2</div>
        <div className="page-home-slider item-3">Item 3</div>
      </Slider>
    </>
  );
};

export default PageHomeSlider;
