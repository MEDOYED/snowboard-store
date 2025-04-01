import classNames from "classnames";

import "./ButtonFilterTab.scss";

const ButtonFilterTab = ({ children, onClick, className }) => {
  return (
    <li className={classNames("button-filter-tab", className)}>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default ButtonFilterTab;
