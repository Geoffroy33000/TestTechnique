import { Search } from "../../Components";

import "./MainPage.scss";

function MainPage() {
  return (
    <>
      <div className="MainPage_header">
        <div className="MainPage_title">
          Mahrs Bräu <b>Beers</b>
        </div>
        <div className="MainPage_burgerMenu">
          <img src="BurgerMenu.png" alt="Burger Menu" />
        </div>
      </div>
      <Search />
    </>
  );
}

export default MainPage;
