import { Link } from "react-router-dom";
import { Star, ShoppingCart, Search } from "lucide-react";
import { useState } from "react";

import ButtonFilterTab from "../../../shared/UI/buttons/ButtonFilterTab/ButtonFilterTab";
import ButtonSignIn from "../../../shared/UI/buttons/ButtonSignIn/ButtonSignIn";
import MainLogo from "../../../shared/UI/layout/MainLogo/MainLogo";
import ModalSearchBar from "../../modals/ModalSearchBar/ModalSearchBar";

import "./HeaderMain.scss";

const HeaderMain = () => {
  const [isSerchBarOpen, setIsSearchBarOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchBarOpen((prev) => !prev);
  };

  return (
    <div className="header-main">
      <menu className="header-main__filters">
        <ButtonFilterTab>For Men</ButtonFilterTab>
        <ButtonFilterTab>For Women</ButtonFilterTab>
        <ButtonFilterTab>For Kids</ButtonFilterTab>
      </menu>

      <Link to="/">
        <MainLogo />
      </Link>

      <div className="header-main__list-wrapper">
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
          <li className="header-main__list__item" onClick={handleSearchClick}>
            <Search className="header-main__list__icon" />
            <span>Search</span>
          </li>
        </ul>

        {isSerchBarOpen === true && (
          <>
            <ModalSearchBar
              className={"header-main__search-bar"}
              onCrossClick={handleSearchClick}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderMain;
