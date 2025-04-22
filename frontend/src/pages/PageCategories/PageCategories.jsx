import SectionProductCategories from "../../widgets/sections/SectionProductCategories/SectionProductCategories";
import BannerCategories from "../../widgets/banners/BannerCategories/BannerCategories";

// temp
import SectionBrands from "../../widgets/sections/SectionBrands/SectionBrands";

import "./PageCategories.scss";

const PageCategories = () => {
  return (
    <main className="page-categories">
      <BannerCategories />

      <SectionProductCategories />

      <SectionBrands />
    </main>
  );
};

export default PageCategories;
