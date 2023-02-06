import { useState, useEffect, ChangeEvent, useContext } from "react";
import { AppContext } from "../../Context/context";

import { Button, Carousel, Footer, Modal, SwitchTheme } from "../../Components";

import {
  Data,
  CategoryData,
  GlassesData,
  AlcoholicData,
} from "../../Assets/Types/DataType";

import { Search as SearchIcon } from "../../Assets/Icons";

import "./MainPage.scss";

function MainPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Data | null>();
  const [product, setProduct] = useState<string>("Rum");
  const [option, setOption] = useState<string | null>("");
  const [categoryOptionSelected, setCategoryOptionSelected] =
    useState<CategoryData | null>();
  const [glassesOptionSelected, setGlassesOptionSelected] =
    useState<GlassesData | null>();

  const [AlcoholicOptionSelected, setAlcoholicOptionSelected] =
    useState<AlcoholicData | null>();
  const [typeOptionSelected, setTypeOptionSelected] = useState<boolean | null>(
    false
  );
  const [word, setWord] = useState<string>("");
  const [definitivWord, setDefinitivWord] = useState<string>("");

  const { state } = useContext(AppContext);

  const style = {
    backgroundColor: state.appConfig.theme === "light" ? "#FFFFFF" : "#495057",
  };

  const products = [
    "Gin",
    "Whiskey",
    "Rum",
    "Champagne",
    "Scotch",
    "Vodka",
    "Tequila",
  ];

  const options = [
    "Categories",
    "Type of glasses",
    "Type of alcohol",
    "Alcoholic or not",
  ];

  function handleClose() {
    setOption("");
    setCategoryOptionSelected(null);
    setAlcoholicOptionSelected(null);
    setGlassesOptionSelected(null);
    setTypeOptionSelected(false);
    setIsOpen(false);
  }

  function handleClick(option: string) {
    setOption(option);
  }

  async function handleClickCategory(category: string) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const actualData = await response.json();
    setData(actualData);
    setCategoryOptionSelected(null);
    setIsOpen(false);
  }

  async function handleClickGlasses(glasses: string) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glasses}`
    );
    const actualData = await response.json();
    setData(actualData);
    setGlassesOptionSelected(null);
    setIsOpen(false);
  }

  async function handleClickType(type: string) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`
    );
    const actualData = await response.json();
    setData(actualData);
    setTypeOptionSelected(false);
    setIsOpen(false);
  }

  async function handleClickAlcoholic(alcoholic: string) {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholic}`
    );
    const actualData = await response.json();
    setData(actualData);
    setAlcoholicOptionSelected(null);
    setIsOpen(false);
  }

  function handleChangeSearch(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setWord(event.target.value);
  }

  function handleSearch() {
    setDefinitivWord(word);
  }

  async function renderOptions() {
    switch (option) {
      case "Categories":
        const responseCategories = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
        );
        const actualDataCategories: CategoryData =
          await responseCategories.json();
        setCategoryOptionSelected(actualDataCategories);
        break;

      case "Type of glasses":
        const responseGlasses = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
        );
        const actualDataGlasses = await responseGlasses.json();
        setGlassesOptionSelected(actualDataGlasses);
        break;

      case "Type of alcohol":
        setTypeOptionSelected(true);
        break;

      case "Alcoholic or not":
        const responseAlcoholic = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list"
        );
        const actualDataAlcoholic = await responseAlcoholic.json();
        setAlcoholicOptionSelected(actualDataAlcoholic);
        break;
    }
  }

  function renderOptionsResults() {
    if (categoryOptionSelected) {
      return categoryOptionSelected.drinks.map((drink) => (
        <Button onClick={() => handleClickCategory(drink.strCategory)}>
          {drink.strCategory}
        </Button>
      ));
    }

    if (glassesOptionSelected) {
      return glassesOptionSelected.drinks.map((drink) => (
        <Button onClick={() => handleClickGlasses(drink.strGlass)}>
          {drink.strGlass}
        </Button>
      ));
    }

    if (typeOptionSelected) {
      return products.map((drink) => (
        <Button onClick={() => handleClickType(drink)}>{drink}</Button>
      ));
    }

    if (AlcoholicOptionSelected) {
      return AlcoholicOptionSelected.drinks.map((drink) => (
        <Button onClick={() => handleClickAlcoholic(drink.strAlcoholic)}>
          {drink.strAlcoholic}
        </Button>
      ));
    }
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
  }, []);

  useEffect(() => {
    renderOptions();
  }, [option]);

  return (
    <>
      <div className="MainPage_container" style={style}>
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
              type="text"
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
      <SwitchTheme />
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="MainPage_Modal_content">
          <div className="MainPage_Modal_options">
            {options.map((option) => (
              <Button onClick={() => handleClick(option)}>{option}</Button>
            ))}
          </div>
          <div className="MainPage_Modal_results">{renderOptionsResults()}</div>
        </div>
      </Modal>
    </>
  );
}

export default MainPage;
