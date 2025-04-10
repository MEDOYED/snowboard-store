import ButtonJoinClub from "../ButtonJoinClub/ButtonJoinClub";

import loyaltyImg from "../../assets/img/loyalty-img.png";
import loyatyLogo from "../../assets/img/loyalty-logo.png";

import "./CardLoyalty.scss";

const CardLoyalty = () => {
  return (
    <article className="card-loyalty">
      <img className="card-loyalty__background" src={loyaltyImg} alt="banner image" />
      <div className="card-loyalty__content">
        <img className="card-loyalty__content-logo" src={loyatyLogo} alt="logo image" />
        <h2 className="card-loyalty__content-title">Loyalty program</h2>
        <p className="card-loyalty__content-text">Earn points and enjoy benefits</p>
        <ButtonJoinClub />
      </div>
    </article>
  );
};

export default CardLoyalty;
