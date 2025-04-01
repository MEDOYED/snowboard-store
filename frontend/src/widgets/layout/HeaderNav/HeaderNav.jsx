import ButtonFilterTab from "../../../shared/UI/buttons/ButtonFilterTab/ButtonFilterTab";

import "./HeaderNav.scss";

const menuItems = [
  { text: "New" },
  { text: "Snowboard" },
  { text: "Ski" },
  { text: "Skate" },
  { text: "Longboard" },
  { text: "Wakeboard" },
  { text: "Surf" },
  { text: "Sup" },
  { text: "Clothes" },
  { text: "Shoes" },
  { text: "Accessories" },
  { text: "Brands" },
  { text: "Sale" },
];

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <menu className="header-nav__list container">
        {menuItems.map((element) => {
          return (
            <ButtonFilterTab isHeader key={element.text}>
              {element.text}
            </ButtonFilterTab>
          );
        })}
      </menu>
    </nav>
  );
};

export default HeaderNav;
