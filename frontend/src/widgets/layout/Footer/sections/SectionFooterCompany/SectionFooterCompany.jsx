import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./SectionFooterCompany.scss";

const listItems = [
  {
    text: "Контакты",
    url: "#",
  },
  {
    text: "О boardriders",
    url: "#",
  },
  {
    text: "Вакансии",
    url: "#",
  },
  {
    text: "Публичная оферта",
    url: "#",
  },
];

const SectionFooterCompany = () => {
  return (
    <section className="section-footer-company">
      <h2 className="section-footer-company__title">Company</h2>
      <ul className="section-footer-company__list">
        {listItems.map((elem, index) => (
          <Fragment key={index}>
            <li className="section-footer-company__list-item">
              <Link to={elem.url}>{elem.text}</Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

export default SectionFooterCompany;
