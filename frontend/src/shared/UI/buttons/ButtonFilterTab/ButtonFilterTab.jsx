import classNames from "classnames";

import "./ButtonFilterTab.scss";

const ButtonFilterTab = ({
  children,
  onClick,
  isHeader,
  isActive,
  className,
}) => {
  return (
    <li
      className={classNames(
        "button-filter-tab",
        { "button-tab--header": isHeader },
        { "button-tab--active": isActive },
        className,
      )}
    >
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default ButtonFilterTab;
