import React from "react";
import "./brand.css";
import Google from "../../assets/google.png";
import Slack from "../../assets/slack.png";
import Atlassian from "../../assets/atlassian.png";
import DropBox from "../../assets/dropbox.png";
import Shopify from "../../assets/shopify.png";
const Brand = () => {
  return (
    <div className="brand">
      <div>
        <img src={Google} alt="Google" />
      </div>
      <div>
        <img src={Slack} alt="Slack" />
      </div>
      <div>
        <img src={Atlassian} alt="Ätlassian" />
      </div>
      <div>
        <img src={DropBox} alt="DropBox" />
      </div>
      <div>
        <img src={Shopify} alt="Shopify" />
      </div>
    </div>
  );
};

export default Brand;
