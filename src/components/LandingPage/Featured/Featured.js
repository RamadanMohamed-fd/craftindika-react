import React, { useEffect, useState } from "react";
import "./featured.css";

// Images import
import featured_image1 from "../../../images/LandingPage/Featured/featured_image1.png";
import featured_image2 from "../../../images/LandingPage/Featured/featured_image2.png";
import featured_image3 from "../../../images/LandingPage/Featured/featured_image3.png";

// Swiper import
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

const Featured = () => {
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
    <div className="featured  py-[6rem] relative">
      <div className="featured_header w-[87%] max-md:w-[95%]  ">
        <div className="featured_header_left">
          <p data-aos="fade-up">FEATURED</p>
          <div>
            <h3 data-aos="fade-up">Discover Our</h3>
            <h3 data-aos="fade-up">Curated Collection</h3>
          </div>
        </div>
        <div className="featured_header_right">
          <div>
            <p data-aos="fade-up">
              Embrace the distinctive elegance of our artisanal collection and
            </p>
            <p data-aos="fade-up">
              discover the timeless allure of India's finest handicrafts.
            </p>
          </div>
          <a data-aos="fade-up" href="#">
            Explore All Products
          </a>
        </div>
      </div>
      <div className="featured_carousel w-[60%] max-xl:w-[80%] max-lg:w-[95%] max-[770px]:w-[55%] max-[600px]:w-[80%] max-[515px]:w-[100%]">
        <Swiper
          slidesPerView={windowWidth <= 770 ? 1 : 2}
          spaceBetween={50}
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
          <div className="featured_carousel_single_main">
            <SwiperSlide>
              <div data-aos="zoom-in" className="featured_carousel_single">
                <img src={featured_image1} />
                <div className="featured_carousel_single_info">
                  <h2>Mesmeric Arts</h2>
                  <h3>
                    <span>over </span> 100 styles
                  </h3>
                  <p>Brushstrokes of a Rich Culture.</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="featured_carousel_single_main">
            <SwiperSlide>
              <div data-aos="zoom-in" className="featured_carousel_single">
                <img src={featured_image2} />
                <div className="featured_carousel_single_info">
                  <h2>Exquisite Handicrafts</h2>
                  <h3>
                    <span>over </span> 500 types
                  </h3>
                  <p>Crafted with Love, Shaped by Tradition.</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="featured_carousel_single_main">
            <SwiperSlide>
              <div data-aos="zoom-in" className="featured_carousel_single">
                <img src={featured_image3} />
                <div className="featured_carousel_single_info">
                  <h2>Intricate Handlooms</h2>
                  <h3>
                    <span>over </span> 70 Kinds
                  </h3>
                  <p>India's Heritage Thread by Thread.</p>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
        <div
          data-aos="fade-up"
          className="  z-20 flex absolute top-[40%]  w-[100%]  justify-between  items-center"
        >
          <div className="prev cursor-pointer -translate-x-5">
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
          <div className="next translate-x-5 cursor-pointer">
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
      </div>
    </div>
  );
};

export default Featured;
