import React from "react";
import "./helps.css";

import flower from "../../../images/Partnership/Helps/Flower.webp";

const Helps = () => {
  return (
    <div className="helps">
      <div className="helps_heading">
        <div data-aos="fade-right" className="helps_heading_box"></div>
        <div data-aos="fade-left">
          <h3>CRAFTPARTNER HELPS </h3>
          <h3>THOUSANDS OF CRAFTSMEN </h3>
          <h3>AND THEIR LIVELIHOOD</h3>
        </div>
      </div>
      <div data-aos="fade-up" className="helps_paras">
        <p>
          At CraftIndika, we are dedicated to supporting thousands of skilled
          craftsmen and securing their livelihoods.{" "}
        </p>
        <p>
          Through our partnership initiatives, we empower artisans by providing
          them with sustainable income{" "}
        </p>
        <p>
          opportunities and a global platform to showcase their unique talents
          and exceptional handicrafts.
        </p>
        <img src={flower} />
      </div>
      <div className="helps_link">
        <a data-aos="fade-up" href="#">
          See more
        </a>
      </div>
    </div>
  );
};

export default Helps;
