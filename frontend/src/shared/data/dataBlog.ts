import { titleToSlug } from "../utils/strings/titleToSlug";
import { TypeBlog } from "../types/typesBlog";

const dataBlog: TypeBlog[] = [
  {
    id: 1,
    imgUrl: "/img/blog/1.jpg",
    imgAlt:
      "Man in beige t-shirt and navy shorts performing a running drill, lifting one knee with arms extended.",
    categories: ["Clothes", "Shoes"],
    title: "What kind of jogging clothes to choose?",
    description: "Finding the right outfit for all weathers",
    readMore: "",
  },
  {
    id: 2,
    imgUrl: "/img/blog/2.jpg",
    imgAlt:
      "Man in a black jacket, cap, and green sneakers walking on the sidewalk with a skateboard, urban background with cars and trees.",
    categories: ["Clothes", "Lifestyle"],
    title: "How to Style Casual Streetwear with a Skateboard?",
    description:
      "Discover how to create a stylish, laid-back look with urban streetwear and a skateboard.",
    readMore: "",
  },
  {
    id: 3,
    imgUrl: "/img/blog/3.jpg",
    imgAlt:
      "Two people, one in a bright green ski jacket in deep snow, and another in a black waterproof jacket standing under a tropical rain, showcasing clothing for extreme weather conditions.",
    categories: ["Clothes", "Guide"],
    title: "How to Choose Weatherproof Clothing for Any Condition?",
    description:
      "Learn how to select the best clothing for staying dry and comfortable in snow or heavy rain.",
    readMore: "",
  },
];

dataBlog.forEach((blog) => {
  blog.readMore = `/blog/${titleToSlug(blog.title)}`;
});

export default dataBlog;
