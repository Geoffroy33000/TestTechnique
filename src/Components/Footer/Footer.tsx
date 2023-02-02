import { PartialArrowRight } from "../../Assets/Icons";

import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer_container">
      <div className="Footer_header">
        <div className="Footer_header_title">
          <b>Recents</b> products
        </div>
        <div className="Footer_header_action">
          See all
          <PartialArrowRight color="#C0C0C0" height="20" width="20" />
        </div>
      </div>
      <div className="Footer_content">
        <div className="Footer_content_item">
          <img src="Beer.png" alt="Beer" />
        </div>
        <div className="Footer_content_item">
          <img src="Beer.png" alt="Beer" />
        </div>
        <div className="Footer_content_item">
          <img src="Beer.png" alt="Beer" />
        </div>
        <div className="Footer_content_item">
          <img src="Beer.png" alt="Beer" />
        </div>
        <div className="Footer_content_item">
          <img src="Beer.png" alt="Beer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
