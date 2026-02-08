import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Quality from "./pages/Quality/Quality";
import Order from "./pages/Order/Order";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <ScrollToTop />
      <main className="app-main">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
