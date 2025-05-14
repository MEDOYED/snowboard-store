interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  discounted_price: number | null;
  discount: string | null;
  image_url: string;
  image_alt: string | null;
  description: string;
  average_rating: string | null;
  created_at: string;
  updated_at: string;
  targeted_at: "men" | "women" | "children" | "unisex";
  brand_name: string;
}

export default Product;
