import { Link } from "react-router-dom";

import { Heart } from "../../Assets/Icons";

import "./CarouselItem.scss";

interface Props {
  id: string;
  title: string;
  image: string;
  price: string;
}

function CarouselItem(props: Props) {
  return (
    <div className="CarouselItem_container">
      <Link to={`/details/${props.id}`}>
        <div className="CarouselItem_content">
          <div className="CarouselItem_header">
            <div className="CarouselItem_title">{props.title}</div>
            <div className="CarouselItem_favorite">
              <Heart color="white" height="50" width="50" />
            </div>
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

export default CarouselItem;
