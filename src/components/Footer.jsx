import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <section className='bg-red-50'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4 text-red-500'>Quick links</h3>
            <ul className='space-y-2'>
              <li>Home</li>
              <li>Inventory</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3>Contact Us</h3>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Footer
