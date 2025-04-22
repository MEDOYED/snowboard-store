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
    <li
      className={classNames("button-filter-tab", className)}
      onMouseLeave={onHandleMouseLeave}
      onMouseEnter={onHandleMouseEnter}>
      <Link to={"/categories" + `/${mainCategory}`}>
        <button onClick={onHandleClick}>{children}</button>
      </Link>
      <AnimatePresence>
        {hasDropdown && isActive && (
          <DropdownMenu mainCategory={mainCategory} items={matchedItem.dropdown} />
        )}
      </AnimatePresence>
    </li>
  );
};

export default ButtonFilterTab;
