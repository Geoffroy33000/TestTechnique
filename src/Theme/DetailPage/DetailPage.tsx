import { Link } from "react-router-dom";

import {
  PartialArrowLeft,
  Heart,
  Artichoke,
  Drop,
  Percent,
} from "../../Assets/Icons";

import "./DetailPage.scss";

function DetailPage() {
  return (
    <div className="DetailPage_container">
      <div className="DetailPage_header">
        <div className="DetailPage_header_actions">
          <Link to={"/"}>
            <PartialArrowLeft height="40" width="40" />
          </Link>
          <Heart height="50" width="50" color="#FFFFFF" />
        </div>
        <div className="DetailPage_header_image">
          <img src="../Beer.png" alt="Beer" />
        </div>
      </div>
      <div className="DetailPage_content">
        <div className="DetailPage_content_title">
          <div className="DetailPage_content_name">
            Classic <br />
            Helles Vollbier
          </div>
          <div className="DetailPage_content_price">10€</div>
        </div>
        <div className="DetailPage_content_categories">
          <div className="DetailPage_content_category">
            <div className="DetailPage_content_category_title">
              <Artichoke color="#C0C0C0" height="25" width="25" /> Bitter
            </div>
            <div className="DetailPage_content_category_information">3/10</div>
          </div>
          <div className="DetailPage_content_category">
            <div className="DetailPage_content_category_title">
              <Drop color="#C0C0C0" height="25" width="25" /> Color
            </div>
            <div className="DetailPage_content_category_information">
              Golden
            </div>
          </div>
          <div className="DetailPage_content_category">
            <div className="DetailPage_content_category_title">
              <Percent color="#C0C0C0" height="25" width="25" /> Alcohol
            </div>
            <div className="DetailPage_content_category_information">
              4,90 %
            </div>
          </div>
        </div>
        <div className="DetailPage_informations">
          <div className="DetailPage_informations_title">About product</div>
          <p className="DetailPage_informations_content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            laboriosam sunt expedita eveniet! Minima obcaecati tempora ea illum
            non, odio ipsum quis labore nulla at porro exercitationem
            praesentium assumenda eius. Quia itaque consequuntur architecto
            fugiat unde, commodi, cumque, iure eligendi adipisci porro tempora
            ipsum culpa veritatis explicabo dolorum deserunt accusamus
            accusantium praesentium temporibus fuga voluptatem? Aut officiis
            dolore laudantium voluptas.
          </p>
        </div>
        <div className="DetailPage_Actions">
          <img src="../CardButton.png" alt="CardButton" />
          <img src="../CardAdd.png" alt="CardAdd" />
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
