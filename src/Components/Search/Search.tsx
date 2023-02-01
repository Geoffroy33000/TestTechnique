import { Search as SearchIcon } from "../../Assets/Icons";

import "./Search.scss";

function Search() {
  function Toto() {
    console.log("WORK WORK WORK!!!!!");
  }

  return (
    <div className="Search_container">
      <div className="Search_input">
        <input className="Search" placeholder="Search" />
        <div className="Search_icon">
          <SearchIcon height="35px" width="35px" />
        </div>
      </div>
      <div className="Search_parameters" onClick={() => Toto()}>
        <img src="Parameters.png" alt="Paramaters" />
      </div>
    </div>
  );
}

export default Search;
