import "./SectionBanner.scss";

const SectionBanner = ({ srcLogo, srcBackgroung }) => {
  return (
    <section className="section-banner">
      <img className="section-banner__background" src={srcBackgroung} alt="banner image" />
      <img className="section-banner__logo" src={srcLogo} alt="banner logo" />
    </section>
  );
};

export default SectionBanner;
