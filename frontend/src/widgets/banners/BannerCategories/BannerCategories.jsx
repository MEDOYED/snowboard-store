import { useParams } from "react-router-dom";

import SectionSalesCards from "../../sections/SectionSalesCards/SectionSalesCards";
import SectionBrands from "../../sections/SectionBrands/SectionBrands";

import "./BannerCategories.scss";

const BannerCategories = () => {
  const { parentSlug } = useParams();
  console.log(parentSlug);
  return (
    <section className="banner-categories">
      <div className="container">
        {parentSlug === "brands" ? <SectionBrands /> : <SectionSalesCards numberOfCards={3} />}
      </div>
    </section>
  );
};

export default BannerCategories;
