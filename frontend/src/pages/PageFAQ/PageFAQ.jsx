import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./PageFAQ.scss";

const PageFAQ = () => {
  const params = useParams();

  return (
    <>
      <div>FAQ page</div>
      <p>section is: {params.FAQSection}</p>
      <Link to="/">Get back</Link>
    </>
  );
};

export default PageFAQ;
