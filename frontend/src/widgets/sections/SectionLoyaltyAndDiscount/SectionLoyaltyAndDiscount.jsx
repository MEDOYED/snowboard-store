import CardDiscount from "../../../pages/PageHome/ui/CardDiscount/CardDiscount";
import CardLoyalty from "../../../pages/PageHome/ui/CardLoyalty/CardLoyalty";

import "./SectionLoyaltyAndDiscount.scss";

const SectionLoyaltyAndDiscount = () => {
  return (
    <section>
      <CardDiscount />
      <CardLoyalty />
    </section>
  );
};

export default SectionLoyaltyAndDiscount;
