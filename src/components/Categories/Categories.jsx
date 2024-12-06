import  { useState } from "react";
import useFetch from "../../hooks/customHooks";
import CategoryCard from "./CategoryCard";
import Pagination from "../../components/Pagination/Pagination"; // Import your reusable pagination component
import { paginateData, calculateTotalPages } from "../../helpers/paginationHelper"; // Import helper functions

const Categories = () => {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const itemsPerPage = 5; // Number of cards per page

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Paginated data
  const currentCategories = paginateData(data.categories, currentPage, itemsPerPage);
  const totalPages = calculateTotalPages(data.categories.length, itemsPerPage);

  // Update the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="categories">
      <h2 className="text-2xl font-bold mb-6">Meal Categories</h2>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
  {currentCategories.map((category, index) => (
    <CategoryCard key={index} category={category} />
  ))}
</div>

     
    </div>
  );
};

export default Categories;
