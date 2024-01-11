import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem
          category={category}
          key={category.id}
          cateforyTitle={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
};

export default Directory;
