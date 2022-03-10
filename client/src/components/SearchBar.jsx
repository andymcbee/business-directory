import react, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BusinessesContext } from "../context/BusinessesContext"
import RestaurantFinder from "../apis/BusinessesAPI"



function SearchBar(props) {




  const {searchQuery, setSearchQuery} = useContext(BusinessesContext)
  const navigate = useNavigate()
  const {searchResults, setSearchResults} = useContext(BusinessesContext)



  const getData = async (searchValue) => {
            

    try {

       const response = await RestaurantFinder.get(("/" + searchValue),)
       
            
        console.log(response.data.data.restaurants)
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
    
  }



  let handleSubmit = (searchValue) => {

    var urlFriendlySearchValue = searchValue.split(' ').join('+');
    //console.log(replaced)
    navigate(`/search?query=${urlFriendlySearchValue}`)




    

    getData(searchValue);
  }
  return (
    <div className="SearchBar">
      <input value={searchQuery} placeholder="business name" onChange={(e)=>handleChange(e)}/>
      <button onClick={()=>handleSubmit(searchQuery)}> Search</button>
      
    </div>
  );
}

export default SearchBar;