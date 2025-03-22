import IconChevronDown from "../../../UI/icons/IconChevronDown/IconChevronDown";

import "./ButtonDropDownMenu.scss";

const ButtonDropDownMenu = ({ Icon, text }) => {
  return (
    <>
      <button className="button-drop-down-menu">
        <Icon />
        <span>{text}</span>
        <IconChevronDown className="button-drop-down-menu__shevron" />
      </button>
    </>
  );
};

export default ButtonDropDownMenu;
