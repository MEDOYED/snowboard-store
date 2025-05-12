import { useParams } from "react-router-dom";

import dataBlog from "../../../../shared/data/dataBlog";

import "./SectionBlogHero.scss";

const SectionBlogHero = () => {
  const { slug } = useParams();
  console.log(slug);

  const currentCard = dataBlog.find((item) => item.readMore.slice(6) === slug);

  return (
    <section className="section-blog-hero">
      <div>{currentCard.title}</div>
    </section>
  );
};

export default SectionBlogHero;
