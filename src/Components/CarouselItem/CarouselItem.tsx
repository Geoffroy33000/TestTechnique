import { Heart } from "../../Assets/Icons";

import "./CarouselItem.scss";

function CarouselItem() {
  return (
    <div className="CarouselItem_container">
      <div className="CarouselItem_content">
        <div className="CarouselItem_header">
          <div className="CarouselItem_title">
            This is a title <br /> On 2 lines
          </div>
          <div className="CarouselItem_favorite">
            <Heart color="white" height="50" width="50" />
          </div>
        </div>
        <div className="CarouselItem_price">This is a price</div>
        <div className="CarouselItem_image">
          <img src="Beer.png" alt="Beer" />
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
