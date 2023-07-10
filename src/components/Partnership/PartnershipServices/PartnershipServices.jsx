import React from "react";
import "./partnershipservices.css";
import Lottie from "react-lottie";

// Icons import
import Shop from "../../../images/services/shop.json";
import Business from "../../../images/services/business.json";
import Mandala from "../../../images/services/mandala.json";
import Footprint from "../../../images/services/footprint.json";
import Legal from "../../../images/services/legal.json";
import Logistic from "../../../images/services/Logistic.json";

const PartnershipServices = () => {
  return (
    <div className="partnershipservices">
      <div className="partnershipservices_header">
        <p data-aos="fade-up">OFFERINGS</p>
        <h1 data-aos="fade-up">What do we cater?</h1>
      </div>
      <div className="partnershipservices_services">
        <div className="partnershipservices_services_single">
          <span data-aos="fade-up">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Mandala,
                renderer: "svg",
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3 data-aos="fade-up">Incredible Artisanal</h3>
            <h3 data-aos="fade-up">Creations</h3>
          </div>
        </div>
        <div className="partnershipservices_services_single">
          <span data-aos="fade-up">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Legal,
                renderer: "svg",
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3 data-aos="fade-up">Legitimately Handcrafted</h3>
            <h3 data-aos="fade-up">Masterpieces</h3>
          </div>
        </div>
        <div className="partnershipservices_services_single">
          <span data-aos="fade-up">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Business,
                renderer: "svg",
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3 data-aos="fade-up">Seamless Business</h3>
            <h3 data-aos="fade-up">Execution</h3>
          </div>
        </div>

        <div className="partnershipservices_services_single">
          <span data-aos="fade-up">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Logistic,
                renderer: "svg",
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3 data-aos="fade-up">Exceptional Fulfilment</h3>
            <h3 data-aos="fade-up">Excellence</h3>
          </div>
        </div>
        <div className="partnershipservices_services_single">
          <span data-aos="fade-up">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Footprint,
                renderer: "svg",
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3 data-aos="fade-up">Peerless Digital</h3>
            <h3 data-aos="fade-up">Footprint</h3>
          </div>
        </div>
        <div className="partnershipservices_services_single">
          <span data-aos="fade-up">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Shop,
                renderer: "svg",
              }}
              height={65}
              width={65}
            />
          </span>
          <div>
            <h3 data-aos="fade-up">Advance Experience</h3>
            <h3 data-aos="fade-up">Centre</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipServices;
