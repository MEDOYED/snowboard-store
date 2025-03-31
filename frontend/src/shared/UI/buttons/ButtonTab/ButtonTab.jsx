import classNames from "classnames";

import "./ButtonTab.scss";

const ButtonTab = ({ children, onClick, isHeader, isActive, className }) => {
  return (
    <li
      className={classNames(
        "button-tab",
        { "button-tab--header": isHeader },
        { "button-tab--active": isActive },
        className,
      )}
    >
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default ButtonTab;
