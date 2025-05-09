import { Link } from "react-router-dom";

import "./SectionFilterBlog.scss";

const SectionFilterBlog = () => {
  return (
    <section className="section-filter-blog">
      <h2 className="title">Blog</h2>
      <ul className="list">
        <li className="list__item">
          <Link to={"/blog/surf"}>Surf</Link>
        </li>
        <li className="list__item">
          <Link to={"/blog/skateboard"}>Skateboard</Link>
        </li>
        <li className="list__item">
          <Link to={"/blog/snowboard"}>Snowboard</Link>
        </li>
        <li className="list__item">
          <Link to={"/blog/clothes"}>Clothes</Link>
        </li>
        <li className="list__item">
          <Link to={"/blog/shoes"}>Shoes</Link>
        </li>
        <li className="list__item">
          <Link to={"/blog/kitesurfing"}>Kitesurfing</Link>
        </li>
      </ul>
    </section>
  );
};

export default SectionFilterBlog;
