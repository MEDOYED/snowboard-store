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

  const [sliderTrackRef, animate] = useAnimate<HTMLDivElement>();

  const createNodeAndKey = <T,>(
    node: CircularLinkedListNode<T>,
  ): NodeAndKey<T> => ({
    node,
    key: node.id! + Math.random(),
  });

  useEffect(() => {
    listRef.current = CircularLinkedList.newFromArray(slides);
    const currentNode = listRef.current.getCurrentNode();

    const slidesArr: VisibleSlides<BlogSlide> = [
      createNodeAndKey(currentNode.prev!.prev!),
      createNodeAndKey(currentNode.prev!),

      { node: currentNode, key: currentNode.id! },

      createNodeAndKey(currentNode.next!),
      createNodeAndKey(currentNode.next!.next!),
    ];

    setVisibleSlides(slidesArr);
  }, [slides]);

  const getSlideWidth: () => number | null = () => {
    const slide = sliderTrackRef.current?.querySelector(
      ".slide-blog",
    ) as HTMLElement | null;

    if (slide) {
      return slide.offsetWidth;
    } else return null;
  };

  /** Calculate offset to center the current slide in the track (middle of 5) */
  const getSliderTrackCenterOffset = (): number => {
    return -2 * getSlideWidth()!;
  };

  /**
   * Maintans offsetX for sliderTrack on resize
   * keeping it at the center of visibleSlides
   *
   * - may have a better have a beter solution
   */
  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;
    if (!sliderTrack) return;

    const resizeObserver = new ResizeObserver(() => {
      animate(
        sliderTrack,
        { x: getSliderTrackCenterOffset() },
        { duration: 0 },
      );
    });

    resizeObserver.observe(sliderTrack);

    return () => resizeObserver.disconnect();
  }, [sliderTrackRef]);

  const nextSlide = async () => {
    const slideWidth = getSlideWidth()!;

    await animate(
      sliderTrackRef.current,
      { x: getSliderTrackCenterOffset() - slideWidth },
      { type: "spring", stiffness: 300, damping: 30 },
    );

    setVisibleSlides((prevVisibleSlides) => {
      const prevVisibleSlidesCopy = [...prevVisibleSlides!];
      prevVisibleSlidesCopy.shift();

      const prevLastSlide =
        prevVisibleSlidesCopy[prevVisibleSlidesCopy.length - 1];
      const newLastSlide: NodeAndKey<BlogSlide> = createNodeAndKey(
        prevLastSlide.node.next!,
      );

      return [...prevVisibleSlidesCopy, newLastSlide];
    });

    await animate(
      sliderTrackRef.current,
      { x: getSliderTrackCenterOffset() },
      { duration: 0 },
    );
  };

  const prevSlide = async () => {
    const slideWidth = getSlideWidth()!;

    await animate(
      sliderTrackRef.current,
      { x: slideWidth + getSliderTrackCenterOffset() },
      { type: "spring", stiffness: 300, damping: 30 },
    );

    setVisibleSlides((prevVisibleSlides) => {
      const prevVisibleSlidesCopy = [...prevVisibleSlides!];
      prevVisibleSlidesCopy.pop();

      const prevFirstSlide = prevVisibleSlidesCopy[0];
      const newFirstSlide: NodeAndKey<BlogSlide> = createNodeAndKey(
        prevFirstSlide.node.prev!,
      );

      return [newFirstSlide, ...prevVisibleSlidesCopy];
    });

    await animate(
      sliderTrackRef.current,
      { x: getSliderTrackCenterOffset() },
      { duration: 0 },
    );
  };

  return (
    <section className="section-blog-slider">
      <motion.div
        className="section-blog-slider__slider-track slider-track"
        ref={sliderTrackRef}
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
