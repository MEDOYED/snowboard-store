import { Link } from "react-router-dom";
import { Star, ShoppingCart, Search } from "lucide-react";

import ButtonLink from "../../../shared/UI/buttons/ButtonLink/ButtonLink";
import ButtonSignIn from "../../../shared/UI/buttons/ButtonSignIn/ButtonSignIn";

import logo from "../../../app/img/logo/logo.svg";

import "./HeaderMain.scss";

const HeaderMain = () => {
  return (
    <div className="header-main">
      <ul className="header-main__filters">
        <ButtonLink text={"For Men"} />
        <ButtonLink text={"For Women"} />
        <ButtonLink text={"For Kids"} />
      </ul>

      <Link to="/">
        <img src={logo} alt="Brand Logo" />
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
