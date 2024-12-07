import { useContext, useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { mealList, setFilteredMenu } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };


  // Debounce the search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchInput(searchInput.trim());
    }, 300); // Debounce delay (in ms)

    return () => clearTimeout(timer); // Clear timeout on component unmount or input change
  }, [searchInput]);

  // Filter mealList when the debounced value changes
  useEffect(() => {
    if (debouncedSearchInput) {
      const filteredList = mealList?.meals?.filter((meal) =>
        meal?.strMeal?.toLowerCase().includes(debouncedSearchInput.toLowerCase())
      );
      setFilteredMenu(filteredList);
    } else {
      setFilteredMenu(mealList); // Reset to full list when input is cleared
    }
  }, [debouncedSearchInput, mealList, setFilteredMenu]);

  return (
    <div className="bg-[#ff5200] shadow-md px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between text-white max-w-[1000px] m-auto w-[100%]">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
      <img src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" />
      </div>

      <div className="relative flex items-center w-full sm:w-auto mt-3 sm:mt-0">
        <input
          className="w-full sm:w-64 md:w-80 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:outline-none transition duration-300 text-sm sm:text-base text-black"
          placeholder="Search for restaurants and food"
          value={searchInput}
          onChange={handleInputChange}
        />
        <span className="absolute right-3 text-gray-500 cursor-pointer">
          <CiSearch className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
