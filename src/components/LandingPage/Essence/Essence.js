import React from "react";
import "./essence.css";

// Images import
import essence_image_1 from "../../../images/LandingPage/Essence/essence_image_1.png";
import essence_image_2 from "../../../images/LandingPage/Essence/essence_image_2.png";
import essence_image_3 from "../../../images/LandingPage/Essence/essence_image_3.png";
import essence_image_4 from "../../../images/LandingPage/Essence/essence_image_4.png";
import essence_image_5 from "../../../images/LandingPage/Essence/essence_image_5.png";
import essence_image_6 from "../../../images/LandingPage/Essence/essence_image_6.png";
import { HiArrowUpRight } from "react-icons/hi2";

const Essence = () => {
  return (
    <div className="essence">
      <div className="essence_heading">
        <p data-aos="fade-up">ATTRIBUTES</p>
        <span data-aos="fade-up">The CraftIndika Essence</span>
      </div>
      <div className="essence_content">
        <div className="essence_content_row">
          <div className="essence_content_row_small">
            <p data-aos="fade-up">01.</p>
            <h3 data-aos="fade-up">Handcrafted</h3>
            <img data-aos="zoom-in" src={essence_image_1} />
          </div>
          <div className="essence_content_row_large">
            <p>02.</p>
            <h3>Support Indian Craft and Craftsmen</h3>
            <img data-aos="zoom-in" src={essence_image_2} />
          </div>
        </div>
        <div className="essence_content_row">
          <div className="essence_content_row_large">
            <p data-aos="fade-up">03.</p>
            <h3 data-aos="fade-up">Sustainable</h3>
            <img data-aos="zoom-in" src={essence_image_3} />
          </div>
          <div className="essence_content_row_small">
            <p data-aos="fade-up">04.</p>
            <h3 data-aos="fade-up">Fair Trade</h3>
            <img data-aos="zoom-in" src={essence_image_4} />
          </div>
        </div>
        <div className="essence_content_row">
          <div className="essence_content_row_small">
            <p data-aos="fade-up">05.</p>
            <h3 data-aos="fade-up">Materials</h3>
            <img data-aos="zoom-in" src={essence_image_5} />
          </div>
          <div className="essence_content_row_large">
            <p data-aos="fade-up">06.</p>
            <h3 data-aos="fade-up">Quality Handmade Craftsmanship</h3>
            <img data-aos="zoom-in" src={essence_image_6} />
          </div>
        </div>
      </div>
      <div className="essence_para">
        <p data-aos="fade-up">
          Uniting exquisite craftsmanship and cultural heritage to elevate your
          living spaces with unparalleled luxury. We present to you the epitome
          of
        </p>
        <p data-aos="fade-up">
          handcrafted excellence, where the meticulous precision of each
          handmade piece evokes the refined aesthetics of machine-crafted
          design.
        </p>
      </div>
      <div data-aos="fade-up" className="essence_button">
        <p>Values and Mission</p>
        <span>
          <HiArrowUpRight />
        </span>
      </div>
    </div>
  );
};

export default Essence;
