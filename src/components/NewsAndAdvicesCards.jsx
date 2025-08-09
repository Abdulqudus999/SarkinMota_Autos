import React from 'react'

const NewsAndAdvicesCards = ({id, img, news}) => {
  return (
    <div className='border-2 border-red-100 bg-red-50 text-black rounded-xl cursor-pointer' key={id}>
      <div>
        <img src={img} alt="" className='w-full'/>
      </div>
      <div className='font-open-sans font-semibold text-sm lg:text-lg'>
        {news}
      </div>
    </div>
  )
}

export default NewsAndAdvicesCards
