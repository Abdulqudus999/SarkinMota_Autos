import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CarVideo from '../components/CarVideo'
import Featured from '../components/Featured'
import WhyUs from '../components/WhyUs'
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
