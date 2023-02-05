import { Link } from "react-router-dom";
import classNames from "classnames";

import { Heart } from "../../Assets/Icons";

import "./CarouselItem.scss";

interface Props {
  id: string;
  title: string;
  image: string;
  price: string;
  isPrincipal?: boolean;
}

function CarouselItem(props: Props) {
  const classes = classNames("CarouselItem_container", {
    "CarouselItem--principal": props.isPrincipal,
    "CarouselItem--second": !props.isPrincipal,
  });

  return (
    <div className={classes}>
      <Link to={`/details/${props.id}`}>
        <div className="CarouselItem_content">
          <div className="CarouselItem_header">
            <div className="CarouselItem_title">{props.title}</div>
            {props.isPrincipal ? (
              <div className="CarouselItem_favorite">
                <Heart color="white" height="50" width="50" />
              </div>
            ) : (
              <div className="CarouselItem_favorite">
                <Heart color="white" height="30" width="30" />
              </div>
            )}
          </div>
          <div className="CarouselItem_price">€ {props.price}</div>
          <div className="CarouselItem_image">
            <img src={props.image} alt={props.title} />
          </div>
        </div>
      </Link>
    </div>
  );
}

CarouselItem.defaultProps = {
  isPrincipal: false,
};

export default CarouselItem;
