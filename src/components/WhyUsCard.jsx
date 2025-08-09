import React from 'react'

const WhyUsCard = ({icon, title, desc}) => {
  return (
    <div className='overflow-hidden outline-2 outline-red-200 px-4 py-2 bg-red-50 flex flex-col items-center rounded-lg'>
      <p className='font-bold w-7'>{icon}</p>
      <h3 className='font-open-sans font-bold text-lg lg:text-xl'>{title}</h3>
      <p className='font-open-sans'>{desc}</p>
    </div>
  )
}

export default WhyUsCard
