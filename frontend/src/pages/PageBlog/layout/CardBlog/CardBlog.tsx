import { Link } from "react-router-dom";
import { FC } from "react";

import { TypeBlog } from "../../../../shared/types/typesBlog";
import "./CardBlog.scss";

type PropsCardBlog = {
  card: TypeBlog;
};

const CardBlog: FC<PropsCardBlog> = ({ card }) => {
  return (
    <article className="card-blog">
      <img src={card.imgUrl} alt={card.imgUrl || "Image description"} />
      <div className="card-blog__buttons">
        {card.categories.map((category, index) => (
          <button type="button" aria-label={category} key={index}>
            {category}
          </button>
        ))}
      </div>
      <h2>{card.title}</h2>
      <h3>{card.description}</h3>
      <Link to={card.readMore} className="card-blog__link">
        <p>Read more</p>
      </Link>
    </article>
  );
};

export default CardBlog;
