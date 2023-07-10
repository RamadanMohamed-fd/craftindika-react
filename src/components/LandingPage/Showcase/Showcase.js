import React, { useEffect, useState } from "react";
import "./showcase.css";

// Images import
import showcase_image1 from "../../../images/LandingPage/Showcase/showcase_image1.webp";
import showcase_image2 from "../../../images/LandingPage/Showcase/showcase_image2.webp";
import showcase_image3 from "../../../images/LandingPage/Showcase/showcase_image3.webp";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules

import { Navigation } from "swiper/modules";

const Showcase = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to update window width on resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="showcase">
      <div className="showcase_header">
        <div className="showcase_header_left">
          <p data-aos="fade-up">SHOWCASE</p>
          <h3 data-aos="fade-up">Setting CraftIndika Apart</h3>
        </div>
        <div data-aos="fade-up" className="showcase_header_right">
          <a href="#">View products</a>
        </div>
      </div>
      <div className="showcase_carousel">
        <Swiper
          slidesPerView={
            windowWidth >= 810 && windowWidth <= 1082
              ? 2
              : windowWidth >= 1082
              ? 3
              : 1
          }
          spaceBetween={60}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <div className="showcase_carousel_single_main">
            <SwiperSlide>
              <div className="showcase_carousel_single">
                <img data-aos="zoom-in" src={showcase_image1} />
                <div
                  data-aos="fade-up"
                  className="showcase_carousel_single_info"
                >
                  <p>TRIBAL JEWELLERY</p>
                  <h3>Classically imperfect</h3>
                  <h3>jewellery for unique</h3>
                  <h3>statement</h3>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="showcase_carousel_single_main">
            <SwiperSlide>
              <div className="showcase_carousel_single">
                <img data-aos="zoom-in" src={showcase_image2} />
                <div
                  data-aos="fade-up"
                  className="showcase_carousel_single_info"
                >
                  <p>METAL CRAFTS</p>
                  <h3>Revamp Your Space with</h3>
                  <h3>the Alluring Charm of</h3>
                  <h3>Bronze Decoratives</h3>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="showcase_carousel_single_main">
            <SwiperSlide>
              <div className="showcase_carousel_single">
                <img data-aos="zoom-in" src={showcase_image3} />
                <div
                  data-aos="fade-up"
                  className="showcase_carousel_single_info"
                >
                  <p>GIFTING COLLECTION</p>
                  <h3>Handpicked Luxury</h3>
                  <h3>Treasures For Every</h3>
                  <h3>Occasion</h3>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="showcase_carousel_single_main">
            <SwiperSlide>
              <div className="showcase_carousel_single">
                <img data-aos="zoom-in" src={showcase_image3} />
                <div
                  data-aos="fade-up"
                  className="showcase_carousel_single_info max-sm:mb-14"
                >
                  <p>GIFTING COLLECTION</p>
                  <h3>Handpicked Luxury</h3>
                  <h3>Treasures For Every</h3>
                  <h3>Occasion</h3>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div
            data-aos="fade-up"
            className="  z-20 flex absolute top-[30%] max-sm:top-[89%]  w-[100%] max-sm:justify-center   justify-between  items-center"
          >
            <div className="prev cursor-pointer ">
              <svg
                width="40"
                height="40"
                viewBox="0 0 69 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="68"
                  height="71.9999"
                  rx="34"
                  transform="matrix(-1 0 0 1 68.5 3.8147e-06)"
                  fill="#C5A56F"
                />
                <path
                  d="M44.5 16C44.5 16 40.5338 36.0179 24.5 35.8334M44.5 55.9999C44.5 55.9999 40.5338 35.982 24.5 36.1665"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>
            <div className="next  cursor-pointer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 69 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="68"
                  height="71.9999"
                  rx="34"
                  transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0.5 71.9999)"
                  fill="#C5A56F"
                />
                <path
                  d="M24.5 55.9999C24.5 55.9999 28.4662 35.982 44.5 36.1665M24.5 16C24.5 16 28.4662 36.0179 44.5 35.8334"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Showcase;
