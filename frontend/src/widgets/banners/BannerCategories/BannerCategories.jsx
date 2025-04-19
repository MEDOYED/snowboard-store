import SectionSalesCards from "../../sections/SectionSalesCards/SectionSalesCards";
import { useLocation } from "react-router-dom";

import "./BannerCategories.scss";

const BannerCategories = () => {
  const location = useLocation();
  const locationPath = location.pathname;
  console.log(locationPath);

  // Split by "/", filter out empty strings
  const locationParts = locationPath.split("/").filter(Boolean);

  // Capitalize each word (make the first letter uppercase)
  const locationCapitalized = locationParts.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const [firstWord, secondWord] = locationCapitalized;

  return (
    <section className="banner-categories">
      <div className="container">
        {/* потім зроблю окремий компонент CategoryPath */}
        <p className="banner-categories__path">
          <span>{firstWord}</span>
          {secondWord && (
            <>
              <span>/</span>
              <span>{secondWord}</span>
            </>
          )}
        </p>

        <SectionSalesCards />
      </div>
    </section>
  );
};

export default BannerCategories;
