import React from 'react'
import { motion } from 'framer-motion';
import { FadeRight } from '../utility/Animation';
import { ChevronRight } from 'lucide-react';
import aboutcar from '../assets/aboutcar.png'

const About = () => {
  return (
    <section className='bg-slate-50 relative'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex gap-6 h-[650px] justify-center items-center'>
              <div className='w-1/2'>
                <motion.img 
                initial = {{opacity:0, x:-200, scale:0.7}}
                whileInView = {{opacity:1, x:0, scale:1}}
                transition={{duration:1.5, delay:0.2}}
                src={aboutcar} alt="" />
              </div>
              <div className='w-1/2 flex flex-col px-8 space-y-5 justify-center'>
                  <motion.h3 
                  initial = {{opacity:0, x:200}}
                  whileInView = {{opacity:1, x:0}}
                  transition={{duration:0.8, delay:0.1}}
                  className='text-blue-500 text-xl'>On Demand Purchase________
                  </motion.h3>
                  <motion.h1
                  initial = {{opacity:0, x:200}}
                  whileInView = {{opacity:1, x:0}}
                  transition={{duration:1, delay:0.2}}
                  className='text-6xl font-bold'>Find your dream car at <span className='text-blue-500'>SarkinMota Autos</span>
                  <span className='text-sm block'>Beta cars nah Sarkinmota sell ham</span></motion.h1>
                  
                  <motion.p 
                  initial = {{opacity:0, x:200}}
                  whileInView = {{opacity:1, x:0}}
                  transition={{duration:1.5, delay:0.5}}
                  className='text-sm'>Discover the world's most exclusive and high-performance vehicles. From blistering speed to unparalleled luxury, our exotic cars redefine the limit of automotive engineering.</motion.p>
                  <div className='flex gap-3 items-center'>
                  <motion.button 
                  initial = {{opacity:0, x:200}}
                  whileInView = {{opacity:1, x:0}}
                  transition={{duration:1.8, delay:0.7}}
                  className='bg-blue-500 text-white px-4 py-2 rounded-full font-semibold flex items-center'>Explore Models <ChevronRight />
                  </motion.button>
                  <motion.button 
                  initial = {{opacity:0, x:200}}
                  whileInView = {{opacity:1, x:0}}
                  transition={{duration:2, delay:1}}
                  className='bg-white text-blue-500 rounded-full px-4 py-2 border border-blue-500'>Book a Test Drive
                  </motion.button>
                  </div>
              </div>
            </div>
          </div>
          
        </section>
  )
}

export default About
