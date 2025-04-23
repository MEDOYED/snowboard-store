import { brandLogosMap } from "../../../shared/data/brandLogosMap";

import "./SectionBrandsLogos.scss";

const SectionBrandsLogos = () => {
  return (
    <section className="section-brands-logos">
      <ul className="list">
        {brandLogosMap.map((brandLogo, index) => (
          <li className="list__item" key={index}>
            <img src={brandLogo} alt="Brand logotype" className="list__item-logo" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionBrandsLogos;
