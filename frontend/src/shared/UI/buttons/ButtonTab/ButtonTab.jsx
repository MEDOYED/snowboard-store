import classNames from "classnames";

import "./ButtonTab.scss";

const ButtonTab = ({ children, onClick, isHeader, className }) => {
  return (
    <li
      className={classNames(
        "button-tab",
        { "button-tab--header": isHeader },
        className,
      )}
    >
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default ButtonTab;
