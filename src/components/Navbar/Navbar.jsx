import { useState } from "react";
import css from "./Navbar.module.scss";
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
    <div className={css.mainCont}>
      <div className={css.title}>Food Menu WebPage</div>
      <div className={css.searchBar}>
        <input
          className={css.inputBox}
          placeholder="Search for restaurants and food"
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress} 
        />
        <span className={css.searchIcon} onClick={handleSearch}>
          <CiSearch />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
