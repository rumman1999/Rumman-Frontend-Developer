import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import useFetch from "../../hooks/customHooks";
import MealCardSkeleton from "../../components/Meal/MealCardSkeleton";
import MealCard from "../../components/Meal/MealCard";
import { useNavigate } from "react-router";

const Meals = () => {
  const { selectedCategory } = useContext(AppContext);
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory || "Beef"}`
  );

  const naviagte= useNavigate()

  const handleBack = () => {
    naviagte("/")
  }

  if (error) return <p>{error}</p>;

  return (
    <div>
       <div className="flex justify-between items-center mb-6 p-2">

        <h2 className="text-2xl font-bold">{`Meals for ${selectedCategory}`}</h2>

        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
        >
          Back
        </button>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
              <MealCardSkeleton key={index} />
            ))
          : data?.meals?.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
      </div>
    </div>
  );
};

export default Meals;
