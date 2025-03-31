import { FaTwitter } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import "./SectionFooterBottom.scss";

const icons = [FaTwitter, ImFacebook2, FaTwitch, FaYoutube, FaInstagram];

const SectionFooterBottom = () => {
  return (
    <section className="section-footer-bottom">
      <ul className="section-footer-bottom__list">
        {icons.map((Icon, i) => (
          <li key={i} className="section-footer-bottom__list-item">
            <Icon className="section-footer-bottom__list-item-icon" />
          </li>
        ))}
      </ul>
      <span className="section-footer-bottom__text">© 2020 Brd.ru. Все права защищены</span>
    </section>
  );
};

export default SectionFooterBottom;
