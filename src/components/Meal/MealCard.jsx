/* eslint-disable react/prop-types */

import { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

const MealCard = ({ meal }) => {
    const navigate = useNavigate()
    const {setSelectedMeal} = useContext(AppContext)

    const handleNavigate = () => {
        setSelectedMeal(meal?.idMeal)
        navigate(`/meal-detail/${meal?.idMeal}`)
    }
    return (
      <div className="meal-card bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer" onClick={handleNavigate}>
        <img
          src={meal?.strMealThumb}
          alt={meal?.strMeal}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <h3 className="mt-4 text-lg font-semibold text-center">{meal?.strMeal}</h3>
      </div>
    );
  };
  
  export default MealCard;
  