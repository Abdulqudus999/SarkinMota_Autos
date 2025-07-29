import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CarVideo from '../components/CarVideo'
import Featured from '../components/Featured'
import Inventory from '../components/Inventory'
import WhyUs from '../components/WhyUs'
import About from '../components/About'
import OurMision from '../components/OurMision'



const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CarVideo />
    <Featured />
    <WhyUs />
    <OurMision />
    </>
  )
}

export default Home
