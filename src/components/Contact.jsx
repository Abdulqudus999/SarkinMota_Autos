import React from 'react'
import { motion } from 'framer-motion'
import banner from '../assets/banner.jpg'
const Contact = () => {
  return (
    <section>
      <div className='relative'>
        <div style={{
        height: '600px',
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        filter: 'blur(2px)',
        zIndex: -1
      }}>
      </div>
        <motion.div 
        initial={{opacity:0, scale:0.7}}
        whileInView={{opacity:1, scale:1}}
        transition={{duration:1, delay:0.2}}
        className='absolute top-10 left-32 mx-auto pl-16 w-[400px]'>
          <h2 className='text-5xl font-bold text-white text-center mb-5'>Contact <span className='text-red-500'>Us</span></h2>
          <form action="" className='bg-red-50 rounded-lg p-10 space-y-4'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='font-semibold'>First Name:</label>
              <input type="text" className='px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-red-400 rounded-xl' name='firstname' placeholder='First Name' />
            </div>
             <div className='flex flex-col gap-1'>
              <label htmlFor="" className='font-semibold'>Last Name:</label>
              <input type="text" className='px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-red-400 rounded-xl' name='lastname' placeholder='Last Name' />
            </div>
             <div className='flex flex-col gap-1'>
              <label htmlFor="" className='font-semibold'>Email:</label>
              <input type="email" className='px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-red-400 rounded-xl' name='email' placeholder='Email' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor="" className='font-semibold'>Message:</label>
              <textarea className='px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-red-400 rounded-xl' name='message' placeholder='Write your message ' />
            </div>
            <button className='bg-red-500 text-white px-4 py-2 rounded-lg'>Submit</button>
          </form>
        </motion.div>
      </div>
    
    </section>
  )
}

export default Contact
