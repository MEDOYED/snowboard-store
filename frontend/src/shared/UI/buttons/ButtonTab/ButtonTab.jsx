import classNames from "classnames";
import { motion } from "motion/react";

import "./ButtonTab.scss";

const ButtonTab = ({ children, onClick, isActive, className }) => {
  return (
    <motion.li
      className={classNames("button-tab", className)}
      initial={{}}
      animate={isActive ? { color: "#000" } : {}}
      transition={{ duration: 0.15, ease: "easeInOut" }}
      whileHover={
        !isActive
          ? { color: "#414647", scale: 1.1, transition: { duration: 0.1 } }
          : {}
      }
    >
      <button onClick={onClick}>{children}</button>
    </motion.li>
  );
};

export default ButtonTab;
