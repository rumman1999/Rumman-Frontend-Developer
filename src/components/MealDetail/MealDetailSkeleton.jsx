/* eslint-disable react/prop-types */

const MealDetailSkeleton = () => {
    return (
      <div className="meal-detail bg-gray-200 p-6 animate-pulse rounded-lg shadow-lg">
        {/* Image Placeholder */}
        <div className="w-full h-56 bg-gray-300 rounded-lg"></div>
        {/* Title Placeholder */}
        <div className="mt-4 h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
        {/* Ingredients and Instructions Placeholder */}
        <div className="mt-4 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
        </div>
      </div>
    );
  };
  
  export default MealDetailSkeleton;
  