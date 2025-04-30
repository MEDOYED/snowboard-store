import { useEffect, useRef, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { BlogSlide } from "../../../shared/types/typesBlogSlider";
import CircularLinkedList, {
  CircularLinkedListNode,
} from "../../../shared/data-structures/CircularLinkedList";
import SlideBlog from "../../../shared/slides/SlideBlog/SlideBlog";

import "./SectionBlogSlider.scss";

type VisibleSlides<T> = NodeAndKey<T>[];

type NodeAndKey<T> = {
  node: CircularLinkedListNode<T>;
  key: number;
};

const SectionBlogSlider: React.FC<{ slides: BlogSlide[] }> = ({ slides }) => {
  const [visibleSlides, setVisibleSlides] =
    useState<VisibleSlides<BlogSlide> | null>(null);

  const listRef = useRef<CircularLinkedList<BlogSlide>>(
    new CircularLinkedList(),
  );
  const [scope, animate] = useAnimate();
  /** used to center slider only once, when visibleSlides is populated */
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    listRef.current = CircularLinkedList.newFromArray(slides);
    const currentNode = listRef.current.getCurrentNode();

    const slidesArr: VisibleSlides<BlogSlide> = [
      { node: currentNode.prev!, key: currentNode.prev!.id! },
      { node: currentNode, key: currentNode.id! },
      { node: currentNode.next!, key: currentNode.next!.id! },
    ];

    setVisibleSlides(slidesArr);
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
        // TODO: make this animation on scroll ?
        animate(scope.current, { x: -slideWidth }, { duration: 0 });
      }

      hasAnimated.current = true;
    }
  }, [visibleSlides]);

  const nextSlide = async () => {
    const slideWidth = getSlideWidth()!;

    setVisibleSlides((prevVisibleSlides) => {
      const nextNextSlide =
        prevVisibleSlides![prevVisibleSlides!.length - 1].node.next!;
      const visibleSlides = [
        ...prevVisibleSlides!,
        { node: nextNextSlide, key: nextNextSlide.id! + Math.random() },
      ];

      return visibleSlides;
    });

    // a prayer to god
    await new Promise((resolve) => requestAnimationFrame(resolve));

    await animate(
      scope.current,
      { x: -2 * slideWidth },
      { type: "spring", stiffness: 300, damping: 30 },
    );

    setVisibleSlides((prevVisibleSlides) => {
      const prevVisibleSlidesCopy = [...prevVisibleSlides!];
      prevVisibleSlidesCopy.shift();

      return prevVisibleSlidesCopy;
    });

    await animate(scope.current, { x: -slideWidth }, { duration: 0 });
  };

  const prevSlide = async () => {
    const slideWidth = getSlideWidth()!;

    setVisibleSlides((prevVisibleSlides) => {
      const prevPrevSlide = prevVisibleSlides![0].node.prev!;
      const visibleSlides = [
        { node: prevPrevSlide, key: prevPrevSlide.id! + Math.random() },
        ...prevVisibleSlides!,
      ];

      return visibleSlides;
    });

    // a prayer to god
    // await new Promise((resolve) => requestAnimationFrame(resolve));

    // TODO: MAKE THE prevSlide WORK PROPERLY
    await animate(scope.current, { x: -2 * slideWidth }, { duration: 0 });

    await animate(
      scope.current,
      { x: -slideWidth },
      { type: "spring", stiffness: 300, damping: 30 },
    );

    setVisibleSlides((prevVisibleSlides) => {
      const prevVisibleSlidesCopy = [...prevVisibleSlides!];
      prevVisibleSlidesCopy.pop();

      return prevVisibleSlidesCopy;
    });
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

  // const prevSlide = async () => {
  //   const slideWidth = getSlideWidth();
  //   slideDirectionRef.current = "prev";
  //
  //   await animate(
  //     scope.current,
  //     { x: 0 },
  //     { type: "spring", stiffness: 300, damping: 30 },
  //   );
  //
  //   rotateBuffer();
  //
  //   await animate(scope.current, { x: -slideWidth! }, { duration: 0 });
  // };

  // const rotateBuffer = (): void => {
  //   if (slideDirectionRef.current === "next") {
  //     setVisibleSlides((prevVisibleSlides) => {
  //       const [, current, next] = prevVisibleSlides!;
  //
  //       return [current, next, next.next!];
  //     });
  //   } else if (slideDirectionRef.current === "prev") {
  //     setVisibleSlides((prevVisibleSlides) => {
  //       const [prev, current] = prevVisibleSlides!;
  //
  //       return [prev.prev!, prev, current];
  //     });
  //   }
  // };

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
          visibleSlides.map((slideWithKey) => (
            <SlideBlog slide={slideWithKey.node.value} key={slideWithKey.key} />
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
