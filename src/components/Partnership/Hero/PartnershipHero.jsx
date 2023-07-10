import React from "react";
import "./partnershiphero.css";
import Bar from "../../LandingPage/Hero/Bar";
import { Link } from "react-router-dom";
// import "../../LandingPage/Hero/hero.css";
const PartnershipHero = () => {
  return (
    <div className={`partnership_hero min-h-[100vh] max-sm:min-h-[70vh]`}>
      <nav className="h-[100px]  absolute z-[100] w-[88%]  ml-[6%] text-white hero_nav_logo flex justify-center  items-center">
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
            <Link to="/partnership">CraftPartner</Link>
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
        data-aos="fade-up"
        className={`partnership_hero_heading h-full left-0 w-full  `}
      >
        <h1>
          CraftPartner<span> ©</span>
        </h1>
        <h1>Program</h1>
      </div>
    </div>
  );
};

export default PartnershipHero;
