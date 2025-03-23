import { brandLogosMap } from "../../../shared/data/brandLogosMap";

import "./SectionFeaturedIn.scss";

const SectionFeaturedIn = () => {
  return (
    <section className="featured-in">
      <ul className="featured-in__list">
        {brandLogosMap.map((brandLogo, index) => (
          <li className="featured-in__item" key={index}>
            <img
              src={brandLogo}
              alt="Brand logotype"
              className="featured-in__logo"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionFeaturedIn;
