import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { BlogSlide } from "../../../shared/types/typesBlogSlider";
import CircularLinkedList, {
  CircularLinkedListNode,
} from "../../../shared/data-structures/CircularLinkedList";
import SlideBlog from "../../../shared/slides/SlideBlog/SlideBlog";

import "./SectionBlogSlider.scss";

type VisibleSlides<T> = [
  CircularLinkedListNode<T>,
  CircularLinkedListNode<T>,
  CircularLinkedListNode<T>,
];

type Direction = "next" | "prev";

const SectionBlogSlider: React.FC<{ slides: BlogSlide[] }> = ({ slides }) => {
  const [visibleSlides, setVisibleSlides] =
    useState<VisibleSlides<BlogSlide> | null>(null);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const listRef = useRef<CircularLinkedList<BlogSlide>>(
    new CircularLinkedList(),
  );
  const slideDirectionRef = useRef<Direction | null>(null);
  // const sliderRef = useRef<HTMLDivElement | null>(null);
  // const isAnimating = useRef<boolean>(true);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    listRef.current = CircularLinkedList.newFromArray(slides);
    const currentNode = listRef.current.getCurrentNode();

    setVisibleSlides([currentNode.prev!, currentNode, currentNode.next!]);
  }, []);

  const getSlideWidth: () => number | null = () => {
    const slide = scope.current?.querySelector(
      ".slide-blog",
    ) as HTMLElement | null;
    return slide ? slide.offsetWidth : null;
  };

  useEffect(() => {
    const slideWidth = getSlideWidth();

    if (slideWidth) {
      animate(scope.current, { x: -slideWidth }, { duration: 0 });
    }
  }, [visibleSlides]);

  const nextSlide = async () => {
    const slideWidth = getSlideWidth();
    slideDirectionRef.current = "next";

    await animate(
      scope.current,
      { x: -slideWidth! * 2 },
      { type: "spring", stiffness: 300, damping: 30 },
    );

    rotateBuffer();

    await animate(scope.current, { x: -slideWidth! }, { duration: 0 });
  };

  const prevSlide = async () => {
    const slideWidth = getSlideWidth();
    slideDirectionRef.current = "prev";

    await animate(
      scope.current,
      { x: 0 },
      { type: "spring", stiffness: 300, damping: 30 },
    );

    rotateBuffer();

    await animate(scope.current, { x: -slideWidth! }, { duration: 0 });
  };

  const rotateBuffer = (): void => {
    // setIsAnimating(false);
    // isAnimating.current = false;
    // setOffsetX(0);
    if (slideDirectionRef.current === "next") {
      setVisibleSlides((prevVisibleSlides) => {
        const [, current, next] = prevVisibleSlides!;

        return [current, next, next.next!];
      });
    } else if (slideDirectionRef.current === "prev") {
      setVisibleSlides((prevVisibleSlides) => {
        const [prev, current] = prevVisibleSlides!;

        return [prev.prev!, prev, current];
      });
    }
    // setIsAnimating(true);
  };

  // useEffect(() => {
  //   if (!isAnimating) {
  //     setOffsetX(0);
  //   }
  // }, [isAnimating]);
  //
  // initial={{ x: 0 }}
  // animate={{ x: offsetX }}
  // transition={
  //   isAnimating
  //     ? { type: "spring", stiffness: 300, damping: 30 }
  //     : { duration: 0 }
  // }
  // onAnimationComplete={rotateBuffer}

  return (
    <section className="section-blog-slider">
      <motion.div
        className="section-blog-slider__slider-track slider-track"
        ref={scope}
      >
        {visibleSlides &&
          visibleSlides.map((slide) => (
            <SlideBlog slide={slide.value} key={slide.value.id} />
          ))}
      </motion.div>

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
