import { Link } from "react-router-dom";
import { Star, ShoppingCart, Search } from "lucide-react";

import ButtonTab from "../../../shared/UI/buttons/ButtonTab/ButtonTab";
import ButtonSignIn from "../../../shared/UI/buttons/ButtonSignIn/ButtonSignIn";
import MainLogo from "../../../shared/UI/layout/MainLogo/MainLogo";

import "./HeaderMain.scss";

const HeaderMain = () => {
  return (
    <div className="header-main">
      <menu className="header-main__filters">
        <ButtonTab isHeader>For Men</ButtonTab>
        <ButtonTab isHeader>For Women</ButtonTab>
        <ButtonTab isHeader>For Kids</ButtonTab>
      </menu>

      <Link to="/">
        <MainLogo />
      </Link>

      <ul className="header-main__list list">
        <ButtonSignIn />
        <li className="header-main__list__item">
          <Star className="header-main__list__icon" />
          <span>Favorites</span>
        </li>
        <li className="header-main__list__item">
          <ShoppingCart className="header-main__list__icon" />
          <span>Cart</span>
        </li>
        <li className="header-main__list__item">
          <Search className="header-main__list__icon" />
          <span>Search</span>
        </li>
      </ul>
    </div>
  );
};

export default HeaderMain;
