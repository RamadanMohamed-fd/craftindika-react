import PartnershipHero from "./Hero/PartnershipHero";
import PartnershipProgram from "./Program/PartnershipProgram";
import PartnershipServices from "./PartnershipServices/PartnershipServices";
import Packages from "./Packages/Packages";
import Helps from "./Helps/Helps";
import BecomeCraftPartner from "./BecomeCraftPartner/BecomeCraftPartner";
import FAQComponent from "./FAQComponent/FAQComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import News from "./News/News";
import Certificate from "./Certificate/Certificate";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";

const Partnership = () => {
  const faqCompHeading = {
    firstLine: "Frequently Asked",
    secondLine: "Questions",
  };
  const [linkValue, setLinkValue] = useState("");

  const handleLinkValue = (data) => {
    setLinkValue(data);
  };
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div>
      <PartnershipHero />
      <PartnershipProgram />
      <PartnershipServices />
      <News />
      <Packages />
      <Helps />
      <FAQComponent heading={faqCompHeading} />
      <Certificate />
      <BecomeCraftPartner />
      <Footer linkValue={handleLinkValue} />
    </div>
  );
};

export default Partnership;
