/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import MealDetail from "../../pages/MealDetail/MealDetail";

const MealCard = ({ meal }) => {
  const { setSelectedMeal } = useContext(AppContext);
  const [model , setModel] = useState(false)

  const rating = (Math.random() * (4.8 - 1.5) + 1.5).toFixed(1);

  const getRatingColor = (rating) => {
    if (rating < 2.5) return "text-red-500";
    if (rating < 3.5) return "text-yellow-500";
    return "text-green-500"; 
  };

  const handleOpenModel = () => {
    setSelectedMeal(meal?.idMeal);
    setModel(true)
  };

  return (
    <>
    <div
      className="meal-card bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
      onClick={handleOpenModel}
    >
      <img
        src={meal?.strMealThumb}
        alt={meal?.strMeal}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="mt-4 text-sm font-normal text-center">{meal?.strMeal}</div>

      <div
        className={`mt-2 text-sm font-bold text-center ${getRatingColor(
          rating
        )}`}
      >
        Rating {rating} ★
      </div>
    </div>
    {
        model && <MealDetail setModel={setModel}/>
    }
    </>
  );
};

export default MealCard;
