import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CarVideo from '../components/CarVideo'
import Featured from '../components/Featured'
import WhyUs from '../components/WhyUs'
import OurMision from '../components/OurMision'
import Footer from '../components/Footer'
import NewsAndAdvices from '../components/NewsAndAdvices'
import ScrollToTop from 'react-scroll-to-top'



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
    <ScrollToTop smooth  color='white' style={{
        backgroundColor: '#f03b3bff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}/>
    </>
  )
}

export default Home
