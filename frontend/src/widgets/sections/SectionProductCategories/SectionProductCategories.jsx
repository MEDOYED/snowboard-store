import { useState, useRef, useEffect } from "react";
import dataProductCategories from "../../../shared/data/dataProductCategories";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./SectionProductCategories.scss";

const SectionProductCategories = () => {
  const listRef = useRef(null);
  const listItemRef = useRef(null);

  const [startIndex, setStartIndex] = useState(0);
  const [listItemWidth, setListItemWidth] = useState(0);

  const visibleItems = 9;
  const maxStartIndex = dataProductCategories.length - visibleItems;

  // list item width
  useEffect(() => {
    if (listItemRef.current) setListItemWidth(listItemRef.current.offsetWidth);
  }, []);

  // click on left arrow
  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  // click on right arrow
  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxStartIndex));
  };

  return (
    <section className="section-product-categories">
      <div className="slider">
        <button
          className="slider__arrow left"
          onClick={handlePrev}
          aria-label="previous slide"
          disabled={startIndex === 0}>
          <FaChevronLeft />
        </button>

        <div className="slider__viewport">
          <ul
            className="slider__list"
            ref={listRef}
            style={{
              transform: `translateX(-${startIndex * listItemWidth}px)`,
            }}>
            {dataProductCategories.map((item, index) => (
              <li key={index} className="slider__list-item" ref={listItemRef}>
                <img src={item.src} alt={item.alt} />
              </li>
            ))}
          </ul>
        </div>

        <button
          className="slider__arrow right"
          onClick={handleNext}
          aria-label="next slide"
          disabled={startIndex === maxStartIndex}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SectionProductCategories;
