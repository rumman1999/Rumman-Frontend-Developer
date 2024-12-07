import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search for the Input: ", searchInput);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-[#ff5200] shadow-md px-4 sm:px-8 py-4 flex flex-wrap items-center justify-between text-white max-w-[1000px] m-auto w-[100%]">
      
      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
        Food Menu WebPage
      </div>

      <div className="relative flex items-center w-full sm:w-auto mt-3 sm:mt-0">
        <input
          className="w-full sm:w-64 md:w-80 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:outline-none transition duration-300 text-sm sm:text-base text-black"
          placeholder="Search for restaurants and food"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <span
          className="absolute right-3 text-gray-500 cursor-pointer"
          onClick={handleSearch}
        >
          <CiSearch className="w-6 h-6" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
