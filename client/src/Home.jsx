import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Trusted from "./components/Truested";
import Service from "./components/Service";

import MultiCarousel from "./components/MultiCarousal";
import HomePageProduct from "./components/HomePageProduct";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Trusted />
      <MultiCarousel/>
      <HomePageProduct/>
      <Footer/>
    </div>
  );
};

export default Home;
