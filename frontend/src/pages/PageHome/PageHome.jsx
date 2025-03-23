import ModalSignIn from "../../widgets/modals/ModalSignIn/ModalSignIn";
import SectionFeaturedIn from "../../widgets/sections/SectionFeaturedIn/SectionFeaturedIn.jsx";

import "./PageHome.scss";

const PageHome = () => {
  return (
    <>
      <div>PageHome</div>
    
      <SectionFeaturedIn />
      <ModalSignIn />
    </>
  );
};

export default PageHome;
