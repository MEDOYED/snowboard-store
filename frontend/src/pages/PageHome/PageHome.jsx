import SectionFeaturedIn from "../../widgets/sections/SectionFeaturedIn/SectionFeaturedIn.jsx";
import PageHomeSlider from "./PageHomeSlider/PageHomeSlider.jsx";
import SectionSalesCards from "../../widgets/sections/SectionSalesCards/SectionSalesCards.jsx";
import SectionProductSlider from "../../widgets/sections/SectionProductSlider/SectionProductSlider.jsx";
import PageHomeBanner from "./PageHomeBanner/PageHomeBanner.jsx";

import "./PageHome.scss";

const PageHome = () => {
  return (
    <div className="home-page">
      <div className="home-page__slider">
        <PageHomeSlider />
      </div>

      <div className="home-page__featured-in">
        <SectionFeaturedIn />
      </div>

      <div className="home-page__sales-cards">
        <SectionSalesCards />
      </div>

      <div className="home-page__section-product-slider">
        <SectionProductSlider />
      </div>

      <div className="home-page__section-banner">
        <PageHomeBanner />
      </div>
    </div>
  );
};

export default PageHome;
