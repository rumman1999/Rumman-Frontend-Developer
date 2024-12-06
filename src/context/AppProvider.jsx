import { useState } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";

export const AppProvider = ({children}) => {
    const [selectedCategory , setSelectedCategory] = useState("Chicken")
    const [selectedMeal , setSelectedMeal] = useState("")
    const [mealList , setMealList] = useState([])

    

    return(
        <AppContext.Provider value={{
            selectedCategory , setSelectedCategory,
            selectedMeal , setSelectedMeal,
            mealList , setMealList
        }}>
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
  };