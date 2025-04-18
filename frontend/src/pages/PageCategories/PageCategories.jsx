import SectionProductCategories from "../../widgets/sections/SectionProductCategories/SectionProductCategories";
import BannerCategories from "../../widgets/banners/BannerCategories/BannerCategories";

import "./PageCategories.scss";

const PageCategories = () => {
  return (
    <main className="page-categories">
      <BannerCategories />

      <SectionProductCategories />
    </main>
  );
};

export default PageCategories;
