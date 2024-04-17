import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import { Product } from "./Product.jsx";
import SingleProduct from "./SingleProduct.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
