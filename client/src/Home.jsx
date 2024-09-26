import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Trusted from "./components/Truested";
import Service from "./components/Service";

import MultiCarousel from "./components/MultiCarousal";
import HomePageProduct from "./components/HomePageProduct";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Trusted />
      <MultiCarousel/>
      <HomePageProduct/>
    </div>
  );
};

export default Home;
