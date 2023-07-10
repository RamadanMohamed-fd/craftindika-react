import React from "react";
import "./artisanal.css";

// Images import
import artisan_main_image from "../../../images/LandingPage/Hero/hero_main_image.png";
import artisanal_flower_image from "../../../images/LandingPage/Artisanal/artisanal_flower.png";

const Artisanal = () => {
  return (
    <div className="artisanal  p-[5rem] max-sm:p-[3rem] max-sm:pt-[4rem]">
      <div data-aos="fade-down" className="artisanal_flower_image">
        <img src={artisanal_flower_image} />
      </div>
      <div
        data-aos="fade-up"
        className="artisanal_heading max-sm:w-[250px] xl:text-5xl max-xl:text-4xl max-[910px]:text-3xl max-md:text-2xl"
      >
        <h1>
          INDIAN <span>artisanal </span> CREATIONS MERIT
        </h1>
        <h1>INTERNATIONAL RECOGNITION AND DESERVE</h1>
        <h1>TO GRACE DISTINGUISHED SPACES AND</h1>
        <h1>
          SOPHISTICATED HOMES ACROSS THE <span>globe</span>
        </h1>
      </div>
      <div
        data-aos="fade-up"
        className="artisanal_image w-[500px] max-sm:w-[300px]"
      >
        <img src={artisan_main_image} />
      </div>
      <div data-aos="fade-up" className="artisanal_present">
        <p>
          We present to you the epitome of handcrafted excellence, where the
          meticulous precision of each
        </p>
        <p>
          handmade piece evokes the refined aesthetics of machine-crafted
          design.
        </p>
      </div>
      <div data-aos="fade-up" className="artisanal_learnmore">
        <a href="#">Learn More</a>
      </div>
    </div>
  );
};

export default Artisanal;
