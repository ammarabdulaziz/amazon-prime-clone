import Banner from "./components/banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/slider/Slider";
import { latest, top, action } from "./urls";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#0f171e" }}>
      <Navbar />
      <Banner />
      <Slider title="Latest movies" url={latest} />
      <Slider title="Top movies" url={top} />
      <Slider title="Action movies" url={action} />
    </div>
  );
}

export default App;
