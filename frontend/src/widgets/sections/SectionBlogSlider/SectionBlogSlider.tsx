import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { BlogSlide } from "../../../shared/types/typesBlogSlider";

import "./SectionBlogSlider.scss";

const SectionBlogSlider: React.FC<{ slides: BlogSlide[] }> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentSlideIndex((prevSlideIndex) =>
      prevSlideIndex !== slides.length - 1 ? prevSlideIndex + 1 : 0,
    );
  };

  const prevSlide = (): void => {
    setCurrentSlideIndex((prevSlideIndex) =>
      prevSlideIndex !== 0 ? slides.length - 1 : prevSlideIndex - 1,
    );
  };

  return (
    <section className="section-blog-slider">
      <div className="section-blog-slider__slider-track slider-track">
        {slides.map((slide) => {
          return (
            <article
              className="slider-track__slide slide"
              style={{ backgroundColor: slide.backgroundColor }}
              key={slide.title}
            >
              <img
                src={slide.mediaUrl}
                alt={slide.mediaAlt}
                className="slide__img"
              />

              <div className="slide__text-wrapper text-wrapper">
                <header className="text-wrapper__blog-header blog-header">
                  <h4 className="blog-header__section-heading">Blogs</h4>
                  <a href="#" className="blog-header__link">
                    All blogs
                  </a>
                </header>

                <div className="text-wrapper__blog-body blog-body">
                  <h2 className="blog-body__blog-title">{slide.title}</h2>
                  <p className="blog-body__blog-description">
                    {slide.description}
                  </p>
                </div>

                <footer className="text-wrapper__blog-footer blog-footer">
                  <a href="#" className="blog-footer__link">
                    Read more
                  </a>
                </footer>
              </div>
            </article>
          );
        })}
      </div>

      <button className="section-blog-slider__slide-btn left">
        <IoChevronBack />
      </button>

      <button className="section-blog-slider__slide-btn right">
        <IoChevronForward />
      </button>
    </section>
  );
};

export default SectionBlogSlider;
