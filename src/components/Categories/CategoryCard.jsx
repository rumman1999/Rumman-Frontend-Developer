/* eslint-disable react/prop-types */

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out">
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <h3 className="mt-4 text-lg font-semibold text-center">{category.strCategory}</h3>
    </div>
  );
};

export default CategoryCard;
