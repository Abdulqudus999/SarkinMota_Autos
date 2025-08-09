import React from 'react'
import ourmissioncar from '../assets/aboutcar.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../utility/Animation'

const OurMision = () => {
  return (
    <section className='bg-slate-50 py-10 overflow-hidden'>
      <motion.div 
              variants={FadeUp(0.2)}
              initial="hidden"
              animate="visible"
      className='text-center my-7'>
        <h1 className='font-Merriweather text-4xl lg:text-6xl font-bold'>Our <span className='text-red-500 '>Mission</span></h1>
        <p className='font-open-sans text-lg lg:text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nemo?</p>
      </motion.div>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
              <div className='lg:w-1/2'>
                <motion.img 
                initial = {{opacity:0, x:-200, scale:0.7}}
                whileInView = {{opacity:1, x:0, scale:1}}
                transition={{duration:1.5, delay:0.2}}
                src={ourmissioncar} alt="" />
              </div>
              <div className='lg:w-1/2 px-4 lg:px-0'>
                <motion.p 
                  initial = {{opacity:0, x:200}}
                  whileInView = {{opacity:1, x:0}}
                  transition={{duration:1, delay:0.2}}
                  className='font-open-sans'
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque reprehenderit autem. Asperiores ullam reprehenderit vel eum debitis numquam veritatis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed in quidem eius minus ut libero iste ex necessitatibus nulla modi culpa dicta dolores debitis obcaecati non aspernatur labore expedita cupiditate sint facilis, quo enim omnis! Adipisci voluptate ipsam minima.
                </motion.p>
              </div>
      </div>
    </section>
  )
}

export default OurMision
