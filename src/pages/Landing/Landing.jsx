import { useContext, useEffect, useState } from "react";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import { AppContext } from "../../context/AppContext";
import MealCardSkeleton from "../../components/Meal/MealCardSkeleton";
import MealCard from "../../components/Meal/MealCard";
import useFetch from "../../hooks/customHooks";
import { calculateTotalPages, paginateData } from "../../helpers/paginationHelper";
import Pagination from "../../components/Pagination/Pagination";

const Landing = () => {
  const { mealList, setMealList } = useContext(AppContext);

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=indian`
  );

  useEffect(() => {
    if (data) {
      setMealList(data);
    }
  }, [data]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentMeals, setCurrentMeals] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    if (mealList?.meals) {
      const total = calculateTotalPages(mealList.meals.length, itemsPerPage);
      setTotalPages(total);

      const meals = paginateData(mealList.meals, currentPage, itemsPerPage);
      setCurrentMeals(meals);
    }
  }, [mealList, currentPage]);

  const handlePaginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div>
      <FilterMenu />
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <MealCardSkeleton key={index} />
              ))
            : currentMeals?.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
              ))}
        </div>

        {/* Pagination */}
        {mealList?.meals?.length > 0 && !loading && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={handlePaginate}
          />
        )}
      </div>
    </div>
  );
};

export default Landing;
