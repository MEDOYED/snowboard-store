import SliderProductCategories from "../../widgets/sliders/SliderProductCategories/SliderProductCategories";
import BannerCategories from "../../widgets/banners/BannerCategories/BannerCategories";

import "./PageCategories.scss";

const PageCategories = () => {
  return (
    <main className="page-categories">
      <BannerCategories />

      <SliderProductCategories />
    </main>
  );
};

export default PageCategories;
