import { motion } from "motion/react";

import { BlogSlide } from "../../types/typesBlogSlider";

import "./SlideBlog.scss";

const SlideBlog: React.FC<{ slide: BlogSlide }> = ({ slide }) => {
  return (
    <motion.article
      className="slide-blog"
      style={{ backgroundColor: slide.backgroundColor }}
      // initial={{ x: 50 }}
      // animate={{ x: 0 }}
      // exit={{ x: -50 }}
      // transition={{ duration: 0.5 }}
    >
      <img
        src={slide.mediaUrl}
        alt={slide.mediaAlt}
        className="slide-blog__img"
      />

      <div className="slide-blog__text-wrapper text-wrapper">
        <header className="text-wrapper__blog-header blog-header">
          <h4 className="blog-header__section-heading">Blogs</h4>
          <a href="#" className="blog-header__link">
            All blogs
          </a>
        </header>

        <div className="text-wrapper__blog-body blog-body">
          <h2 className="blog-body__blog-title">{slide.title}</h2>
          <p className="blog-body__blog-description">{slide.description}</p>
        </div>

        <footer className="text-wrapper__blog-footer blog-footer">
          <a href="#" className="blog-footer__link">
            Read more
          </a>
        </footer>
      </div>
    </motion.article>
  );
};

export default SlideBlog;
