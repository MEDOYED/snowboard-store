import SectionSalesCards from "../../sections/SectionSalesCards/SectionSalesCards";
import { useLocation } from "react-router-dom";

import "./BannerCategories.scss";

const BannerCategories = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  return (
    <section className="banner-categories">
      <div className="container">
        {/* потім зроблю окремий компонент CategoryPath */}
        <p className="banner-categories__path">{locationPath}</p>

        <SectionSalesCards />
      </div>
    </section>
  );
};

export default BannerCategories;
