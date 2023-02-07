import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { AppContext } from "../../Context/context";

import { CocktailDetails } from "../../Assets/Types/CocktailDetails";

import { SwitchTheme, Basket, AddBasket } from "../../Components";

import {
  PartialArrowLeft,
  Heart,
  Artichoke,
  Drop,
  Percent,
} from "../../Assets/Icons";

import "./DetailPage.scss";

function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<CocktailDetails | null>(null);

  async function api() {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const actualData = await response.json();
    setData(actualData);
  }

  useEffect(() => {
    api();
  }, []);

  const { state } = useContext(AppContext);

  const style = {
    backgroundColor: state.appConfig.theme === "light" ? "#FFFFFF" : "#495057",
  };

  return (
    <>
      {data && (
        <div className="DetailPage_container" style={style}>
          <div className="DetailPage_header">
            <div className="DetailPage_header_actions">
              <Link to={"/"}>
                <PartialArrowLeft height="40" width="40" />
              </Link>
              <Heart height="50" width="50" color="#FFFFFF" />
            </div>
            <div className="DetailPage_header_image">
              <img
                src={data.drinks[0].strDrinkThumb}
                alt={
                  data.drinks[0].strDrinkAlternate
                    ? data.drinks[0].strDrinkAlternate
                    : data.drinks[0].strDrink
                }
              />
            </div>
          </div>
          <div className="DetailPage_content">
            <div className="DetailPage_content_title">
              <div className="DetailPage_content_name">
                {data.drinks[0].strDrink}
              </div>
              <div className="DetailPage_content_price">
                € {data.drinks[0].idDrink}
              </div>
            </div>
            <div className="DetailPage_content_categories">
              <div className="DetailPage_content_category">
                <div className="DetailPage_content_category_title">
                  <Artichoke color="#C0C0C0" height="25" width="25" /> Glass
                  type
                </div>
                <div className="DetailPage_content_category_information">
                  {data.drinks[0].strGlass}
                </div>
              </div>
              <div className="DetailPage_content_category">
                <div className="DetailPage_content_category_title">
                  <Drop color="#C0C0C0" height="25" width="25" /> Category
                </div>
                <div className="DetailPage_content_category_information">
                  {data.drinks[0].strCategory}
                </div>
              </div>
              <div className="DetailPage_content_category">
                <div className="DetailPage_content_category_title">
                  <Percent color="#C0C0C0" height="25" width="25" /> Alcoholic
                  or not?
                </div>
                <div className="DetailPage_content_category_information">
                  {data.drinks[0].strAlcoholic}
                </div>
              </div>
            </div>
            <div className="DetailPage_informations">
              <div className="DetailPage_informations_title">Instructions</div>
              <p className="DetailPage_informations_content">
                {data.drinks[0].strInstructions}
              </p>
            </div>
            <AddBasket />
            <Basket />
            <SwitchTheme />
          </div>
        </div>
      )}
    </>
  );
}

export default DetailPage;
