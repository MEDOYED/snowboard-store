import { Link } from "react-router-dom";
import { motion } from "motion/react";

import "./ButtonShowMore.scss";

const ButtonShowMore = ({ children }) => {
  const MotionLink = motion(Link);

  // TODO: ADD ACTUAL PATH FOR A LINK
  return (
    <MotionLink
      to="/help-center/tmp"
      className="btn-show-more"
      whileHover={{
        color: "#000",
        backgroundColor: "#fff",
        boxShadow: "inset 0 0 0 3px #000",
      }}
      whileTap={{ backgroundColor: "#d4d4d8" }}
    >
      {children}
    </MotionLink>
  );
};

export default ButtonShowMore;
