import React, { useState } from "react";
import "./becomecraftpartner.css";
import { HiArrowUpRight } from "react-icons/hi2";

import Form from "../Program/Form";
const BecomeCraftPartner = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleOpenDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="becomecraftpartner">
      <div className="becomecraftpartner_heading">
        <h3 data-aos="fade-up">Become a</h3>
        <h3 data-aos="fade-down">CraftPartner</h3>
      </div>

      <div className="becomecraftpartner_paras">
        <p data-aos="fade-up">
          Join the CraftPartner Program today and discover an exclusive
        </p>
        <p data-aos="fade-up">
          collection tailored for your larger spaces, offices, hotels, and more.
        </p>
      </div>
      <div
        data-aos="zoom-in"
        className="cursor-pointer hover:bg-black duration-500 relative px-2 w-[155px]  py-3  hover:text-white  hover:border-white rounded-3xl border-[1px] flex justify-between items-center border-[#343935]"
        onClick={() => setShowDialog(true)}
      >
        <p>Partner Now</p>
        <span>
          <HiArrowUpRight />
        </span>
      </div>

      {showDialog && (
        <div className="">
          <div className="">
            <button className="" onClick={() => setShowDialog(true)}>
              &times;
            </button>
            {showDialog && (
              <Form
                show={handleOpenDialog}
                title="We'll reach out to you shortly"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BecomeCraftPartner;
