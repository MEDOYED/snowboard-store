import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./SectionFooterInc.scss";

const listItems = [
  {
    text: "Франчайзинг",
    url: "#",
  },
  {
    text: "Quiksilver",
    url: "#",
  },
  {
    text: "Roxy",
    url: "#",
  },
  {
    text: "DC Shoes",
    url: "#",
  },
  {
    text: "Boardriders Club",
    url: "#",
  },
];

const SectionFooterInc = () => {
  return (
    <section className="section-footer-inc">
      <h2 className="section-footer-inc__title">Company</h2>
      <ul className="section-footer-inc__list">
        {listItems.map((elem, index) => (
          <Fragment key={index}>
            <li className="section-footer-inc__list-item">
              <Link to={elem.url}>{elem.text}</Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

export default SectionFooterInc;
