import { useParams } from "react-router-dom";

import techGuidePromotion from "../../../app/img/sale-card-imgs/Tech_Guide-Promotion.jpeg";
import flowBoardsPromotion from "../../../app/img/sale-card-imgs/Flow_Boards_promotion.jpeg";
import CardSale from "../../../shared/cards/CardSale/CardSale";

import dataNavigation from "../../../shared/data/dataNavigation";

import "./SectionSalesCards.scss";

const SectionSalesCards = ({ numberOfCards }) => {
  const { parentSlug } = useParams();

  let parentSlugCapitalized;
  if (parentSlug) {
    parentSlugCapitalized = parentSlug[0].toUpperCase() + parentSlug.slice(1);
  }

  const currentNavItem = dataNavigation.find((item) => item.navItem === parentSlugCapitalized);

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

      {numberOfCards === 3 && currentNavItem?.CardSale && (
        <>
          {currentNavItem.CardSale.map((elem, index) => (
            <CardSale
              key={index}
              imageSrc={elem.imageSrc}
              alt={elem.alt}
              saleDesc={elem.saleDesc}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default SectionSalesCards;
