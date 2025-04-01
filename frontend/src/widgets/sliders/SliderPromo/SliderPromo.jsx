import { useState, useEffect, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./SliderPromo.scss";

const PAGE_WIDTH = 1600;

const SliderPromo = ({ children }) => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    console.log("handleLeftArrowClick");

    setOffset((prev) => prev + PAGE_WIDTH);
  };

  const handleRightArrowClick = () => {
    console.log("handleRightArrowClick");

    setOffset((prev) => prev - PAGE_WIDTH);
  };

  useEffect(() => {
    setItems(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, [children]);

  return (
    <div className="slider-promo">
      <FaChevronLeft className="slider-promo__arrow left" onClick={handleLeftArrowClick} />
      <div className="slider-promo__window">
        <div
          className="slider-promo__all-items-container"
          style={{ transform: `translateX(${offset}px)` }}>
          {items}
        </div>
      </div>
      <FaChevronRight className="slider-promo__arrow right" onClick={handleRightArrowClick} />
    </div>
  );
};

export default SliderPromo;
