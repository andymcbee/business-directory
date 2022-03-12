import react, { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BusinessesContext } from "../context/BusinessesContext"
import RestaurantFinder from "../apis/BusinessesAPI"



function SearchBar({ data }) {




  const {searchQuery, setSearchQuery} = useContext(BusinessesContext)
  const navigate = useNavigate()
  const {searchResults, setSearchResults} = useContext(BusinessesContext)
  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);



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


    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => { //remove I think... replace with API?
      return value.title.toLowerCase().includes(searchWord.toLowerCase()); //remove I think... replace with API?   
      // do an API call and then return the value of the results drilled into the data. Eg. response.data.data.name
    } )

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }  
    
  }



  let handleSubmit = (searchValue) => {

    var urlFriendlySearchValue = searchValue.split(' ').join('+');
    //console.log(replaced)
    navigate(`/search?query=${urlFriendlySearchValue}`)




    

    getData(searchValue);
  }
  return (
    <div className="SearchBar">
      <div className="searchInputs">
        <input value={searchQuery} placeholder="business name" onChange={(e)=>handleChange(e)}/>
        <button onClick={()=>handleSubmit(searchQuery)}> Search</button>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;