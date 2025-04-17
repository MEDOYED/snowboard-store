import classNames from "classnames";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  return (
    <li className={classNames("button-filter-tab", className)}>
      <button onClick={onHandleClick}>{children}</button>

      <AnimatePresence>
        {hasDropdown && isActive && <DropdownMenu items={matchedItem.dropdown} />}
      </AnimatePresence>
    </li>
  );
};

export default ButtonFilterTab;
