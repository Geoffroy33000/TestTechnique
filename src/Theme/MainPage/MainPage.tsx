import { Search, Carousel, Footer } from "../../Components";

import "./MainPage.scss";

function MainPage() {
  return (
    <div className="MainPage_container">
      <div className="MainPage_header">
        <div className="MainPage_title">
          Mahrs Bräu <b>Beers</b>
        </div>
        <div className="MainPage_burgerMenu">
          <img src="BurgerMenu.png" alt="Burger Menu" />
        </div>
      </div>
      <Search />
      <div className="MainPage_content">
        <div className="MainPage_content_categories">
          <div className="MainPage_content_category">Radler</div>
          <div className="MainPage_content_category">Sommerpills</div>
          <div className="MainPage_content_category">Helles</div>
        </div>
        <div className="MainPage_content_carousel">
          <Carousel />
        </div>
      </div>
      <div className="MainPage_footer">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
