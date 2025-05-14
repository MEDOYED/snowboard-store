import "./BlogCategoryTags.scss";

const BlogCategoryTags = ({ card }) => {
  return (
    <div className="blog-category-tags">
      {card.categories.map((category, index) => (
        <button type="button" aria-label={category} key={index}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default BlogCategoryTags;
