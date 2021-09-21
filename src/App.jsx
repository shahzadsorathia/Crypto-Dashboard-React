import { useState, useEffect } from "react";
import Navigation  from "./components/navigation";
import  Header  from "./components/header";
import Coin from "./components/coin";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header />
      <Coin  />
     
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
