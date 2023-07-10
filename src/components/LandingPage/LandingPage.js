import React, { useState } from "react";
import Hero from "./Hero/Hero";
import Artisanal from "./Artisanal/Artisanal";
import Mission from "./Mission/Mission";
import Embark from "./Embark/Embark";
import Certified from "./Certified/Certified";
import Essence from "./Essence/Essence";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Collection from "../Collection/Collection";
import Featured from "./Featured/Featured";
import Showcase from "./Showcase/Showcase";
import Process from "./Process/Process";
import FAQComponent from "../FAQComponent/FAQComponent";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const LandingPage = () => {
  const faqCompHeading = {
    firstLine: "Introducing",
    secondLine: "CraftPartner Program",
  };
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const [linkValue, setLinkValue] = useState("");

  const handleLinkValue = (data) => {
    setLinkValue(data);
  };
  return (
    <div>
      <Hero />
      <Artisanal />
      <Featured />
      <Collection />
      <Essence />
      <Mission />
      <Testimonials />
      <Process />
      <Certified />
      <Showcase />
      <FAQComponent heading={faqCompHeading} />
      <Embark />
      <Footer linkValue={handleLinkValue} />
    </div>
  );
};

export default LandingPage;
