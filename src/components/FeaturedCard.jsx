import React from 'react'

const FeaturedCard = ({id, img, name, price, tag}) => {
  return (
    <div className='relative border-2 border-red-100 bg-red-50 text-black rounded-xl mb-2 cursor-pointer hover:scale-95 hover:bg-red-200 transition-all duration-200 ease-linear' key={id}>
      <div>
        <img src={img} alt="" className='rounded-t-xl w-full'/>
      </div>
      <div className='flex flex-col justify-center items-center'>
            <h3 className='font-open-sans font-semibold text-lg lg:text-xl pt-2 text-red-500'>{name}</h3>
        <div className='font-open-sans flex gap-10 py-2'>
            <p className='font-medium text-[15px] lg:text-lg'>Starting at <span className=''>#{price}</span></p>
        </div>
      </div>
      <p className='absolute bg-red-500 font-bold top-1 right-2 px-1 py-0.5 rounded-xl text-red-100 font-open-sans text-sm lg:text-[16px]'>{tag}</p>
    </div>
  )
}

export default FeaturedCard
