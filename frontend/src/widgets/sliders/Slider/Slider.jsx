import { useState, useEffect, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Slider.scss";

const PAGE_WIDTH = 450;

const Slider = ({ children }) => {
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
    <div className="slider">
      <FaChevronLeft className="slider__arrow" onClick={handleLeftArrowClick} />
      <div className="slider__window">
        <div
          className="slider__all-items-container"
          style={{ transform: `translateX(${offset}px)` }}>
          {items}
        </div>
      </div>
      <FaChevronRight className="slider__arrow" onClick={handleRightArrowClick} />
    </div>
  );
};

export default Slider;
