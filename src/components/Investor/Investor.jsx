import { useState, useEffect, lazy, Suspense } from "react";
import Header from "./header/Header";
import ScrollSection from "./scroll/ScrollSection";
import AOS from "aos";
import "aos/dist/aos.css";
const Invite = lazy(() => import("./invitation/Invite"));
const Problem = lazy(() => import("./problem/Problem"));
const Solutions = lazy(() => import("./solutions/Solutions"));
const Process = lazy(() => import("./process/Process"));
const Supported = lazy(() => import("./supported/Supported"));
const Invesrtment = lazy(() => import("./investment/Invesrtment"));
const Logos = lazy(() => import("./logos/Logos"));
const Footer = lazy(() => import("../Footer/Footer"));
const InvestNow = lazy(() => import("./investNow/InvestNow"));

function App() {
  const [linkValue, setLinkValue] = useState("");

  const handleLinkValue = (data) => {
    setLinkValue(data);
  };
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div>
      <ScrollSection href={linkValue} />
      <Header linkValue={handleLinkValue} />
      <Suspense fallback={<div>Loading...</div>}>
        <Invite linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Problem linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Solutions linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Process linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Supported linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Invesrtment linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Logos linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <InvestNow linkValue={handleLinkValue} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer linkValue={handleLinkValue} />
      </Suspense>
    </div>
  );
}

export default App;
