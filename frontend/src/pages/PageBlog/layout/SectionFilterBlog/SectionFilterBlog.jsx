import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "classnames";

import "./SectionFilterBlog.scss";

const dataBlogsCategories = [
  {
    text: "Surf",
    url: "/surf",
  },
  {
    text: "Skateboard",
    url: "/skateboard",
  },
  {
    text: "Snowboard",
    url: "/snowboard",
  },
  {
    text: "Clothes",
    url: "/clothes",
  },
  {
    text: "Shoes",
    url: "/shoes",
  },
  {
    text: "Kitesurfing",
    url: "/kitesurfing",
  },
];

const SectionFilterBlog = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="section-filter-blog">
      <h2 className="title">Blog</h2>
      <ul className="list">
        {dataBlogsCategories.map((item, index) => (
          <li
            className={classNames("list__item", { active: activeIndex === index })}
            onClick={() => handleClick(index)}
            key={index}>
            <Link to={`/blog/category${item.url}`}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SectionFilterBlog;
