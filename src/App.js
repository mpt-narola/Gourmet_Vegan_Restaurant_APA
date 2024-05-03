import { useRef } from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import FoodMenu from "./pages/FoodMenu/FoodMenu";
import Footer from "./pages/Footer/Footer";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Specialty from "./pages/Specialty/Specialty";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const specialtyRef = useRef(null);
  const foodMenuRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  const pageNameWithRefMap = {
    home: homeRef,
    about: aboutRef,
    service: serviceRef,
    specialty: specialtyRef,
    foodMenu: foodMenuRef,
    gallery: galleryRef,
    contact: contactRef,
    footer: footerRef,
  };

  const handleScrollToPage = (pageName) => {
    pageNameWithRefMap[pageName]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="App min-h-screen">
      <Home ref={homeRef} handleScrollToPage={handleScrollToPage} />
      <About ref={aboutRef} />
      <Service ref={serviceRef} />
      <Specialty ref={specialtyRef} />
      <FoodMenu ref={foodMenuRef} />
      <Gallery ref={galleryRef} />
      <Contact ref={contactRef} />
      <Footer ref={footerRef} />
    </div>
  );
}

export default App;
