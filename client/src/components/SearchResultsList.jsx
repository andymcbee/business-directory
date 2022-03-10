import SearchBar from "./SearchBar"
import react, { useContext, useEffect } from "react"
import { BusinessesContext } from "../context/BusinessesContext"
import RestaurantFinder from "../apis/BusinessesAPI"





function SearchResultsList(props) {

    const {searchResults, setSearchResults} = useContext(BusinessesContext)




      

  







  return (
    <div className="SearchBar">
        <SearchBar />
       
        
      
    </div>
  );
}

export default SearchResultsList;