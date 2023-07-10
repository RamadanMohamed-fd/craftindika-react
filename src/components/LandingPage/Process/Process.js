import React from "react";
import "./process.css";

// Images import
import process_image1 from "../../../images/LandingPage/Process/process_image1.webp";
import process_image2 from "../../../images/LandingPage/Process/process_image2.webp";

const Process = () => {
  return (
    <div className="process">
      <div className="process_top">
        <div className="process_top_left">
          <p data-aos="fade-up">PROCESS</p>
          <div>
            <h3 data-aos="fade-up">Behind</h3>
            <h3 data-aos="fade-up">Craftwork</h3>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img src={process_image1} />
        </div>
      </div>
      <div className="process_down">
        <div data-aos="zoom-in" className="process_down_left">
          <img src={process_image2} />
        </div>
        <div className="process_down_right">
          <p data-aos="fade-up">
            Our exceptional team comprises esteemed artisans, globally
            recognized for their mastery and dedication to this age-old craft.
          </p>
          <a data-aos="fade-up" href="#">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Process;
