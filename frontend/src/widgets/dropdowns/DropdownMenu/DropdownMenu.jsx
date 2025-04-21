import { motion } from "motion/react";
import { Link } from "react-router-dom";

import "./DropdownMenu.scss";

const DropdownMenu = ({ items, mainCategory, onHandleMouseLeave }) => {
  if (!items || items.length === 0) return null;

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="dropdown-menu__wrapper"
      style={{ transformOrigin: "top", overflow: "hidden" }}
      onMouseLeave={onHandleMouseLeave}>
      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <li className="dropdown-menu__item" key={index}>
            <Link to={`/categories/${mainCategory}${item.url}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default DropdownMenu;
