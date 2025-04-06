import dataProductCategories from "../../../shared/data/dataProductCategories";

import "./SectionProductCategories.scss";

const SectionProductCategories = () => {
  return (
    <section className="section-product-categories">
      <ul className="list">
        {dataProductCategories.map((item) => {
          return (
            <li className="list__item">
              <img src={item.src} alt={item.alt} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SectionProductCategories;
