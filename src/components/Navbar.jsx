import React, { useState } from 'react'
import Logo from '../assets/sarkinmotaLogo1.png'
import { Menu, X } from 'lucide-react'
import { nav } from 'framer-motion/client'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const navhandler = () => {
  setOpenMenu(!openMenu);
  if (openMenu){
    document.body.style.overflow = 'unsent';
  } else {
    document.body.style.overflow = 'hidden';
  }
  }
  return (
    <nav className='bg-slate-100 py-1'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center px-5 lg:px-0'>
            {/* logo */}
            <div>
              <h1 className='text-red-800 font-black text-3xl tracking-tight'>SARKINMOTA_AUTOS</h1>
              {/*<img src={Logo} alt="our logo" className='w-24'/>*/}
            </div>
            {/* nav links */}
            <ul className='lg:flex gap-6 items-center hidden'>
              <li className='hover:text-red-500 cursor-pointer transition-all' ><a href="/">Home</a></li>
              <li className='hover:text-red-500 cursor-pointer transition-all'><a href="/aboutus">About Us</a></li>
              <li className='hover:text-red-500 cursor-pointer transition-all'><a href="/ourcars">Our Cars</a></li>
              <li className='hover:text-red-500 cursor-pointer transition-all'><a href="/contactus">Contact Us</a></li>
              <button className='bg-red-500 cursor-pointer hover:bg-red-500/85 text-white px-4 py-2 rounded-full transition-all'>Sign Up</button>
            </ul>
            <button onClick={navhandler} className='lg:hidden z-50 cursor-pointer'>
              {openMenu ?<X /> : <Menu /> }
            </button>      
        </div>
      </div>
      {
      openMenu ? (
      <nav className='lg:hidden'>
        <ul className='flex flex-col space-y-10 bg-slate-50 w-[300px] h-[950px] items-center pt-36 absolute text-2xl font-semibold top-0 z-30 right-0'>
          <li className='hover:text-red-500 cursor-pointer transition-all'><a href="/">Home</a></li>
          <li className='hover:text-red-500 cursor-pointer transition-all'><a href="/aboutus">About Us</a></li>
          <li className='hover:text-red-500 cursor-pointer transition-all'><a href="/ourcars">Our Cars</a></li>
          <li className='hover:text-red-500 cursor-pointer transition-all'><a href="/contactus">Contact Us</a></li>
          <button className='bg-red-500 hover:bg-red-500/85 cursor-pointer transition-all text-white px-4 py-2 rounded-full'>Sign Up</button>
        </ul>
      </nav>
      ) : null
      }
    </nav>
  )
}

export default Navbar
