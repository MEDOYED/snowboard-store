import PathUrl from "../../../shared/UI/paths/PathUrl/PathUrl";
import SectionSalesCards from "../../sections/SectionSalesCards/SectionSalesCards";

import "./BannerCategories.scss";

const BannerCategories = () => {
  return (
    <section className="banner-categories">
      <div className="container">
        <PathUrl />

        <SectionSalesCards numberOfCards={3} />
      </div>
    </section>
  );
};

export default BannerCategories;
