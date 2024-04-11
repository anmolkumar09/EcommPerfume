import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Trusted from "./components/Truested";
import Service from "./components/Service";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Trusted />
    </div>
  );
};

export default Home;
