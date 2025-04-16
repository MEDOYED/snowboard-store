import "./DropdownMenu.scss";

const DropdownMenu = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <ul className="dropdown-menu">
      {items.map((item, index) => (
        <li className="dropdown-menu__item" key={index}>
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
