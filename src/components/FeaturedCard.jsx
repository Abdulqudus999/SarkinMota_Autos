import React from 'react'

const FeaturedCard = ({id, img, name, price}) => {
  return (
    <div className='border-2 border-red-100 bg-red-50 text-black rounded-xl mb-2 cursor-pointer hover:scale-95 hover:bg-red-200 transition-all duration-200 ease-linear' key={id}>
      <div>
        <img src={img} alt="" className='rounded-t-xl w-full'/>
      </div>
      <div className='flex flex-col justify-center items-center'>
            <h3 className='font-semibold text-lg lg:text-xl pt-2 text-red-500'>{name}</h3>
        <div className='flex gap-10 py-2'>
            <p className='font-medium text-[15px] lg:text-lg'>Starting at <span className=''>#{price}</span></p>
        </div>
        <button className='px-2 py-1 bg-red-500 font-semibold hover:bg-red-400 transition duration-300 text-lg lg:text-xl rounded-lg hover:text-red-700'>Buy Me</button>
      </div>
      
    </div>
  )
}

export default FeaturedCard
