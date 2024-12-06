/* eslint-disable react/prop-types */

import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

const MealCard = ({ meal }) => {
  const navigate = useNavigate();
  const { setSelectedMeal } = useContext(AppContext);

  // Randomly generate a rating between 1.5 and 4.8
  const rating = (Math.random() * (4.8 - 1.5) + 1.5).toFixed(1);

  // Determine rating color based on value
  const getRatingColor = (rating) => {
    if (rating < 2.5) return "text-red-500"; // Low rating
    if (rating < 3.5) return "text-yellow-500"; // Medium rating
    return "text-green-500"; // Good rating
  };

  const handleNavigate = () => {
    setSelectedMeal(meal?.idMeal);
    navigate(`/meal-detail/${meal?.idMeal}`);
  };

  return (
    <div
      className="meal-card bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
      onClick={handleNavigate}
    >
      <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="mt-4 text-sm font-normal text-center">{meal?.strMeal}</div>

      {/* Rating */}
      <div
        className={`mt-2 text-sm font-bold text-center ${getRatingColor(
          rating
        )}`}
      >
        Rating {rating} ★
      </div>
    </div>
  );
};

export default MealCard;
