import SectionBlogDescription from "./layout/SectionBlogDescription/SectionBlogDescription";
import SectionBlogHero from "./layout/SectionBlogHero/SectionBlogHero";

import "./PageBlogDescription.scss";

const PageBlogDescription = () => {
  return (
    <main className="page-blog-description">
      <SectionBlogHero />
      <SectionBlogDescription />
    </main>
  );
};

export default PageBlogDescription;
