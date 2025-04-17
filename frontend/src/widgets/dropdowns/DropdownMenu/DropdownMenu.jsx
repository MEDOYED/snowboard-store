import { motion } from "framer-motion";

import "./DropdownMenu.scss";

const MotionDiv = motion.div;

const DropdownMenu = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    // <motion.div
    <MotionDiv
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="dropdown-menu__wrapper"
      style={{ transformOrigin: "top", overflow: "hidden" }}>
      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <li className="dropdown-menu__item" key={index}>
            {item.title}
          </li>
        ))}
      </ul>
    </MotionDiv>
    // </motion.div>
  );
};

export default DropdownMenu;
