import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { BlogSlide } from "../../../shared/types/typesBlogSlider";
import CircularLinkedList, {
  CircularLinkedListNode,
} from "../../../shared/data-structures/CircularLinkedList";
import SlideBlog from "../../../shared/slides/SlideBlog/SlideBlog";

import "./SectionBlogSlider.scss";

type VisibleSlides<T> = CircularLinkedListNode<T>[];

// type VisibleSlides<T> = [
//   CircularLinkedListNode<T>,
//   CircularLinkedListNode<T>,
//   CircularLinkedListNode<T>,
// ];

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
  /** used to center slider only once, when visibleSlides is populated */
  const hasAnimated = useRef<boolean>(false);
  /** flag for next/prev slide functions */
  const needsAnimating = useRef<boolean>(false);

  // const sliderRef = useRef<HTMLDivElement | null>(null);
  // const isAnimating = useRef<boolean>(true);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    listRef.current = CircularLinkedList.newFromArray(slides);
    const currentNode = listRef.current.getCurrentNode();

    setVisibleSlides([currentNode.prev!, currentNode, currentNode.next!]);
  }, [slides]);

  const getSlideWidth: () => number | null = () => {
    const slide = scope.current?.querySelector(
      ".slide-blog",
    ) as HTMLElement | null;
    return slide ? slide.offsetWidth : null;
  };

  useEffect(() => {
    if (!hasAnimated.current && visibleSlides !== null) {
      const slideWidth = getSlideWidth();

      if (slideWidth) {
        animate(scope.current, { x: -slideWidth }, { duration: 0 });
      }

      hasAnimated.current = true;
    }
  }, [visibleSlides]);

  const nextSlide = async () => {
    const slideWidth = getSlideWidth()!;
    // slideDirectionRef.current = "next";
    // needsAnimating.current = true;

    setVisibleSlides((prevVisibleSlides) => {
      const nextNextSlide =
        prevVisibleSlides![prevVisibleSlides!.length - 1].next!;

      // nextNextSlide.value.id = crypto.randomUUID();

      return [...prevVisibleSlides!, nextNextSlide];
    });

    await new Promise((resolve) => requestAnimationFrame(resolve));

    await animate(
      scope.current,
      { x: -2 * slideWidth },
      { type: "spring", stiffness: 300, damping: 30 },
    );

    setVisibleSlides((prevVisibleSlides) => {
      const copy = [...prevVisibleSlides!];
      copy.shift();

      return copy;
    });

    // await new Promise((resolve) => requestAnimationFrame(resolve));

    await animate(scope.current, { x: -slideWidth }, { duration: 0 });
  };

  // const nextSlide = async () => {
  //   const slideWidth = getSlideWidth();
  //   slideDirectionRef.current = "next";
  //   needsAnimating.current = true;
  //
  //   setVisibleSlides((prevVisibleSlides) => {
  //     const [, current, next] = prevVisibleSlides!;
  //
  //     return [current, next, next.next!];
  //   });

  // await new Promise((resolve) => requestAnimationFrame(resolve));

  // await animate(scope.current, { x: 0 }, { duration: 0 });
  //
  // await animate(
  //   scope.current,
  //   { x: -slideWidth! },
  //   { type: "spring", stiffness: 300, damping: 30 },
  // );

  // rotateBuffer();

  // await animate(scope.current, { x: -slideWidth! }, { duration: 0 });
  // };

  // useEffect(() => {
  //   console.log("visibleSlides now:", visibleSlides);
  // }, [visibleSlides]);
  //
  // useEffect(() => {
  //   if (!needsAnimating.current) return;
  //
  //   const playAnimation = async () => {
  //     const slideWidth = getSlideWidth();
  //
  //     await animate(scope.current, { x: 0 }, { duration: 0 });
  //     console.log("useEffect called");
  //
  //     await animate(
  //       scope.current,
  //       { x: -slideWidth! },
  //       { type: "spring", stiffness: 300, damping: 30 },
  //     );
  //   };
  //
  //   playAnimation();
  //   needsAnimating.current = false;
  // }, [visibleSlides]);

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
          visibleSlides.map((slide, i) => (
            <SlideBlog
              slide={slide.value}
              key={i === 4 ? slide.value.id : slide.value.id + Math.random()}
            />
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
