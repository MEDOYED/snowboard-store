import PathUrl from "../../../shared/UI/paths/PathUrl/PathUrl";
import SectionSalesCards from "../../sections/SectionSalesCards/SectionSalesCards";

import "./BannerCategories.scss";

const BannerCategories = () => {
  return (
    <section className="banner-categories">
      <div className="container">
        <PathUrl />

        <SectionSalesCards />
      </div>
    </section>
  );
};

export default BannerCategories;
