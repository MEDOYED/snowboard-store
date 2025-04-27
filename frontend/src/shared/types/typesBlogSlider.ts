import { ReactNode } from "react";

export type BlogSlide = {
  id: number;
  mediaType: "image" | "video";
  mediaUrl: string;
  mediaAlt: string;
  title: string;
  description: ReactNode;
  link: string;
  backgroundColor: string;
};
