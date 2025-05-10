import SectionFilterBlog from "./layout/SectionFilterBlog/SectionFilterBlog";
import SectionBlogCards from "./layout/SectionBlogCards/SectionBlogCards";

import "./PageBlog.scss";

const PageBlog = () => {
  return (
    <main className="page-blog">
      <SectionFilterBlog />
      <SectionBlogCards />
    </main>
  );
};

export default PageBlog;
