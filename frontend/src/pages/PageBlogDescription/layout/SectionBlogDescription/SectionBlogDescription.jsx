import { useParams } from "react-router-dom";

import dataBlog from "../../../../shared/data/dataBlog";

import "./SectionBlogDescription.scss";

const SectionBlogDescription = () => {
  const { slug } = useParams();

  const blog = dataBlog.find((item) => item.readMore.slice(6) === slug);
  if (!blog) return null;

  return (
    <section className="section-blog-description">
      {blog.description.map((blog, index) => (
        <div className="section-blog-description__content-block" key={index}>
          {blog.descriptionTitle && <h2>{blog.descriptionTitle}</h2>}
          {blog.descriptionText && <p>{blog.descriptionText}</p>}
          {blog.descriptionImage && <img src={blog.descriptionImage} alt="temt text" />}
        </div>
      ))}
    </section>
  );
};

export default SectionBlogDescription;
