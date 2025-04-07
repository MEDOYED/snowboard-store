import { useState } from "react";
import dataProductCategories from "../../../shared/data/dataProductCategories";

import "./SectionProductCategories.scss";

const SectionProductCategories = () => {
  const itemsPerSlide = 9;
  const [startIndex, setStartIndex] = useState(0);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + itemsPerSlide < dataProductCategories.length;

  const currentItems = dataProductCategories.slice(startIndex, startIndex + itemsPerSlide);

  const handlePrev = () => {
    if (canGoPrev) {
      setStartIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setStartIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="section-product-categories">
      <div className="slider">
        <button onClick={handlePrev} disabled={!canGoPrev}>
          ←
        </button>

        <ul className="list">
          {currentItems.map((item, index) => (
            <li key={index} className="list__item">
              <img src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>

        <button onClick={handleNext} disabled={!canGoNext}>
          →
        </button>
      </div>
    </section>
  );
};

export default SectionProductCategories;
