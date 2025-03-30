import ButtonTab from "../../../shared/UI/buttons/ButtonTab/ButtonTab";

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
            <ButtonTab isHeader key={element.text}>
              {element.text}
            </ButtonTab>
          );
        })}
      </menu>
    </nav>
  );
};

export default HeaderNav;
