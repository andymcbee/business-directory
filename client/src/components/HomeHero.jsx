import SearchBar from "./SearchBar"
import BookData from "../Data.json";

function Header() {
    return (
      <div className="Header">
        HERO IMAGE HERE...
        <SearchBar data={BookData}/>
      </div>
    );
  }
  
  export default Header;