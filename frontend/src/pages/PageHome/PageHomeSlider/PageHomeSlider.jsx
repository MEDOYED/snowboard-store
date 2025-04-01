import SliderPromo from "../../../widgets/sliders/SliderPromo/SliderPromo";

import "./PageHomeSlider.scss";

const PageHomeSlider = () => {
  return (
    <>
      <SliderPromo>
        <div className="page-home-slider item-1">Item 1</div>
        <div className="page-home-slider item-2">Item 2</div>
        <div className="page-home-slider item-3">Item 3</div>
      </SliderPromo>
    </>
  );
};

export default PageHomeSlider;
