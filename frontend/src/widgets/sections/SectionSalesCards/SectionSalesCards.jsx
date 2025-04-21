import techGuidePromotion from "../../../app/img/sale-card-imgs/Tech_Guide-Promotion.jpeg";
import flowBoardsPromotion from "../../../app/img/sale-card-imgs/Flow_Boards_promotion.jpeg";
import CardSale from "../../../shared/cards/CardSale/CardSale";

import "./SectionSalesCards.scss";

const SectionSalesCards = ({ numberOfCards }) => {
  return (
    <section className={`section-sales-cards  cards--${numberOfCards}`}>
      {numberOfCards === 2 && (
        <>
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
        </>
      )}

      {numberOfCards === 3 && (
        <>
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
          <CardSale
            imageSrc={flowBoardsPromotion}
            alt="Snowboarder performing trick promotion from Flow Boards"
            saleDesc="Flow Boards promotion"
          />
        </>
      )}
    </section>
  );
};

export default SectionSalesCards;
