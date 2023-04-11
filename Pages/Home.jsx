import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import HeroSection from '../Components/HeroSection/HeroSection'
import InfoSection from "../Components/InfoSection/InfoSection";
import { HomeObj1, HomeObj2, HomeObj3, HomeObj4 } from "../Components/InfoSection/Data";
import Services from "../Components/Services/Services";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen}  toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection/>
      <InfoSection {...HomeObj1}/>
      <InfoSection {...HomeObj2}/>
      <InfoSection {...HomeObj3}/>
      <InfoSection {...HomeObj4}/>
      <Services/>
      <Footer/>
      
    </>
    )
};


export default Home;
