import { CarouselItem } from "../../Components";

import { ChampagneMock } from "../../Assets/Mocks/ChampagneMock";

import "./Carousel.scss";

interface Props {
  drinks: [{ strDrink: string; strDrinkThumb: string; idDrink: string }];
}

function Carousel(props: Props) {
  //const Mock = ChampagneMock;
  return (
    <div className="Carousel_container">
      {props.drinks.map((drink: any) => (
        <CarouselItem
          id={drink.idDrink}
          title={drink.strDrink}
          image={drink.strDrinkThumb}
          price={drink.idDrink}
        />
      ))}
    </div>
  );
}

export default Carousel;
