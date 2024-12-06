/* eslint-disable react/prop-types */
import { useFetchMealDetail } from "../../hooks/useFetchMealDetail";
import MealDetailSkeleton from "./MealDetailSkeleton"; 

const MealDetails = ({ selectedMeal }) => {
  const { meal, loading, error } = useFetchMealDetail(selectedMeal); 

  if (loading) return <MealDetailSkeleton />;
  if (error) return <p>{error}</p>;

  return (
    <div className="h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6 p-2">
        <h2 className="text-xl font-semibold">{`Meal: ${meal.strMeal}`}</h2>
      </div>

      <div className="meal-detail-container max-w-4xl mx-auto p-6">
        <div className="meal-detail bg-white p-6 rounded-lg shadow-lg">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-56 object-cover rounded-lg"
          />
          <h2 className="mt-4 text-2xl font-semibold text-center">{meal.strMeal}</h2>
          <p className="mt-2 text-lg text-center">{meal.strCategory}</p>
          <p className="mt-1 text-md text-center text-gray-600">{meal.strArea}</p>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
            <ul className="list-disc pl-6 space-y-2">
              {[...Array(20)].map((_, index) => {
                const ingredient = meal[`strIngredient${index + 1}`];
                const measure = meal[`strMeasure${index + 1}`];
                if (ingredient) {
                  return (
                    <li key={index} className="text-sm">
                      {measure} {ingredient}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Instructions</h3>
            <p className="text-sm">{meal.strInstructions}</p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Video Tutorial</h3>
            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                Watch on YouTube
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
