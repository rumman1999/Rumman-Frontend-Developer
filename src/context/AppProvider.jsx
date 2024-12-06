import { useState } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";

export const AppProvider = ({children}) => {
    const [selectedCategory , setSelectedCategory] = useState("Chicken")

    return(
        <AppContext.Provider value={{
            selectedCategory , setSelectedCategory
        }}>
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired
  };