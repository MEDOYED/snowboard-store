import classNames from "classnames";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

import DropdownMenu from "../../../../widgets/dropdowns/DropdownMenu/DropdownMenu";

import dataNavigation from "../../../data/dataNavigation";

import "./ButtonFilterTab.scss";

const ButtonFilterTab = ({ children, className }) => {
  const matchedItem = dataNavigation.find((elem) => elem.navItem === children);
  const [isActive, setIsActive] = useState(false);

  const hasDropdown = Array.isArray(matchedItem?.dropdown);

  const onHandleClick = () => {
    setIsActive((prev) => !prev);
  };

  const onHandleMouseEnter = () => {
    setIsActive(true);
  };

  const onHandleMouseLeave = () => {
    setIsActive(false);
  };

  // clicked filter
  let mainCategory = "";
  const filterItem = matchedItem?.navItem;

  if (filterItem) {
    mainCategory = filterItem.toLowerCase();
  }
  return (
    <li className={classNames("button-filter-tab", className)}>
      <Link to={"/categories" + `/${mainCategory}`}>
        <button
          onClick={onHandleClick}
          onMouseEnter={onHandleMouseEnter}
          onMouseLeave={onHandleMouseLeave}>
          {children}
        </button>
      </Link>
      <AnimatePresence>
        {hasDropdown && isActive && (
          <DropdownMenu
            mainCategory={mainCategory}
            items={matchedItem.dropdown}
            onHandleMouseLeave={onHandleMouseLeave}
          />
        )}
      </AnimatePresence>
    </li>
  );
};

export default ButtonFilterTab;
