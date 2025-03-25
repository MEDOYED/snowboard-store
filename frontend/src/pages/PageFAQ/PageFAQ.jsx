import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Header from "../../widgets/layout/Header/Header";

import "./PageFAQ.scss";

const PageFAQ = () => {
  const params = useParams();

  return (
    <>
      <Header />
      <div>FAQ page</div>
      <p>section is: {params.FAQSection}</p>
      <Link to="/">Get back</Link>
    </>
  );
};

export default PageFAQ;
