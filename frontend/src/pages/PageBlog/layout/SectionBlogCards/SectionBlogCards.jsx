import CardBlog from "../CardBlog/CardBlog";

import dataBlog from "../../../../shared/data/dataBlog";

import "./SectionBlogCards.scss";

const SectionBlogCards = () => {
  return (
    <section className="section-blog-cards">
      {dataBlog.map((card) => (
        <CardBlog key={card.id} card={card} />
      ))}
    </section>
  );
};

export default SectionBlogCards;
