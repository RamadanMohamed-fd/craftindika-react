import React, { useEffect } from "react";
import image1 from "../../../images/investor/logos/11.webp";
import image2 from "../../../images/investor/logos/2.webp";
import image3 from "../../../images/investor/logos/3.webp";
import image4 from "../../../images/investor/logos/4.webp";
import image5 from "../../../images/investor/logos/5.webp";
import image6 from "../../../images/investor/logos/6.webp";
const Logos = (props) => {
  const handleValue = () => {
    props.linkValue("#investNow");
  };

  return (
    <div
      id="logos"
      className=" bg-white w-full  pt-10 "
      onMouseEnter={handleValue}
    >
      <div className="flex xl:w-[60%] sm:w-[80%] max-sm:w-[80%] m-auto flex-wrap justify-center items-center ">
        <img
          data-aos="fade-right"
          src={image1}
          className="w-[210px]   px-14 "
        />
        <div className="flex max-[666px]:flex-col justify-center items-center py-4 ">
          <img
            data-aos="fade-down"
            src={image2}
            className="w-[120px] px-2 max-[666px]:pb-1"
          />
          <img data-aos="fade-down" src={image3} className="w-[200px] " />
        </div>
        <img data-aos="fade-left" src={image4} className="w-[250px] p-10" />
        <img
          data-aos="fade-right"
          src={image5}
          className="w-[236px] px-5 pt-5"
        />
        <img
          data-aos="fade-left"
          src={image6}
          className="w-[250px] px-5 pt-5 "
        />
      </div>
    </div>
  );
};

export default Logos;
