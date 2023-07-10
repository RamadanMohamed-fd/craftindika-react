import React from "react";
import "./embark.css";

// Images import
import embark_main_image from "../../../images/LandingPage/Embark/embark_main_image.jpg";

import { TfiArrowTopRight } from "react-icons/tfi";

const Embark = () => {
  return (
    <div className="embark mt-[-6rem]  ">
      <div className="embark_content">
        <div className="embark_content_left">
          <img data-aos="zoom-in" src={embark_main_image} />
        </div>
        <div data-aos="zoom-in" className="embark_content_right">
          <div className="embark_content_right_heading">
            <h3 data-aos="fade-up">Embark on this artistic</h3>
            <h3 data-aos="fade-up">journey now - become a</h3>
            <h3 data-aos="fade-up">CraftPartner</h3>
          </div>
          <div className="embark_content_right_paras">
            <p data-aos="fade-up">
              Join the CraftPartner Program today and discover an
            </p>
            <p data-aos="fade-up">
              exclusive collection tailored for your larger spaces, offices,
            </p>
            <p data-aos="fade-up">hotels, and more.</p>
          </div>
          <div data-aos="fade-up" className="embark_content_right_input">
            <input type="text" placeholder="Type your email" />
            <div className="embark_content_right_input_shop">
              <p>Shop Now</p>
              <span>
                <TfiArrowTopRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Embark;
