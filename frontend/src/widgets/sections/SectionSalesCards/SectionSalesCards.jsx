import techGuidePromotion from "../../../app/img/sale-card-imgs/Tech_Guide-Promotion.jpeg";
import flowBoardsPromotion from "../../../app/img/sale-card-imgs/Flow_Boards_promotion.jpeg";
import CardSale from "../../../shared/cards/CardSale/CardSale";

import "./SectionSalesCards.scss";

const SectionSalesCards = () => {
  return (
    <section className="section-sales-cards">
      <CardSale
        imageSrc={techGuidePromotion}
        alt="DC snowboard and bindings promotion from Tech Guide"
        saleDesc="TechGuide snowboard promotion"
      />
      <CardSale
        imageSrc={flowBoardsPromotion}
        alt="Snowboarder performing trick promotion from Flow Boards"
        saleDesc="Flow Boards promotion"
      />
    </section>
  );
};

export default SectionSalesCards;
