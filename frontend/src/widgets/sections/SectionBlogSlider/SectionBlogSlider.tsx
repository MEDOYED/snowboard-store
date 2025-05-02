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

  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    listRef.current = CircularLinkedList.newFromArray(slides);
    const currentNode = listRef.current.getCurrentNode();

    const slidesArr: VisibleSlides<BlogSlide> = [
      {
        node: currentNode.prev!.prev!,
        key: currentNode.prev!.prev!.id! + Math.random(),
      },
      { node: currentNode.prev!, key: currentNode.prev!.id! + Math.random() },
      { node: currentNode, key: currentNode.id! },
      { node: currentNode.next!, key: currentNode.next!.id! + Math.random() },
      {
        node: currentNode.next!.next!,
        key: currentNode.next!.next!.id! + Math.random(),
      },
    ];

    setVisibleSlides(slidesArr);
  }, [slides]);

  const getSlideWidth: () => number | null = () => {
    const slide = scope.current?.querySelector(
      ".slide-blog",
    ) as HTMLElement | null;

    if (slide) {
      return slide.offsetWidth;
    } else return null;
  };

  /** calculates offsetX for the sliderTrack, needed to keep it centered */
  const sliderTractStartingPosition = (): number => {
    return -2 * getSlideWidth()!;
  };

  /**
   * Maintans offsetX for sliderTrack on resize
   * keeping it at the center of visibleSlides
   *
   * - may have a better have a beter solution
   */
  useEffect(() => {
    const sliderTrack = scope.current;
    if (!sliderTrack) return;

    const resizeObserver = new ResizeObserver(() => {
      animate(
        sliderTrack,
        { x: sliderTractStartingPosition() },
        { duration: 0 },
      );
    });

    resizeObserver.observe(sliderTrack);

    return () => resizeObserver.disconnect();
  }, [scope]);

  const nextSlide = async () => {
    const slideWidth = getSlideWidth()!;

    await animate(
      scope.current,
      { x: sliderTractStartingPosition() - slideWidth },
      { type: "spring", stiffness: 300, damping: 30 },
    );

    setVisibleSlides((prevVisibleSlides) => {
      const prevVisibleSlidesCopy = [...prevVisibleSlides!];
      prevVisibleSlidesCopy.shift();

      const prevLastSlide =
        prevVisibleSlidesCopy[prevVisibleSlidesCopy.length - 1];
      const newLastSlide: NodeAndKey<BlogSlide> = {
        node: prevLastSlide.node.next!,
        key: prevLastSlide.node.next!.id! + Math.random(),
      };

      return [...prevVisibleSlidesCopy, newLastSlide];
    });

    await animate(
      scope.current,
      { x: sliderTractStartingPosition() },
      { duration: 0 },
    );
  };

  const prevSlide = async () => {
    const slideWidth = getSlideWidth()!;

    await animate(
      scope.current,
      { x: slideWidth + sliderTractStartingPosition() },
      { type: "spring", stiffness: 300, damping: 30 },
    );

    setVisibleSlides((prevVisibleSlides) => {
      const prevVisibleSlidesCopy = [...prevVisibleSlides!];
      prevVisibleSlidesCopy.pop();

      const prevFirstSlide = prevVisibleSlidesCopy[0];
      const newFirstSlide: NodeAndKey<BlogSlide> = {
        node: prevFirstSlide.node.prev!,
        key: prevFirstSlide.node.prev!.id! + Math.random(),
      };

      return [newFirstSlide, ...prevVisibleSlidesCopy];
    });

    await animate(
      scope.current,
      { x: sliderTractStartingPosition() },
      { duration: 0 },
    );
  };

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
