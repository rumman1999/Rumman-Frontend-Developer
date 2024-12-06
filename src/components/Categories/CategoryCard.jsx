/* eslint-disable react/prop-types */

import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

const CategoryCard = ({ category }) => {
    const navigate = useNavigate()
    const {setSelectedCategory} = useContext(AppContext)

    const handleCardSelection = () => {
        console.log(category.strCategory)
        setSelectedCategory(category.strCategory)
        navigate("/meals")
    }

  return (
    <div className="category-card bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer" onClick={handleCardSelection}>
      <img
        src={category?.strCategoryThumb}
        alt={category?.strCategory}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <h3 className="mt-4 text-lg font-semibold text-center">{category?.strCategory}</h3>
    </div>
  );
};

export default CategoryCard;
