import { useContext, useEffect, useState } from "react";
import FilterMenu from "../../components/FilterMenu/FilterMenu";
import { AppContext } from "../../context/AppContext";
import MealCardSkeleton from "../../components/Meal/MealCardSkeleton";
import MealCard from "../../components/Meal/MealCard";
import useFetch from "../../hooks/customHooks";
import { calculateTotalPages, paginateData } from "../../helpers/paginationHelper";
import Pagination from "../../components/Pagination/Pagination";

const Landing = () => {
  const {  setMealList , filteredMenu , setFilteredMenu} = useContext(AppContext);

  const { data, loading } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=indian`
  );

  useEffect(() => {
    if (data?.meals) {
      setMealList(data?.meals);
      setFilteredMenu(data?.meals)
    }
  }, [data?.meals]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [currentMeals, setCurrentMeals] = useState([]);
  const itemsPerPage = 10;

  useEffect(() => {
    if (filteredMenu) {
      const total = calculateTotalPages(filteredMenu.length, itemsPerPage);
      setTotalPages(total);

      const meals = paginateData(filteredMenu, currentPage, itemsPerPage);
      setCurrentMeals(meals);
    }
  }, [filteredMenu, currentPage]);

  const handlePaginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1000px] m-auto">
      <FilterMenu />
      <div>
       <div className="min-h-[60vh]">
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <MealCardSkeleton key={index} />
              ))
            : currentMeals?.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} />
              ))}
        </div>
       </div>

        {/* Pagination */}
        {filteredMenu?.length > 0 && !loading && (
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
