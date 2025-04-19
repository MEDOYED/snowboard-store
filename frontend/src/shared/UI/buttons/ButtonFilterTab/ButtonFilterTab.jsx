import classNames from "classnames";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import DropdownMenu from "../../../../widgets/dropdowns/DropdownMenu/DropdownMenu";

import dataNavigation from "../../../data/dataNavigation";

import "./ButtonFilterTab.scss";

const MotionDiv = motion.div;

const ButtonFilterTab = ({ children, className }) => {
  const matchedItem = dataNavigation.find((elem) => elem.navItem === children);
  const [isActive, setIsActive] = useState(false);

  const hasDropdown = Array.isArray(matchedItem?.dropdown);

  const onHandleClick = () => {
    setIsActive((prev) => !prev);
  };

  // clicked filter
  let mainCategory = "";
  const filterItem = matchedItem?.navItem;

  if (filterItem) {
    mainCategory = filterItem.toLowerCase();
  } else {
    console.log("No category found");
  }
  return (
    <li className={classNames("button-filter-tab", className)}>
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
