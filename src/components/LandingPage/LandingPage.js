import { useState, useEffect, lazy, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./Hero/Hero";
const Artisanal = lazy(() => import("./Artisanal/Artisanal"));
const Mission = lazy(() => import("./Mission/Mission"));
const Embark = lazy(() => import("./Embark/Embark"));
const Certified = lazy(() => import("./Certified/Certified"));
const Essence = lazy(() => import("./Essence/Essence"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const Footer = lazy(() => import("../Footer/Footer"));
const Collection = lazy(() => import("../Collection/Collection"));
const Featured = lazy(() => import("./Featured/Featured"));
const Showcase = lazy(() => import("./Showcase/Showcase"));
const Process = lazy(() => import("./Process/Process"));
const FAQComponent = lazy(() => import("../FAQComponent/FAQComponent"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Artisanal />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Featured />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Collection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Essence />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Mission />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Process />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Certified />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Showcase />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FAQComponent heading={faqCompHeading} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Embark />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer linkValue={handleLinkValue} />
      </Suspense>
    </div>
  );
};

export default LandingPage;
