import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import "./partnershipprogram.css";
import Select from "react-select";
import countriesCode from "../countries.json";
import Form from "./Form";
import { BsArrowDownShort } from "react-icons/bs";
// Images import
import partnershipprogram_image1 from "../../../images/Partnership/Program/1.webp";
import partnershipprogram_image2 from "../../../images/Partnership/Program/2.webp";
import partnershipprogram_image3 from "../../../images/Partnership/Program/3.webp";

// Icons import
import { HiArrowUpRight } from "react-icons/hi2";

const PartnershipProgram = () => {
  const [showDialog, setShowDialog] = useState(false);
  const showHandler = () => {
    setShowDialog(false);
  };
  return (
    <div className="partnershipprogram max-lg:px-[4rem] max-sm:px-[3rem] max-[450px]:px-[1rem] py-[4rem] px-[8rem]">
      <Slide bottom>
        <div className="partnershipprogram_header">
          <p data-aos="fade-up">ABOUT</p>
          <h1 data-aos="fade-up">What is CraftPartner program ?</h1>
        </div>
        <div className="partnershipprogram_content_container">
          <div className="partnershipprogram_content w-[340px]">
            <div className=" text-sm font-bold text-left   text-[#343935]">
              <h6 data-aos="fade-up">01</h6>
              <div
                data-aos="fade-up"
                className="font-bold h-[130px] max-[400px]:h-[100px] w-full text-start max-[400px]:text-2xl text-3xl py-[1.8rem]  text-[#343935]"
              >
                <h3>Privileged Entry in $680 Billion Global Market</h3>
              </div>
              <div
                data-aos="fade-up"
                className="min-h-[6rem] my-3 border-[#222] border-b-[1px] "
              >
                <p className="text-[#343935] mr-2 mb-4 max-[400px]:py-4 font-thin leading-[1.32rem] text1 text-left text-[.88rem]">
                  Gain priority access in the global handicraft market, and
                  leverage our wide range of high-quality products to cater to
                  diverse customer preferences.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="div_img">
              <img
                src={partnershipprogram_image1}
                alt="Image 1"
                className="duration-500"
              />
            </div>
          </div>
          <div className="partnershipprogram_content w-[340px]">
            <div className="text-sm font-bold text-left   text-[#343935]r">
              <h6 data-aos="fade-up">02</h6>
              <div
                data-aos="fade-up"
                className="font-bold h-[130px] max-[400px]:h-[100px]  w-full text-start max-[400px]:text-2xl text-3xl py-[1.8rem]  text-[#343935]"
              >
                <h3>Strategic Business Support to Maximize Returns</h3>
              </div>
              <div
                data-aos="fade-up"
                className="min-h-[6rem] my-3 border-[#222] border-b-[1px] "
              >
                <p className="text-[#343935] max-[400px]:py-4 mr-2 mb-4 font-thin leading-[1.32rem] text1 text-left text-[.88rem]">
                  Experience the expert guidance to stay ahead of the
                  competition in the thriving handicraft industry and multiply
                  your return generation capacity.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="div_img">
              <img
                src={partnershipprogram_image2}
                alt="Image 2"
                className="duration-500"
              />
            </div>
          </div>
          <div className="partnershipprogram_content w-[340px]">
            <div className="text-sm font-bold text-left   text-[#343935]">
              <h6 data-aos="fade-up">03</h6>
              <div
                data-aos="fade-up"
                className="font-bold h-[130px] max-[400px]:h-[100px]  w-full text-start max-[400px]:text-2xl text-3xl py-[1.8rem]  text-[#343935]"
              >
                <h3>Platform to Patronage Ethnic Treasures</h3>
              </div>
              <div
                data-aos="fade-up"
                className="min-h-[6rem] my-3 border-[#222] border-b-[1px] "
              >
                <p className="text-[#343935] max-[400px]:py-4 mr-2 mb-4 font-thin leading-[1.32rem] text1 text-left text-[.88rem]">
                  Preserve and promote the rich cultural heritage, empower
                  artisans and their communities, and showcase the beauty and
                  diversity of indigenous handicrafts to your customers.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="div_img">
              <img
                src={partnershipprogram_image3}
                alt="Image 3"
                className="duration-500"
              />
            </div>
          </div>
        </div>
      </Slide>
      <div className="w-full flex justify-center">
        <div
          onClick={() => setShowDialog(true)}
          data-aos="fade-up"
          className=" cursor-pointer hover:bg-black duration-500 relative px-2 w-[155px]  py-3  hover:text-white  hover:border-white rounded-3xl border-[1px] flex justify-between items-center border-[#343935] "
        >
          <a className="mx-2 text1 ">Show Interest</a>
          <BsArrowDownShort className=" rotate-[-135deg] text-lg" />
        </div>
        {showDialog && <Form show={showHandler} />}
      </div>
    </div>
  );
};
export default PartnershipProgram;
