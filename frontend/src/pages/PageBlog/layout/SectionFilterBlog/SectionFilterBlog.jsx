import { Link } from "react-router-dom";

import "./SectionFilterBlog.scss";

const SectionFilterBlog = () => {
  return (
    <section className="section-filter-blog">
      <h2 className="title">Blog</h2>
      <ul className="list">
        <li className="list__item">
          <Link>Surf</Link>
        </li>
        <li className="list__item">
          <Link>Skateboard</Link>
        </li>
        <li className="list__item">
          <Link>Snowboard</Link>
        </li>
        <li className="list__item">
          <Link>Clothes</Link>
        </li>
        <li className="list__item">
          <Link>Shoes</Link>
        </li>
        <li className="list__item">
          <Link>Kitesurfing</Link>
        </li>
      </ul>
    </section>
  );
};

export default SectionFilterBlog;
