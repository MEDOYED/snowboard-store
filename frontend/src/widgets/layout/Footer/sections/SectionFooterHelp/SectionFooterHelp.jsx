import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./SectionFooterHelp.scss";

const listItems = [
  {
    text: "Доставка",
    url: "#",
  },
  {
    text: "Оплата",
    url: "#",
  },
  {
    text: "Возврат",
    url: "#",
  },
  {
    text: "Отзывы (2290)",
    url: "#",
  },
  {
    text: "Акции и скидки",
    url: "#",
  },
];

const SectionFooterHelp = () => {
  return (
    <section className="section-footer-help">
      <h2 className="section-footer-help__title">Помощь</h2>
      <ul className="section-footer-help__list">
        {listItems.map((elem, index) => (
          <Fragment key={index}>
            <li className="section-footer-help__list-item">
              <Link to={elem.url}>{elem.text}</Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

export default SectionFooterHelp;
