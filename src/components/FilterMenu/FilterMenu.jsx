import { useEffect, useState } from "react";
import { FaFilter, FaSort } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const FilterMenu = () => {
  const { setMealList, mealList , setFilteredMenu} = useContext(AppContext);
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const [isSortMenuOpen, setSortMenuOpen] = useState(false);

  const [menuData, setMenuData] = useState([]);
  const [selectedItem, setSelectedItem] = useState("Indian");
  const [title , setTitle] = useState("Indian")
  const [sortOption, setSortOption] = useState(null);

  const handleSelection = (item, e) => {
    setSelectedItem(item);
    e.stopPropagation();
  };

  const handleSortSelection = (option, e) => {
    setSortOption(option);
    e.stopPropagation();
  };

  const fetchMenuList = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data?.meals || [];
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const menuListMainFunc = async () => {
    let Area = await fetchMenuList(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );

    Area = Area.map((item) => item.strArea);
    setTitle(selectedItem)
    setMenuData(Area);
  };

  useEffect(() => {
    menuListMainFunc();
  }, []);

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!isFilterMenuOpen);
  };

  const toggleSortMenu = () => {
    setSortMenuOpen(!isSortMenuOpen);
  };

  const fetchFilteredMeals = async () => {
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedItem}`;

    if (url) {
      const meals = await fetchMenuList(url);
      setMealList( meals );
      setFilteredMenu(meals)
    }
    toggleFilterMenu();
  };

  const applySorting = () => {
    if (sortOption && mealList) {
      // Create a shallow copy of mealList to avoid mutating the original state
      const sortedMeals = [...mealList].sort((a, b) => {
        const mealA = a.strMeal.toLowerCase();
        const mealB = b.strMeal.toLowerCase();
        return sortOption === "asc" ? mealA.localeCompare(mealB) : mealB.localeCompare(mealA);
      });
  
      // Update the filteredMenu state with the sorted meals
      setFilteredMenu(sortedMeals);
    }
    toggleSortMenu();
  };
  

  return (
      <>
      <p className="text-white bg-[#FF5200] px-4">Restaurants and Menu Lists Area {title}</p>
    <div className="flex flex-wrap gap-3 p-4 bg-[#FF5200]">
      <div
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-sm relative"
        onClick={toggleFilterMenu}
      >
        <span>Filter</span>
        <FaFilter className="w-5 h-5 text-gray-500" />
        {isFilterMenuOpen && (
          <div
            className="absolute top-12 left-0 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="p-4">
              <li className="mt-4 first:mt-0">
                <div className="flex justify-between items-center cursor-pointer hover:text-blue-500">
                  <span className="font-medium">Select An Area</span>
                  <span
                    className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
                    onClick={fetchFilteredMeals}
                  >
                    Apply
                  </span>
                </div>
                <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-700 max-h-[30vh] overflow-y-auto">
                  {menuData.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id={`menu-item-${index}`}
                        name="menu-items"
                        value={item}
                        checked={selectedItem === item}
                        onChange={(e) => handleSelection(item, e)}
                        className="cursor-pointer"
                      />
                      <label
                        htmlFor={`menu-item-${index}`}
                        className="cursor-pointer hover:text-blue-500"
                      >
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Sort Menu */}
      <div
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-sm relative"
        onClick={toggleSortMenu}
      >
        <span>Sort</span>
        <FaSort className="w-5 h-5 text-gray-500" />
        {isSortMenuOpen && (
          <div
            className="absolute top-12 left-0 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="p-4 space-y-2">
              <li>
                <input
                  type="radio"
                  id="sort-asc"
                  name="sort"
                  value="asc"
                  checked={sortOption === "asc"}
                  onChange={(e) => handleSortSelection("asc", e)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="sort-asc"
                  className="ml-2 cursor-pointer hover:text-blue-500"
                >
                  Ascending
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="sort-desc"
                  name="sort"
                  value="desc"
                  checked={sortOption === "desc"}
                  onChange={(e) => handleSortSelection("desc", e)}
                  className="cursor-pointer"
                />
                <label
                  htmlFor="sort-desc"
                  className="ml-2 cursor-pointer hover:text-blue-500"
                >
                  Descending
                </label>
              </li>
              <button
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
                onClick={applySorting}
              >
                Apply
              </button>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-xs sm:text-sm md:text-base">
        <span>Fast Delivery</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-xs sm:text-sm md:text-base">
        <span>New in Menu</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-xs sm:text-sm md:text-base">
        <span>Rating 4.0+</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-xs sm:text-sm md:text-base">
        <span>Pure Veg</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-xs sm:text-sm md:text-base">
        <span>Offers</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-xs sm:text-sm md:text-base">
        <span>Rs 300- Rs 600</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-xs sm:text-sm md:text-base">
        <span>Less than Rs 300</span>
      </div>
    </div>
      </>
  );
};

export default FilterMenu;
