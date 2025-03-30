import ButtonTab from "../../../shared/UI/buttons/ButtonTab/ButtonTab";

import "./HeaderNav.scss";

// const menuItems = [
//   { to: '/new', text: 'Новинки' },
//   { to: '/snowboard', text: 'Сноуборд' },
//   { to: '/ski', text: 'Лыжи' },
//   { to: '/skate', text: 'Скейт' },
//   { to: '/longboard', text: 'Лонгборд' },
//   { to: '/wakeboard', text: 'Вейкборд' },
//   { to: '/surf', text: 'Серф' },
//   { to: '/sup', text: 'Sup' },
//   { to: '/clothes', text: 'Одежда' },
//   { to: '/shoes', text: 'Обувь' },
//   { to: '/accessories', text: 'Аксессуары' },
//   { to: '/brands', text: 'Бренды' },
//   { to: '/sale', text: 'Распродажа' },
// ];

// ето для генерации етого списка кнопок с помощью map()

const HeaderNav = () => {
  return (
    <nav className="header-nav">
      <ul className="header-nav__list container">
        <ButtonTab text={"New"} />
        <ButtonTab text={"Snowboard"} />
        <ButtonTab text={"Ski"} />
        <ButtonTab text={"Skate"} />
        <ButtonTab text={"Longboard"} />
        <ButtonTab text={"Wakeboard"} />
        <ButtonTab text={"Surf"} />
        <ButtonTab text={"Sup"} />
        <ButtonTab text={"Clothes"} />
        <ButtonTab text={"Shoes"} />
        <ButtonTab text={"Accessories"} />
        <ButtonTab text={"Brands"} />
        <ButtonTab text={"Sale"} />
      </ul>
    </nav>
  );
};

export default HeaderNav;
