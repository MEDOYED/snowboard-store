import { useParams } from "react-router-dom";

import dataBlog from "../../../../shared/data/dataBlog";

import "./SectionBlogHero.scss";

const SectionBlogHero = () => {
  const { slug } = useParams();

  const currentCard = dataBlog.find((item) => item.readMore.slice(6) === slug);

  return (
    <section className="section-blog-hero">
      <img
        className="section-blog-hero__image-bg"
        src={currentCard.imgUrl}
        alt={currentCard.imgAlt}
      />
      <div className="section-blog-hero__content">
        <button>buttons</button>
        <div className="title">
          <div className="title__background">
            <h2>{currentCard.title}</h2>
          </div>
        </div>
        <p className="desctiption">{currentCard.description}</p>
      </div>
    </section>
  );
};

export default SectionBlogHero;
