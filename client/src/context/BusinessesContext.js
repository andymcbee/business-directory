import React, {createContext} from "react";

export const BusinessesContext = createContext();



export const BusinessesContextProvider = props => {
   
     



    return (
        <BusinessesContext.Provider value="null">
            {props.children}
        </BusinessesContext.Provider>
    )
}