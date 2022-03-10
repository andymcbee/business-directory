import React, {createContext, useState} from "react";

export const BusinessesContext = createContext();



export const BusinessesContextProvider = props => {


    // mainSearch Function Value.
    // Held globablly so we can keep search inputs updated.

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState("");
   
     



    return (
        <BusinessesContext.Provider value={{searchQuery, setSearchQuery, searchResults, setSearchResults}}>
            {props.children}
        </BusinessesContext.Provider>
    )
}