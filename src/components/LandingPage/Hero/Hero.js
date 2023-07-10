import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import Bar from "./Bar";
// Icons import
import { HiArrowUpRight } from "react-icons/hi2";

// Images import
import hero_main_image from "../../../images/LandingPage/Hero/hero_main_image.png";

const Hero = () => {
  return (
    <div className="hero  ">
      <nav className="h-[100px] w-[88%] m-auto text-white hero_nav_logo  flex  items-center">
        <h3
          data-aos="fade-right"
          className="  cursor-pointer  text-2xl w-[58%] logo "
        >
          <p className=" ul relative duration-700 tracking-wider ul_logo  w-fit">
            {" "}
            CRAFTINDIKA©
          </p>
        </h3>
        <ul
          data-aos="fade-left"
          className="menu  w-fit font-[200] text-sm  hidden   lg:flex justify-between items-center"
        >
          <li className=" px-4 ul relative ">
            <a href="#">Company</a>
          </li>
          <li className=" ul relative px-4 ">
            <a href="#">Collections</a>
          </li>
          <li className=" ul relative px-4 ">
            <a href="#">Curations</a>
          </li>
          <li className=" ul relative px-4 ">
            <a href="#">CraftPartner</a>
          </li>
          <li className=" relative ul px-4">
            <a href="#">Connect</a>
          </li>
        </ul>
        <div className=" hidden max-lg:flex  justify-end  w-[40%]  items-center">
          <Bar />
        </div>
      </nav>
      <div
        data-aos="fade-right"
        className="hero_heading max-xl:pt-20  max-md:w-[100%]"
      >
        <h1 className=" max-xl:inline line1">Transforming Spaces</h1>
        <h1 className=" max-xl:inline line2">&nbsp;Into Work Of Art</h1>
      </div>
      <div className="hero_explore flex max-xl:pt-36 max-[960px]:flex-col">
        <div data-aos="fade-up" className="hero_img xl:ml-20 ">
          <img src={hero_main_image} />
        </div>
        <div data-aos="fade-up" className="hero_explore_paras ">
          <p>Elevate your living experience with our</p>
          <p>luxurious Indian handicrafts, where every</p>
          <p>piece embodies the spirit of opulence and</p>
          <p>unparalleled craftsmanship.</p>
          <div className="hero_explore_button">
            <p>Explore</p>
            <span>
              <HiArrowUpRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
