import dataNavigation from "../../../shared/data/dataNavigation";

import ButtonFilterTab from "../../../shared/UI/buttons/ButtonFilterTab/ButtonFilterTab";

import "./HeaderNav.scss";

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <menu className="header-nav__list container">
        {dataNavigation.map((element) => {
          return <ButtonFilterTab key={element.navItem}>{element.navItem}</ButtonFilterTab>;
        })}
      </menu>
    </nav>
  );
};

export default HeaderNav;
