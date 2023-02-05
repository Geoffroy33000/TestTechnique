import { useState } from "react";

import { CarouselItem } from "../../Components";

import { PartialArrowLeft, PartialArrowRight } from "../../Assets/Icons";

import { ChampagneMock } from "../../Assets/Mocks/ChampagneMock";

import "./Carousel.scss";

interface Props {
  drinks: [{ strDrink: string; strDrinkThumb: string; idDrink: string }];
}

function Carousel(props: Props) {
  //const Mock = ChampagneMock;
  const [principalIndex, setPrincipalIndex] = useState<number>(0);

  console.log(props.drinks.length - 1, principalIndex);

  return (
    <div className="Carousel_container">
      {principalIndex >= 1 && (
        <div
          className="Carousel_control_left"
          onClick={() => setPrincipalIndex(principalIndex - 1)}
        >
          <PartialArrowLeft color="grey" height="50" width="30" />
        </div>
      )}

      <div className="Carousel_principal_content">
        <CarouselItem
          id={props.drinks[principalIndex].idDrink}
          title={props.drinks[principalIndex].strDrink}
          image={props.drinks[principalIndex].strDrinkThumb}
          price={props.drinks[principalIndex].idDrink}
          isPrincipal
        />
      </div>
      {props.drinks.length - 1 >= principalIndex + 1 && (
        <div className="Carousel_second_content">
          <CarouselItem
            id={props.drinks[principalIndex + 1].idDrink}
            title={props.drinks[principalIndex + 1].strDrink}
            image={props.drinks[principalIndex + 1].strDrinkThumb}
            price={props.drinks[principalIndex + 1].idDrink}
          />
        </div>
      )}
      {props.drinks.length - 1 >= principalIndex + 2 && (
        <div className="Carousel_third_content">
          <CarouselItem
            id={props.drinks[principalIndex + 2].idDrink}
            title={props.drinks[principalIndex + 2].strDrink}
            image={props.drinks[principalIndex + 2].strDrinkThumb}
            price={props.drinks[principalIndex + 2].idDrink}
          />
        </div>
      )}
      {props.drinks.length - 1 >= principalIndex + 3 && (
        <div className="Carousel_third_content">
          <CarouselItem
            id={props.drinks[principalIndex + 3].idDrink}
            title={props.drinks[principalIndex + 3].strDrink}
            image={props.drinks[principalIndex + 3].strDrinkThumb}
            price={props.drinks[principalIndex + 3].idDrink}
          />
        </div>
      )}
      {props.drinks.length - 1 >= principalIndex + 4 && (
        <div className="Carousel_third_content">
          <CarouselItem
            id={props.drinks[principalIndex + 4].idDrink}
            title={props.drinks[principalIndex + 4].strDrink}
            image={props.drinks[principalIndex + 4].strDrinkThumb}
            price={props.drinks[principalIndex + 4].idDrink}
          />
        </div>
      )}
      {principalIndex < props.drinks.length - 1 && (
        <div
          className="Carousel_control_right"
          onClick={() => setPrincipalIndex(principalIndex + 1)}
        >
          <PartialArrowRight color="grey" height="50" width="30" />
        </div>
      )}
    </div>
  );
}

export default Carousel;
