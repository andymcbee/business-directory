import SearchBar from "./SearchBar"
import "./HomeHero.css"


function Header() {
    return (
      <div className="HomeHeroContainer">
        <div>
          <h1>Business Directory</h1>
        </div>
        <SearchBar/>

      </div>
    );
  }
  
  export default Header;