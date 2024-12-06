import { useEffect, useState } from "react";
import { FaFilter, FaSort, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const FilterMenu = () => {
  const { setMealList } = useContext(AppContext); // Get the setter function for updating mealList in the context
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [menuData, setMenuData] = useState({
    Categories: [],
    Area: [],
    Ingredients: [],
  });

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
    let Categories = await fetchMenuList("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    let Area = await fetchMenuList("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    let Ingredients = await fetchMenuList("https://www.themealdb.com/api/json/v1/1/list.php?i=list");

    Categories = Categories.map((item) => item.strCategory);
    Area = Area.map((item) => item.strArea);
    Ingredients = Ingredients.map((item) => item.strIngredient);

    setMenuData({
      Categories: Categories,
      Area: Area,
      Ingredients: Ingredients,
    });
  };

  useEffect(() => {
    menuListMainFunc();
  }, []);

  const toggleFilterMenu = () => {
    setFilterMenuOpen(!isFilterMenuOpen);
    setActiveSubmenu(""); // Reset submenu on toggle
  };

  const toggleSubmenu = (menuName, e) => {
    e.stopPropagation();
    setActiveSubmenu((prev) => (prev === menuName ? "" : menuName));
  };

  // Function to fetch meals based on the selected filter
  const fetchFilteredMeals = async (filterType, filterValue) => {
    let url = "";
    if (filterType === "Categories") {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${filterValue}`;
    } else if (filterType === "Area") {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${filterValue}`;
    } else if (filterType === "Ingredients") {
      url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filterValue}`;
    }

    if (url) {
      const meals = await fetchMenuList(url);
      setMealList({ meals }); // Update the meal list in the context
    }
  };

  return (
    <div className="flex flex-wrap gap-3 p-4 bg-stone-100">
      <div
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-sm relative"
        onClick={toggleFilterMenu}
      >
        <span>Filter</span>
        <FaFilter className="w-5 h-5 text-gray-500" />
        {isFilterMenuOpen && (
          <div className="absolute top-12 left-0 w-72 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
            <ul className="p-4">
              {/* Dynamic Submenu Rendering */}
              {Object.keys(menuData).map((menu) => (
                <li key={menu} className="mt-4 first:mt-0">
                  <div
                    className="flex justify-between items-center cursor-pointer hover:text-blue-500"
                    onClick={(e) => toggleSubmenu(menu, e)}
                  >
                    <span className="font-medium">{menu}</span>
                    {activeSubmenu === menu ? (
                      <FaChevronUp className="w-4 h-4 text-gray-600" />
                    ) : (
                      <FaChevronDown className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  {activeSubmenu === menu && menuData[menu].length > 0 && (
                    <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-700 max-h-[15vh] overflow-y-auto">
                      {menuData[menu].map((item, index) => (
                        <li
                          key={index}
                          className="cursor-pointer hover:text-blue-500"
                          onClick={() => fetchFilteredMeals(menu, item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Other filter options */}
      <div className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 bg-gray-100 rounded-full border border-gray-300 shadow-sm hover:shadow-md cursor-pointer text-xs sm:text-sm md:text-base">
        <span>Sort</span>
        <FaSort className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-500" />
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
  );
};

export default FilterMenu;
