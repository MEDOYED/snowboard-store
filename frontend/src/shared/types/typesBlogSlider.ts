import { ReactNode } from "react";

export type BlogSlide = {
  id: number;
  mediaType: "image" | "video";
  mediaUrl: string;
  title: ReactNode;
  description: ReactNode;
  link: string;
  "background-color": string;
};
