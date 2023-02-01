import { Search as SearchIcon } from "../../Assets/Icons";

import "./Search.scss";

function Search() {
  return (
    <div className="Search_container">
      <input className="Search" placeholder="Search" />
      <div className="Search_icon">
        <SearchIcon height="35px" width="35px" />
      </div>
    </div>
  );
}

export default Search;
