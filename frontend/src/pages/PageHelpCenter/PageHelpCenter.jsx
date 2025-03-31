import SectionFaq from "../../widgets/sections/SectionFaq/SectionFaq";

import "./PageHelpCenter.scss";

const PageHelpCenter = () => {
  return (
    <div className="help-center-page">
      <div className="help-center-page__faq-section">
        <SectionFaq />
      </div>
    </div>
  );
};

export default PageHelpCenter;
