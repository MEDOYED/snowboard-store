import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { BlogSlide } from "../../../shared/types/typesBlogSlider";

import "./SectionBlogSlider.scss";

const SectionBlogSlider: React.FC<{ slides: BlogSlide[] }> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  /** used to calculate direction of the scroll */
  const prevSlideIndexRef = useRef<number>(currentSlideIndex);
  const slideTrackRef = useRef<HTMLDivElement>(null);

  const nextSlide = (): void => {
    setCurrentSlideIndex((prevSlideIndex) =>
      prevSlideIndex !== slides.length - 1 ? prevSlideIndex + 1 : 0,
    );
    console.log("currentSlideIndex:", currentSlideIndex);
  };

  const prevSlide = (): void => {
    setCurrentSlideIndex((prevSlideIndex) =>
      prevSlideIndex !== 0 ? prevSlideIndex - 1 : slides.length - 1,
    );
    console.log("currentSlideIndex:", currentSlideIndex);
  };

  useEffect(() => {
    const slideTrack = slideTrackRef.current;

    if (!slideTrack) {
      return;
    }

    const slide = slideTrack!.querySelector(".slide") as HTMLElement;
    const slideWidth = slide.offsetWidth;
    console.log("slideWidth:", slideWidth);

    // if (currentSlideIndex > prevSlideIndexRef.current) {
    slideTrack.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
    // } else if (currentSlideIndex < prevSlideIndexRef.current) {
    //   slideTrack.style.transform = `translateX(-${slideWidth * currentSlideIndex}px)`;
    // }
    // console.log("From useEffect");
    // console.log("currentSlideIndex:", currentSlideIndex);

    prevSlideIndexRef.current = currentSlideIndex;
  }, [currentSlideIndex]);

  return (
    <section className="section-blog-slider">
      <div
        className="section-blog-slider__slider-track slider-track"
        ref={slideTrackRef}
      >
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

      <button
        className="section-blog-slider__slide-btn left"
        onClick={prevSlide}
      >
        <IoChevronBack />
      </button>

      <button
        className="section-blog-slider__slide-btn right"
        onClick={nextSlide}
      >
        <IoChevronForward />
      </button>
    </section>
  );
};

export default SectionBlogSlider;
