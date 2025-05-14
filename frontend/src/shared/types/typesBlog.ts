export type TypeBlog = {
  id: number;
  imgUrl: string;
  imgAlt: string;
  categories: string[];
  title: string;
  subtitle: string;
  readMore: string;
  description: {
    descriptionText: string;
    descriptionImage: string;
  }[];
};
