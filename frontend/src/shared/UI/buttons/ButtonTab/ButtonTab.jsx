import "./ButtonTab.scss";

const ButtonTab = ({ children, onClick }) => {
  return (
    <li className="button-tab">
      <button onClick={onClick}>{children}</button>
    </li>
  );
};

export default ButtonTab;
