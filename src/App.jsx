import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurCars from './pages/OurCars'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/aboutus' element={<AboutUs />}/>
      <Route path='/ourcars' element={<OurCars />}/>
      <Route path='/contactus' element={<ContactUs />}/>
    </Routes>
    </HashRouter>
    
    
    </>
  )
}

export default App
