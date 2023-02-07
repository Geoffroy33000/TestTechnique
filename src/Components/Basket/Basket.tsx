import { Button } from "..";

import { Basket as BasketIcon } from "../../Assets/Icons";

import "./Basket.scss";

function Basket() {
  return (
    <div className="Basket_container">
      <Button icon={<BasketIcon height="45" width="45" />} onClick={() => {}} />
    </div>
  );
}

export default Basket;
