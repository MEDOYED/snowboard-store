import { useState, useEffect, Children, cloneElement } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./SliderPromo.scss";

const PAGE_WIDTH = 1600;
const PAGE_GAP = 25;
const WINDOW_WIDTH = window.innerWidth;

const PAGE_LEFT_MARGIN = (WINDOW_WIDTH - PAGE_WIDTH) / 2;

const SliderPromo = ({ children }) => {
  const [items, setItems] = useState([]);
  const [offset, setOffset] = useState(-1200);

  const handleLeftArrowClick = () => {
    console.log("handleLeftArrowClick");

    setOffset((prev) => prev + (PAGE_WIDTH + PAGE_GAP));
  };

  const handleRightArrowClick = () => {
    console.log("handleRightArrowClick");

    setOffset((prev) => prev - (PAGE_WIDTH + PAGE_GAP));
  };

  useEffect(() => {
    console.log(children);

    const childrenArr = Children.toArray(children);

    const clonedItems = [
      cloneElement(childrenArr[childrenArr.length - 1], {
        key: "last-clone",
        style: {
          height: "100%",
          minWidth: `${PAGE_WIDTH}px`,
          maxWidth: `${PAGE_WIDTH}px`,
        },
      }),

      ...childrenArr.map((child, index) =>
        cloneElement(child, {
          key: index,
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        })
      ),

      cloneElement(childrenArr[0], {
        key: "first-clone",
        style: {
          height: "100%",
          minWidth: `${PAGE_WIDTH}px`,
          maxWidth: `${PAGE_WIDTH}px`,
        },
      }),
    ];

    setItems(clonedItems);
    setOffset(-((PAGE_WIDTH + PAGE_GAP) * 1) + PAGE_LEFT_MARGIN);
  }, [children]);

  useEffect(() => {
    const maxOffset = -((PAGE_WIDTH + PAGE_GAP) * (items.length - 2));
    const minOffset = 0;

    if (offset <= maxOffset) {
      // досяг останнього (клону)
      setTimeout(() => {
        // повертаємося до першого реального
        setOffset(-((PAGE_WIDTH + PAGE_GAP) * 1) + PAGE_LEFT_MARGIN);

        disableTransition();
      }, 300); // затримка повинна бути як у transition (0.3s)
    } else if (offset >= minOffset) {
      // досяг першого (клону)
      setTimeout(() => {
        setOffset(-((PAGE_WIDTH + PAGE_GAP) * (items.length - 2)) + PAGE_LEFT_MARGIN);

        disableTransition();
      }, 300);
    }
  }, [offset, items]);

  const disableTransition = () => {
    const container = document.querySelector(".slider-promo__all-items-container");
    if (container) {
      container.style.transition = "none";
      // перезапускаємо transition
      requestAnimationFrame(() => {
        container.style.transition = "transform 0.3s ease";
      });
    }
  };

  return (
    <div className="slider-promo">
      <FaChevronLeft className="slider-promo__arrow left" onClick={handleLeftArrowClick} />
      <div className="slider-promo__window">
        <div
          className="slider-promo__all-items-container"
          style={{ transform: `translateX(${offset}px)`, gap: `${PAGE_GAP}px` }}>
          {items}
        </div>
      </div>
      <FaChevronRight className="slider-promo__arrow right" onClick={handleRightArrowClick} />
    </div>
  );
};

export default SliderPromo;
