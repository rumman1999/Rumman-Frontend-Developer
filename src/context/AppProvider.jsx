import { useState } from "react";
import { AppContext } from "./AppContext";
import PropTypes from "prop-types";

export const AppProvider = ({children}) => {
    const [categories , setCategories] = useState([])

    return(
        <AppContext.Provider value={{
            categories , setCategories
        }}>
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired, // Validate the children prop
  };