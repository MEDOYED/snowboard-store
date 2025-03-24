import HeaderTop from "../HeaderTop/HeaderTop.jsx";
import HeaderMain from "../HeaderMain/HeaderMain.jsx";
import HeaderNav from "../HeaderNav/HeaderNav.jsx";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMain />
      <HeaderNav />
    </header>
  );
};

export default Header;
