import "./CardSale.scss";

const CardSale = ({ imageSrc, alt, saleDesc }) => {
  return (
    <figure className="card-sale">
      <a href="#">
        <div className="card-sale__img-wrapper">
          <img src={imageSrc} alt={alt} className="card-sale__img" />
        </div>
        <figcaption className="card-sale__sale-description">
          {saleDesc}
        </figcaption>
      </a>
    </figure>
  );
};

export default CardSale;
