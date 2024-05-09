import { useEffect, useState } from "react";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Products from "./components/products/products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/topProducts/topProducts";
import Banner from "./components/banner/banner";
import Subscribe from "./components/subscribe/subscribe";
import Testmonails from "./components/testimonails/testmonails";
import Footer from "./components/footer/footer";
import Popup from "./components/popup/popup";

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div  className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <Subscribe/>
      <TopProducts/>
      <Testmonails/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
}

export default App;
