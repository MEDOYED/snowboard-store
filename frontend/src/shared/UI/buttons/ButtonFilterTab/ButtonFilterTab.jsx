import classNames from "classnames";

import DropdownMenu from "../../../../widgets/dropdowns/DropdownMenu/DropdownMenu";

import dataNavigation from "../../../data/dataNavigation";

import "./ButtonFilterTab.scss";

const ButtonFilterTab = ({ children, onClick, className }) => {
  const matchedItem = dataNavigation.find((elem) => elem.navItem === children);

  const hasDropdown = Array.isArray(matchedItem?.dropdown);

  return (
    <li className={classNames("button-filter-tab", className)}>
      <button onClick={onClick}>{children}</button>
      {hasDropdown && <DropdownMenu items={matchedItem.dropdown} />}
    </li>
  );
};

export default ButtonFilterTab;
