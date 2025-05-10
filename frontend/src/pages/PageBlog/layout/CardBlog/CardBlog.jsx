import { Link } from "react-router-dom";

import img from "/img/blog/1.jpg";

import "./CardBlog.scss";

const CardBlog = () => {
  return (
    <article className="card-blog">
      <img src={img} alt="temp alt" />
      <div className="card-blog__buttons">
        <button>Одежда</button>
        <button>Подборка</button>
      </div>
      <h2>Какую одежду для пробежки выбрать?</h2>
      <h3>Подбираем подходящий аутфит для любой погоды</h3>
      <Link className="card-blog__link">
        <p>Read more</p>
      </Link>
    </article>
  );
};

export default CardBlog;
