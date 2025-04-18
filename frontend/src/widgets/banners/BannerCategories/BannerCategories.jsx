import SectionSalesCards from "../../sections/SectionSalesCards/SectionSalesCards";

import "./BannerCategories.scss";

const BannerCategories = () => {
  return (
    <section className="banner-categories">
      <div className="container">
        {/* потім зроблю окремий компонент CategoryPath */}
        <p className="banner-categories__path">Главная / Мужчинам / Сноуборд</p>

        <SectionSalesCards />
      </div>
    </section>
  );
};

export default BannerCategories;
