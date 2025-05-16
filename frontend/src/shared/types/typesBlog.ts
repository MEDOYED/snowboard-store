export type TypeBlog = {
  id: number;
  imgUrl: string;
  imgAlt: string;
  categories: string[];
  title: string;
  subtitle: string;
  readMore: string;
  description: {
    descriptionTitle: string;
    descriptionText: string;
    descriptionImage: string;
  }[];
};
