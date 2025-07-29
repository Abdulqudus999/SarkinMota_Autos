import { BedDoubleIcon, ShipIcon, User2 } from 'lucide-react'
import React from 'react'
import WhyUsCard from './WhyUsCard';
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/Animation';

const WhyUs = () => {

  const icon1 = <BedDoubleIcon/>;
  const icon2 = <User2 />;
  const icon3 = <ShipIcon/>;
  return (
    <section className='py-10 bg-slate-50 overflow-hidden'>
      <motion.div
      variants={FadeUp(0.2)}
      initial="hidden"
      animate="visible"
      className='text-center my-7'>
        <h1 className='text-4xl lg:text-6xl font-bold'>Why choose <span className='text-red-500'>SarkinMato Autos</span></h1>
        <p className='text-lg lg:text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </motion.div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-5'>
        <WhyUsCard icon={icon1} title='Financing Options' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus eaque inventore similique voluptatibus iure deleniti, rerum sit fugaLorem ipsum dolor, sit amet consectetur adipisicing
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam animi dolorum. Inventore quia repellat ipsam tempora eum.,'/>
        <WhyUsCard icon={icon2} title='Customer Satisfaction' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus eaque inventore similique voluptatibus iure deleniti, rerum sit fuga,'/>
        <WhyUsCard icon={icon3} title='Fast Shipping to customers' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum temporibus eaque inventore similique voluptatibus iure deleniti, rerum sit fuga,'/>
      </div>
    </section>
  )
}

export default WhyUs
