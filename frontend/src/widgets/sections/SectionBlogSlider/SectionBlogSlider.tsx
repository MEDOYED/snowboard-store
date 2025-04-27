import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { BlogSlide } from "../../../shared/types/typesBlogSlider";
import CircularLinkedList, {
  CircularLinkedListNode,
} from "../../../shared/data-structures/CircularLinkedList";
import SlideBlog from "../../../shared/slides/SlideBlog/SlideBlog";

import "./SectionBlogSlider.scss";

const SectionBlogSlider: React.FC<{ slides: BlogSlide[] }> = ({ slides }) => {
  const [currentSlideNode, setCurrentSlideNode] =
    useState<CircularLinkedListNode<BlogSlide> | null>(null);

  const listRef = useRef<CircularLinkedList<BlogSlide>>(
    new CircularLinkedList(),
  );

  useEffect(() => {
    listRef.current = CircularLinkedList.newFromArray(slides);
    setCurrentSlideNode(listRef.current.getCurrentNode());
  }, []);

  const nextSlide = () => {
    setCurrentSlideNode((prevNode) => prevNode!.next);
  };

  const prevSlide = () => {
    setCurrentSlideNode((prevNode) => prevNode!.prev);
  };

  return (
    <section className="section-blog-slider">
      <div className="section-blog-slider__slider-track slider-track">
        {currentSlideNode && (
          <AnimatePresence mode="popLayout">
            <SlideBlog
              slide={currentSlideNode.value}
              key={currentSlideNode.value.id}
            />
            <SlideBlog
              slide={currentSlideNode.next!.value}
              key={currentSlideNode.next!.value.id}
            />
          </AnimatePresence>
        )}
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
