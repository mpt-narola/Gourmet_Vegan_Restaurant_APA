import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import FoodMenu from "./pages/FoodMenu/FoodMenu";
import Footer from "./pages/Footer/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Specialty from "./pages/Specialty/Specialty";

function App() {
  // const navbarRef = useRef(null);
  // const aboutRef = useRef(null);
  // const serviceRef = useRef(null);
  // const specialtyRef = useRef(null);
  // const navbarRef = useRef(null);
  return (
    <div className="App min-h-screen">
      <Home />
      <About />
      <Service />
      <Specialty />
      <FoodMenu />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
