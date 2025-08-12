import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const WhyUsCard = ({icon, title, desc}) => {

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
    <div 
    data-aos='fade-up'
    data-aos-delay='1000'
    className='overflow-hidden outline-2 outline-red-200 px-4 py-2 bg-red-50 flex flex-col items-center rounded-lg'>
      <p className='font-bold w-7'>{icon}</p>
      <h3 className='font-open-sans font-bold text-lg lg:text-xl'>{title}</h3>
      <p className='font-open-sans'>{desc}</p>
    </div>
  )
}

export default WhyUsCard
