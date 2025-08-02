import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import OurCars from './pages/OurCars'
import ContactUs from './pages/ContactUs'

const App = () => {
  return (
    <>
    <BrowserRouter basename="/SarkinMota_Autos">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/aboutus' element={<AboutUs />}/>
      <Route path='/ourcars' element={<OurCars />}/>
      <Route path='/contactus' element={<ContactUs />}/>
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
