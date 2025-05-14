import { useParams } from "react-router-dom";

import dataBlog from "../../../../shared/data/dataBlog";

import "./SectionBlogDescription.scss";

const SectionBlogDescription = () => {
  const { slug } = useParams();

  const blog = dataBlog.find((item) => item.readMore.slice(6) === slug);
  if (!blog) return null;

  return (
    <section>
      {blog.description.map((blog, index) => (
        <div key={index}>
          <p>{blog.descriptionText}</p>
          {blog.descriptionImage && <img src={blog.descriptionImage} alt="temt text" />}
        </div>
      ))}
    </section>
  );
};

export default SectionBlogDescription;
