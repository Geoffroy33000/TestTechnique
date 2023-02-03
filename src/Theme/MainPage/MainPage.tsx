import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";

import { Button, Carousel, Footer, Modal } from "../../Components";

import { Search as SearchIcon } from "../../Assets/Icons";

import "./MainPage.scss";

export type Data = {
  drinks: [{ strDrink: string; strDrinkThumb: string; idDrink: string }];
};

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Data | null>();
  const [product, setProduct] = useState<string>();
  const [word, setWord] = useState<string>("");
  const [definitivWord, setDefinitivWord] = useState<string>("");

  const products = [
    "Gin",
    "Whiskey",
    "Rum",
    "Champagne",
    "Scotch",
    "Vodka",
    "Tequila",
  ];

  function handleClose() {
    setIsOpen(false);
  }

  function handleClick(product: string) {
    setProduct(product);
    setIsOpen(false);
  }

  function handleChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    setWord(event.target.value);
  }

  function handleSearch() {
    setDefinitivWord(word);
  }

  async function api() {
    if (product) {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${product}`
      );
      const actualData = await response.json();
      setData(actualData);
    }

    if (definitivWord) {
      const response = await fetch(
        `www.thecocktaildb.com/api/json/v1/1/search.php?s=${definitivWord}`
      );
      const actualData = await response.json();
      setData(actualData);
    }
  }

  useEffect(() => {
    api();
  }, [product]);

  useEffect(() => {
    api();
  }, [definitivWord]);

  console.log(word);
  console.log(definitivWord);
  return (
    <>
      <div className="MainPage_container">
        <div className="MainPage_header">
          <div className="MainPage_title">
            Mahrs Bräu <b>Beers</b>
          </div>
          <div className="MainPage_burgerMenu">
            <img src="BurgerMenu.png" alt="Burger Menu" />
          </div>
        </div>
        <div className="Search_container">
          <div className="Search_input">
            <input
              className="Search"
              placeholder="Search"
              onChange={handleChangeSearch}
            />
            <div className="Search_icon" onClick={handleSearch}>
              <SearchIcon height="35px" width="35px" />
            </div>
          </div>
          <div className="Search_parameters" onClick={() => setIsOpen(true)}>
            <img src="Parameters.png" alt="Paramaters" />
          </div>
        </div>
        <div className="MainPage_content">
          <div className="MainPage_content_categories">
            <div className="MainPage_content_category">Radler</div>
            <div className="MainPage_content_category">Sommerpills</div>
            <div className="MainPage_content_category">Helles</div>
          </div>
          <div className="MainPage_content_carousel">
            {data && <Carousel drinks={data.drinks} />}
          </div>
        </div>
        <div className="MainPage_footer">
          <Footer />
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose}>
        {products.map((product) => (
          <Button onClick={() => handleClick(product)}>{product}</Button>
        ))}
      </Modal>
    </>
  );
}

export default MainPage;
