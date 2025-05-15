import SectionBrandsLogos from "../../widgets/sections/SectionBrandsLogos/SectionBrandsLogos.jsx";
import PageHomeSlider from "./PageHomeSlider/PageHomeSlider.jsx";
import SectionSalesCards from "../../widgets/sections/SectionSalesCards/SectionSalesCards.jsx";
import SectionProductSlider from "../../widgets/sections/SectionProductSlider/SectionProductSlider.js";
import PageHomeBanner from "./PageHomeBanner/PageHomeBanner.jsx";
import SectionLoyaltyAndDiscount from "../../widgets/sections/SectionLoyaltyAndDiscount/SectionLoyaltyAndDiscount.jsx";
import SectionBlogSlider from "../../widgets/sections/SectionBlogSlider/SectionBlogSlider.js";

import { dataBlogSlides } from "../../shared/data/dataBlogSlider.js";

import "./PageHome.scss";

const PageHome = () => {
  return (
    <div className="home-page">
      <div className="home-page__slider">
        <PageHomeSlider />
      </div>

      <div className="home-page__featured-in">
        <SectionBrandsLogos />
      </div>

      <div className="home-page__sales-cards">
        <SectionSalesCards numberOfCards={2} />
      </div>

      <div className="home-page__section-product-slider">
        <SectionProductSlider
          sectionHeading="New Products"
          productsJsonPath="http://localhost:7000/api/products"
        />
      </div>

      <div className="home-page__section-banner">
        <PageHomeBanner />
      </div>

      <div className="home-page__section-product-slider">
        <SectionProductSlider
          sectionHeading="DC Shoes popular in collection"
          productsJsonPath="http://localhost:7000/api/products"
        />
      </div>

      <div className="home-page__section_blog-slider">
        <SectionBlogSlider slides={dataBlogSlides} />
      </div>

      <div className="home-page__section-loyalty-and-discount">
        <SectionLoyaltyAndDiscount />
      </div>
    </div>
  );
};

export default PageHome;
