import CardDiscount from "../../../pages/PageHome/ui/CardDiscount/CardDiscount";
import CardLoyalty from "../../../pages/PageHome/ui/CardLoyalty/CardLoyalty";

import "./SectionLoyaltyAndDiscount.scss";

const SectionLoyaltyAndDiscount = () => {
  return (
    <section className="section-loyalty-and-discount">
      <CardLoyalty />
      <CardDiscount />
    </section>
  );
};

export default SectionLoyaltyAndDiscount;
