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
      <menu className="header-nav__list container">
        <ButtonTab>New</ButtonTab>
        <ButtonTab>Snowboard</ButtonTab>
        <ButtonTab>Ski</ButtonTab>
        <ButtonTab>Skate</ButtonTab>
        <ButtonTab>Longboard</ButtonTab>
        <ButtonTab>Wakeboard</ButtonTab>
        <ButtonTab>Surf</ButtonTab>
        <ButtonTab>Sup</ButtonTab>
        <ButtonTab>Clothes</ButtonTab>
        <ButtonTab>Shoes</ButtonTab>
        <ButtonTab>Accessories</ButtonTab>
        <ButtonTab>Brands</ButtonTab>
        <ButtonTab>Sale</ButtonTab>
      </menu>
    </nav>
  );
};

export default HeaderNav;
