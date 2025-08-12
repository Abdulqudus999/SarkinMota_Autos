import React, {useEffect} from 'react'
import ourmissioncar from '../assets/aboutcar.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../utility/Animation'
import AOS from 'aos';
import 'aos/dist/aos.css';


const OurMision = () => {

  useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100,
        });
        AOS.refresh();
      }, [])

  return (
    <section className='bg-slate-50 py-10 overflow-hidden'>
      <div 
          
      className='text-center my-7'>
        <h1 
        data-aos="zoom-in"
        data-aos-duration="1000"
        className='font-Merriweather text-4xl lg:text-6xl font-bold'>Our <span className='text-red-500 '>Mission</span></h1>
        <p 
        data-aos="zoom-in"
        data-aos-duration="1500"
        className='font-open-sans text-lg lg:text-xl'>Our mission stated.</p>
      </div>
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
                Our mission is to facilitate car sales and provide related services while prioritizing customer satisfaction and building a strong reputation. We aim to be a trusted source for vehicle purchases, offering a positive and professional experience throughout the entire process. Sarkin Mota Autos continually strives to offer the best car buying experience through our friendly , no-hassle practices with no pressure and no hard sell, conducting our selves with honesty and integrity always.
                </motion.p>
              </div>
      </div>
    </section>
  )
}

export default OurMision
