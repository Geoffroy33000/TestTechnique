import { useState } from "react";

import "./AddBasket.scss";

function AddBasket() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="AddBasket_container">
      <div
        className="AddBasket_content_reduce"
        onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
      >
        -
      </div>

      <div className="AddBasket_content">{count}</div>
      <div
        className="AddBasket_content_add"
        onClick={() => setCount(count + 1)}
      >
        +
      </div>
    </div>
  );
}

export default AddBasket;
