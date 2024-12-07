import { useState } from "react";
import { useFetchCategories } from "../../hooks/useFetchCategories"; 
import CategoryCard from "./CategoryCard";
import Pagination from "../../components/Pagination/Pagination";
import { paginateData, calculateTotalPages } from "../../helpers/paginationHelper";
import CategoryCardSkeleton from "./CategoryCardSkeleton";
import { useNavigate } from "react-router";

const Categories = () => {
  const navigate = useNavigate();
  const { categories, loading, error } = useFetchCategories(); 

  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 5;

  if (loading)
    return (
      <div className="max-w-[1000px] m-auto w-[100%]">
        <h2 className="text-2xl font-bold mb-6">Meal Categories</h2>
        <CategoryCardSkeleton />
      </div>
    );
  if (error) return <p>{error}</p>;

  const currentCategories = paginateData(categories, currentPage, itemsPerPage);
  const totalPages = calculateTotalPages(categories.length, itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="p-2 max-w-[1000px] m-auto">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-medium mb-6">Meal Categories</div>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition duration-200"
        >
          Back
        </button>
      </div>
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
