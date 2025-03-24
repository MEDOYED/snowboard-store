import Header from "../../widgets/layout/Header/Header.jsx";
import SectionFeaturedIn from "../../widgets/sections/SectionFeaturedIn/SectionFeaturedIn.jsx";
import Footer from "../../widgets/layout/Footer/Footer.jsx";
import ModalSignIn from "../../widgets/modals/ModalSignIn/ModalSignIn";

import "./PageHome.scss";

const PageHome = () => {
  return (
    <>
      <Header />
      <SectionFeaturedIn />
      <Footer />

      <ModalSignIn />
    </>
  );
};

export default PageHome;
