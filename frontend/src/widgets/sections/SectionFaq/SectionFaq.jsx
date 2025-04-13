import { useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

import TabSidebar from "../../../shared/components/TabSidebar/TabSidebar";
import { faqEntries } from "../../../shared/data/faqEntries";

import "./SectionFaq.scss";

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
        <TabSidebar entries={faqEntries} onTabChange={handleClick} selectedTab={selectedTab}>
          FAQ Section
        </TabSidebar>
      </div>

      <div className="faq-section__info info">
        <h3 className="info__title">{selectedTab.title}</h3>

        <dl className="info__list">
          {questionsArr.map((element) => {
            return (
              <Fragment key={element.question}>
                <dt className="info__list question">{element.question}</dt>

                <dd className="info__list answer">{element.answer}</dd>
              </Fragment>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default SectionFaq;
