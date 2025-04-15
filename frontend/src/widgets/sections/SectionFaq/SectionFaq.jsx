import { useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { motion, AnimatePresence } from "motion/react";

import TabSidebar from "../../../shared/components/TabSidebar/TabSidebar";
import { faqEntries } from "../../../shared/data/faqEntries";

import "./SectionFaq.scss";

const faqSectionInfoVariants = {
  initial: { y: -30, opacity: 0 },
  animate: {
    y: 30,
    opacity: 1,
    // we technicly dont need staggerChildren on every element
    // so you can write it better
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const SectionFaq = () => {
  // TODO:
  // configure useParams
  const params = useParams();
  const [selectedTab, setSelectedTab] = useState(faqEntries[0]);

  const questionsArr = selectedTab.questions;

  const handleClick = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <section className="faq-section">
      <div className="faq-section__sidebar">
        <TabSidebar
          entries={faqEntries}
          onTabChange={handleClick}
          selectedTab={selectedTab}
        >
          FAQ Section
        </TabSidebar>
      </div>

      <motion.div
        className="faq-section__info info"
        key={selectedTab.title}
        variants={{
          initial: {},
          animate: { transition: { staggerChildren: 0.1 } },
        }}
        initial="initial"
        animate="animate"
      >
        <motion.h3 className="info__title" variants={faqSectionInfoVariants}>
          {selectedTab.title}
        </motion.h3>

        <motion.dl className="info__list" variants={faqSectionInfoVariants}>
          {questionsArr.map((element) => {
            return (
              <Fragment key={element.question}>
                <motion.dt
                  className="info__list question"
                  variants={faqSectionInfoVariants}
                >
                  {element.question}
                </motion.dt>

                <motion.dd
                  className="info__list answer"
                  variants={faqSectionInfoVariants}
                >
                  {element.answer}
                </motion.dd>
              </Fragment>
            );
          })}
        </motion.dl>
      </motion.div>
    </section>
  );
};

export default SectionFaq;
