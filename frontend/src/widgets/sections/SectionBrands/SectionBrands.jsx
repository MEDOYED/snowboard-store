import { useParams } from "react-router-dom";

import dataNavigation from "../../../shared/data/dataNavigation";

import "./SectionBrands.scss";

const SectionBrands = () => {
  const { childSlug } = useParams();
  console.log(childSlug);

  const currentElem = dataNavigation[11].dropdown.find((elem) => elem.url === `/${childSlug}`);

  return (
    <section className="section-brands">
      <div className="section-brands__title">
        {/* <img src="" alt="" /> */}
        <h2 className="section-brands__title-text">{currentElem?.title || "Brand not found"}</h2>
      </div>
      <p className="section-brands__text">
        {currentElem?.description || "No description avaliable"}
      </p>
    </section>
  );
};

export default SectionBrands;
