import { useParams } from "react-router-dom";
import "./PageProduct.scss";

const PageProduct = () => {
  const params = useParams();

  return (
    <div className="product-page">
      <p>This si product page wit a slug of: {params.productSlug}</p>
    </div>
  );
};

export default PageProduct;
