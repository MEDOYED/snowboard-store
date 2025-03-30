import { useState } from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

import TabSidebar from "../../../shared/components/TabSidebar/TabSidebar";
import { faqEntries } from "../../../shared/data/faqEntries";

import "./SectionFaq.scss";

const SectionFaq = () => {
  const params = useParams();
  const [selectedTab, setSelectedTab] = useState(faqEntries[0]);

  const questionsArr = selectedTab.questions;

  const handleClick = (newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <section className="faq-section">
      <TabSidebar entries={faqEntries} onTabChange={handleClick}>
        FAQ Section
      </TabSidebar>
      <div className="faq-section__info">
        <h3 className="faq-section__info-title">{selectedTab.title}</h3>
        <dl className="faq-section__list">
          {questionsArr.map((element) => {
            return (
              <Fragment key={element.question}>
                <dt className="faq-section__list-question">
                  {element.question}
                </dt>
                <dd
                  className="faq-section__list-answer"
                  dangerouslySetInnerHTML={{ __html: element.answer }}
                ></dd>
              </Fragment>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default SectionFaq;
