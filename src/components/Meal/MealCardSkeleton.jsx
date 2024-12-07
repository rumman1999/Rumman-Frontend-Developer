/* eslint-disable react/prop-types */

const MealCardSkeleton = () => {
    return (
      <div className="meal-card bg-gray-200 rounded-lg shadow-lg p-4 animate-pulse">
        <div className="w-full h-32 bg-gray-300 rounded-t-lg"></div>
  
        <div className="mt-4 h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>
      </div>
    );
  };
  
  export default MealCardSkeleton;
  