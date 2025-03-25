import { Link } from "react-router-dom";

import "./Page404.scss";

const Page404 = () => {
  return (
    <>
      <div>
        <p>Error 404</p>
        <p>Page Not Found</p>
        <Link to="/">Get back</Link>
      </div>
    </>
  );
};

export default Page404;
