import { Link } from "react-router-dom";

import "./ButtonShowMore.scss";

const ButtonShowMore = ({ children }) => {
  // TODO: ADD PATH FOR A LINK
  return (
    <Link to="/" className="btn-show-more">
      {children}
    </Link>
  );
};

export default ButtonShowMore;
