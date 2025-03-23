import ButtonLink from "../../shared/UI/buttons/ButtonLink/ButtonLink";

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
        <ButtonLink text={"New"} />
        <ButtonLink text={"Snowboard"} />
        <ButtonLink text={"Ski"} />
        <ButtonLink text={"Skate"} />
        <ButtonLink text={"Longboard"} />
        <ButtonLink text={"Wakeboard"} />
        <ButtonLink text={"Surf"} />
        <ButtonLink text={"Sup"} />
        <ButtonLink text={"Clothes"} />
        <ButtonLink text={"Shoes"} />
        <ButtonLink text={"Accessories"} />
        <ButtonLink text={"Brands"} />
        <ButtonLink text={"Sale"} />
      </ul>
    </nav>
  );
};

export default HeaderNav;
