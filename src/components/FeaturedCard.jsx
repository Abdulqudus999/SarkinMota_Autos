import React from 'react'

const FeaturedCard = ({id, img, name, price}) => {
  return (
    <div className='flex flex-col items-center justify-center border-4 border-red-200 rounded-lg  bg-red-50 group mx-2 px-4 py-2 overflow-hidden'>
      <div className='aspect-[3/2]'>
        <img src={img} alt="" className='w-full group-hover:scale-110 transition-transform duration-500'/>
      </div>
      <div className=''>
        <h3 className='font-semibold text-lg lg:text-xl'>{name}</h3>
        <p className='text-lg lg:text-xl'>Starting at <span className='font-semibold'>#{price}</span></p>
      </div>
      
    </div>
  )
}

export default FeaturedCard
