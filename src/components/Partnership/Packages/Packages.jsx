import React, { useState } from "react";
import "./packages.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { HiArrowUpRight } from "react-icons/hi2";

import Form from "../Program/Form";
const Packages = () => {
  const handleExpandDetailsClick = (event) => {
    event.preventDefault();
  };

  const [showDialog, setShowDialog] = useState(false);
  const handleOpenDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="packages py-[4rem] px-[8rem] max-lg:px-[4rem] max-[665px]:px-[2rem]">
      <div className="packages_header">
        <p data-aos="fade-down">PACKAGES</p>
        <h1 data-aos="fade-up">Premium Packages to choose from</h1>
      </div>
      <div className="packages_content">
        <div className="packages_content_single">
          <div className="packages_content_single_show">
            <div className="packages_content_single_show_left">
              <h1 data-aos="fade-up-right">Freedom Package</h1>
              <p data-aos="fade-up-right">
                Benefit from a curated selection of inventory, attractive
                discounts, and convenient delivery options. We also offer
                comprehensive support, covering essential services and
                post-sales assistance, ensuring your success in the handicraft
                industry.
              </p>
            </div>
            <span>@</span>
            <h2 data-aos="fade-up-right">$5,000</h2>
          </div>
          <div className="packages_content_single_hide">
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <a
                  data-aos="fade-up-right"
                  className="ulp relative "
                  href="#"
                  onClick={handleExpandDetailsClick}
                >
                  Expand details
                </a>
              </AccordionSummary>
              <AccordionDetails className="hide_content">
                <div className="packages_content_single_hide_content">
                  <div className="packages_content_single_hide_content_box">
                    <p>01</p>
                    <h3>Inventory Worth</h3>
                    <h3>$5000</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>02</p>
                    <h3>Flat Discount</h3>
                    <h3>on Face Value</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>03</p>
                    <h3>Door Step</h3>
                    <h3>Delivery</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>04</p>
                    <h3>Free</h3>
                    <h3>Documentation</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>05</p>
                    <h3>Custom</h3>
                    <h3>Clearance</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>06</p>
                    <h3>Freight</h3>
                    <h3>Insurance</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>07</p>
                    <h3>Packaging</h3>
                    <h3>Cost</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>08</p>
                    <h3>Post Sales</h3>
                    <h3>Product Support</h3>
                  </div>
                </div>
                <div
                  className="get_it_now_button "
                  onClick={() => setShowDialog(true)}
                >
                  <p data-aos="fade-up-right">Get It Now</p>
                  <span>
                    <HiArrowUpRight />
                  </span>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="packages_content_single">
          <div className="packages_content_single_show">
            <div className="packages_content_single_show_left">
              <h1 data-aos="fade-up-right">Beginner Package</h1>
              <p data-aos="fade-up-right">
                Benefit from a curated selection of inventory, attractive
                discounts, and convenient delivery options. We also offer
                comprehensive support, covering essential services and
                post-sales assistance, ensuring your success in the handicraft
                industry.
              </p>
            </div>
            <span>@</span>
            <h2 data-aos="fade-up-right">$7,000</h2>
          </div>
          <div className="packages_content_single_hide">
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <a
                  data-aos="fade-up-right"
                  className="ulp relative"
                  href="#"
                  onClick={handleExpandDetailsClick}
                >
                  Expand details
                </a>
              </AccordionSummary>
              <AccordionDetails className="hide_content">
                <div className="packages_content_single_hide_content">
                  <div className="packages_content_single_hide_content_box">
                    <p>++</p>
                    <h3>Everything from</h3>
                    <h3>Freedom Package</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>09</p>
                    <h3>Digital</h3>
                    <h3>Transformation</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>10</p>
                    <h3>Product Listing</h3>
                    <h3>Management</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>11</p>
                    <h3>Search Engine</h3>
                    <h3>Optimization</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>12</p>
                    <h3>Digital Marketing</h3>
                    <h3>Optimization</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>13</p>
                    <h3>Social Media</h3>
                    <h3>Management</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>14</p>
                    <h3>Listing</h3>
                    <h3>Management</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>15</p>
                    <h3>Business Setup</h3>
                    <h3>Guidance</h3>
                  </div>
                </div>
                <div
                  className="get_it_now_button "
                  onClick={() => setShowDialog(true)}
                >
                  <p data-aos="fade-up-right">Get It Now</p>
                  <span>
                    <HiArrowUpRight />
                  </span>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="packages_content_single">
          <div className="packages_content_single_show">
            <div className="packages_content_single_show_left">
              <h1 data-aos="fade-up-right">Boost Package</h1>
              <p data-aos="fade-up-right">
                This all-inclusive package offers a curated inventory selection,
                impressive discounts, and hassle-free delivery. Benefit from
                essential services such as documentation, custom clearance,
                freight insurance, and packaging at no extra cost. Enhance your
                online presence with a complimentary website, product listing
                management, SEO, digital marketing, and social media management.
              </p>
            </div>
            <span>@</span>
            <h2 data-aos="fade-up-right">$10,000</h2>
          </div>
          <div className="packages_content_single_hide">
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <a
                  className="ulp relative"
                  href="#"
                  onClick={handleExpandDetailsClick}
                  data-aos="fade-up-right"
                >
                  Expand details
                </a>
              </AccordionSummary>
              <AccordionDetails className="hide_content">
                <div className="packages_content_single_hide_content">
                  <div className="packages_content_single_hide_content_box">
                    <p>++</p>
                    <h3>Everything from</h3>
                    <h3>Beginner Package</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>16</p>
                    <h3>Experience</h3>
                    <h3>Center</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>17</p>
                    <h3>Online Store</h3>
                    <h3>Promo Setup</h3>
                  </div>
                  <div>
                    <p></p>
                    <h3></h3>
                    <h3></h3>
                  </div>
                </div>
                <div
                  className="get_it_now_button "
                  onClick={() => setShowDialog(true)}
                >
                  <p data-aos="fade-up-right">Get It Now</p>
                  <span>
                    <HiArrowUpRight />
                  </span>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className="packages_content_single">
          <div className="packages_content_single_show">
            <div className="packages_content_single_show_left">
              <h1 data-aos="fade-up-right">Advanced Package</h1>
              <p data-aos="fade-up-right">
                Benefit from a curated selection of inventory, attractive
                discounts, and convenient delivery options. We also offer
                comprehensive support, covering essential services and
                post-sales assistance, ensuring your success in the handicraft
                industry.
              </p>
            </div>
            <h2 data-aos="fade-up-right">Talk to Sales</h2>
          </div>
          <div className="packages_content_single_hide">
            <Accordion>
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <a
                  className="ulp relative"
                  href="#"
                  onClick={handleExpandDetailsClick}
                  data-aos="fade-up-right"
                >
                  Expand details
                </a>
              </AccordionSummary>
              <AccordionDetails className="hide_content">
                <div className="packages_content_single_hide_content">
                  <div className="packages_content_single_hide_content_box">
                    <p>++</p>
                    <h3>Everything from</h3>
                    <h3>Boost Package</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>18</p>
                    <h3>Dedicated</h3>
                    <h3>Region</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>19</p>
                    <h3>Sales Commission</h3>
                    <h3>on B2C Direct Sales</h3>
                  </div>
                  <div className="packages_content_single_hide_content_box">
                    <p>20</p>
                    <h3>Sales Commission</h3>
                    <h3>on B2B Direct Sales</h3>
                  </div>
                </div>
                <div
                  className="get_it_now_button "
                  onClick={() => setShowDialog(true)}
                >
                  <p data-aos="fade-up-right">Get It Now</p>
                  <span>
                    <HiArrowUpRight />
                  </span>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>

      {showDialog && <Form show={handleOpenDialog} />}
    </div>
  );
};

export default Packages;
