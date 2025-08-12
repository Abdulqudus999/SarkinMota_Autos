import { BedDoubleIcon, ShipIcon, User2 } from 'lucide-react'
import React, {useEffect} from 'react'
import WhyUsCard from './WhyUsCard';
import { motion } from 'framer-motion';
import { FadeUp } from '../utility/Animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyUs = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, [])

  const icon1 = <BedDoubleIcon/>;
  const icon2 = <User2 />;
  const icon3 = <ShipIcon/>;
  return (
    <section className='py-5 bg-slate-50 overflow-hidden'>
      <div
      className='text-center my-7'>
        <h1
        data-aos="zoom-in"
        data-aos-duration="1000"
        className='font-Merriweather text-4xl lg:text-6xl font-bold'>Why choose <span className='text-red-500'>SarkinMato Autos?</span></h1>
        <p
        data-aos="zoom-in"
        data-aos-duration="1500"
        className='font-open-sans text-lg lg:text-xl'>My Brada, some of the reasons why you choose Sarkin Mota Autos today.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-5'>
        <WhyUsCard 
        icon={icon1} title='Financing Options (PSS)' desc='Our PSS (pay small small) options: with only an initial deposit of 40% you too can own your dream car, so what are you waiting for my brother, come and and buy before you hear sold.'/>
        <WhyUsCard
        icon={icon2} title='Customer Satisfaction' desc='My brada ,Sarkin Mota Autos remains the final bus-stop if you want to buy your dream car. Come Rain come Sunshine cus beta cars nah Sarkin Mota Sell ham.'/>
        <WhyUsCard
        icon={icon3} title='Fast Shipping to customers' desc='We also ensure we satisfy our our customers by delivering their cars to their door-step if they want.'/>
      </div>
    </section>
  )
}

export default WhyUs
