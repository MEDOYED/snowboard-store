import SectionBanner from "../../../widgets/sections/SectionBanner/SectionBanner";

import bgImg from "/img/banners/1.jpeg";
import logoImg from "/img/logos/1.png";

import "./PageHomeBanner.scss";

const PageHomeBanner = () => {
  return (
    <div className="page-home-banner">
      <div className="page-home-banner__banner">
        <SectionBanner srcLogo={logoImg} srcBackgroung={bgImg} />
      </div>
      <h2 className="page-home-banner__title">Название Акции</h2>
      <p className="page-home-banner__text">
        Меня не спрашивали, а надо было спросить, что означает имя Заратустры именно в моих устах —
        в устах первого имморалиста: ведь то, в чём состоит неслыханная уникальность этого перса в
        истории, являет собою противоположность как раз этому.
      </p>
    </div>
  );
};

export default PageHomeBanner;
