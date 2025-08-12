import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CarVideo from '../components/CarVideo'
import Featured from '../components/Featured'
import WhyUs from '../components/WhyUs'
import OurMision from '../components/OurMision'
import Footer from '../components/Footer'
import NewsAndAdvices from '../components/NewsAndAdvices'



const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <CarVideo />
    <Featured />
    <WhyUs />
    <OurMision />
    <NewsAndAdvices/>
    <Footer />
    </>
  )
}

export default Home
