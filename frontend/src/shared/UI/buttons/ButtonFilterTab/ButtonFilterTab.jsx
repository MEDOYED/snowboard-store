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
        {hasDropdown && isActive && (
          <MotionDiv
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="dropdown-wrapper"
            style={{ transformOrigin: "top", overflow: "hidden" }}>
            <DropdownMenu items={matchedItem.dropdown} />
          </MotionDiv>
        )}
      </AnimatePresence>
    </li>
  );
};

export default ButtonFilterTab;
