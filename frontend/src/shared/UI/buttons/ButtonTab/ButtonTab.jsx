import "./ButtonTab.scss";

const ButtonTab = ({ children, onClick, isHeader }) => {
  return (
    <li className={`button-tab ${isHeader ? "button-tab--header" : ""}`}>
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default ButtonTab;
