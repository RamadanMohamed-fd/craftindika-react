import React, { useState } from "react";
import "./mission.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Mission = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="mission">
      <div className="mission_heading">
        <p data-aos="fade-up">MISSION</p>
        <h3 data-aos="fade-up">Preserve, Enrich & Deliver Masterpieces</h3>
      </div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div data-aos="fade-up" className="mission_stats">
          <div className="mission_stats_single">
            <div className="mission_stats_single_circle">
              {counterOn && <CountUp start={0} end={1000} duration={5} />}+
            </div>
            <h3>Products</h3>
            <p>active and listed</p>
          </div>
          <div data-aos="fade-up" className="mission_stats_single">
            <div className="mission_stats_single_circle">
              {" "}
              {counterOn && <CountUp start={0} end={500} duration={5} />}+
            </div>
            <h3>Sells</h3>
            <p>sold and supported</p>
          </div>
          <div data-aos="fade-up" className="mission_stats_single">
            <div className="mission_stats_single_circle">
              {" "}
              {counterOn && <CountUp start={0} end={5} duration={5} />}+
            </div>
            <h3>Countries</h3>
            <p>served and growing</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Mission;
