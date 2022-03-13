import React, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BusinessesContext } from "../context/BusinessesContext"
import RestaurantFinder from "../apis/BusinessesAPI"
import "./SearchBar.css"



function SearchBar() {




  const {searchQuery, setSearchQuery} = useContext(BusinessesContext)
  const navigate = useNavigate()
  const {searchResults, setSearchResults} = useContext(BusinessesContext)
  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);




  const getData = async (searchValue) => {
            

    try {

       const response = await RestaurantFinder.get(("/" + searchValue),)
       
            
        console.log(response.data.data.restaurants)
       // setSearchResults(response.data.data.restaurants)
       setFilteredData(response.data.data.restaurants)
       setSearchResults(response.data.data.restaurants)

       

     


    } catch (err) {
            console.log(err)
    }

}












// if state is empty and "query" paramater
// exists in URL then update searchQuery state to URL param "query" value
  useEffect(() => {


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    if (searchQuery == "" && urlParams.has('query')) {

      const searchValueFromUrl = urlParams.get('query')
      //console.log("Params:")
      //console.log(searchValueFromUrl)
      setSearchQuery(searchValueFromUrl)
      getData(searchValueFromUrl);
    }


    
  }, [])



  










  let handleChange = (e) => {
    
    setSearchQuery(e.target.value)


    const searchWord = e.target.value;
    setWordEntered(searchWord);
   
    
    

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      getData(searchWord)
      
    }  
    
  }
  
  
//navigate if search result is selected
  let handleSearchResultClick = (business) => {
    
    console.log(business)
    let test = 1
    navigate(`/business/${business.id}`)

//href={`/business/${value.id}`}
  }

  


  let handleSubmit = async (searchValue) => {
    if ( searchValue === "") { return } else {

    var urlFriendlySearchValue = searchValue.split(' ').join('+');
    //console.log(replaced)
    await getData(searchValue);
     navigate(`/search?query=${urlFriendlySearchValue}`)



    
  }}
  return (
    <div className="SearchBar" onFocus={(e) => { setShowSearchSuggestions(true)}} onBlur={(e) => {setShowSearchSuggestions(false)}}>
      <div className="searchInputs">
        <div >
          <input  className="searchBox" type="text" autoComplete="off" value={searchQuery}
          placeholder="business name" onChange={(e)=>handleChange(e)}/> 
        </div>
       
        <button className="searchButton" onClick={()=>handleSubmit(searchQuery)}> Search</button>
      </div>
      {showSearchSuggestions && <div className="suggestionContainer">
        {filteredData.length != 0 && (
          <div id="autocomplete-list" className="autocomplete-items">
            {filteredData.slice(0, 15).map((value) => {
              return (
                <div className="suggestionItem">
                    <a key={value.id} className="dataItem" onMouseDown={() => { handleSearchResultClick(value) }} target="_blank">
                    <p>{value.name} </p>
                  </a>
                </div>
              );
            })}
          </div>
        )}
      </div>}
    </div>
  );
}//href={`/business/${value.id}`}

export default SearchBar;