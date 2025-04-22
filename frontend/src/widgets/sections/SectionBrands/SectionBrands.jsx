import { useParams } from "react-router-dom";

import dataNavigation from "../../../shared/data/dataNavigation";

import "./SectionBrands.scss";

const SectionBrands = () => {
  const { childSlug } = useParams();
  console.log(childSlug);

  const childSlugCapitalized =
    childSlug && childSlug.length > 0 ? childSlug[0].toUpperCase() + childSlug.slice(1) : "";

  const currentElem = childSlugCapitalized
    ? dataNavigation[11].dropdown.find((elem) => elem.title === childSlugCapitalized)
    : "";

  return (
    <section className="section-brands">
      <div className="section-brands__title">
        {/* <img src="" alt="" /> */}
        <h2 className="section-brands__title">bob</h2>
      </div>
      <p></p>
      {currentElem.description}
    </section>
  );
};

export default SectionBrands;
