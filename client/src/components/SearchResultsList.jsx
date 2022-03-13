import SearchBar from "./SearchBar"
import React, { useContext, useEffect } from "react"
import { BusinessesContext } from "../context/BusinessesContext"
import "./SearchResultsList.css"





function SearchResultsList(props) {

    const {searchResults, setSearchResults} = useContext(BusinessesContext)










  return (
    <div className="SearchResultsList">
        <div><SearchBar /></div>
        <div>{searchResults && searchResults.map(result => {
          return (
            <div>{result.name}</div>
          )
        }

        )}</div>
       
        
      
    </div>
  );
}

export default SearchResultsList;

//<a key={value.id} className="dataItem" onMouseDown={() => { handleSearchResultClick(value) }} target="_blank">