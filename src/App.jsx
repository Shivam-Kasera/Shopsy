import React, { useEffect, useState } from 'react'
import {
  Banner,
  Footer,
  Hero, 
  NavBar,
  Popup,
  Products,
  SubScribe,
  Testimonial,
  TopProducts
} from "./components";
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {

  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100
    })
    AOS.refresh()
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <NavBar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <SubScribe />
      <Products />
      <Testimonial />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <Footer />
    </div>
  )
}

export default App