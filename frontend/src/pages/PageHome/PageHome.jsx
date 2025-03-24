import SectionFeaturedIn from "../../widgets/sections/SectionFeaturedIn/SectionFeaturedIn.jsx";
import Footer from "../../widgets/layout/Footer/Footer.jsx";
import ModalSignIn from "../../widgets/modals/ModalSignIn/ModalSignIn";

import "./PageHome.scss";

const PageHome = () => {
  return (
    <>
      <SectionFeaturedIn />
      <Footer />

      <ModalSignIn />
    </>
  );
};

export default PageHome;
