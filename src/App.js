import React, { useState, useEffect } from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/slider/Slider";
import { latest, top, action } from "./urls";

function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

function App() {
  const [width] = useWindowSize();
  if (width > 1200) {
    return (
      <div className="App" style={{ backgroundColor: "#0f171e" }}>
        <Navbar />
        <Banner />
        <Slider title="Latest movies" url={latest} />
        <Slider title="Top movies" url={top} />
        <Slider title="Action movies" url={action} />
      </div>
    );
  } else {
    return (
      <div>
        <p>This app is not responsive. You may visit from a Desktop.</p>
      </div>
    );
  }
}

export default App;
