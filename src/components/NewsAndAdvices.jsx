import React from 'react'
import NewsAndAdvicesCards from './NewsAndAdvicesCards'
import { details } from 'framer-motion/client'

const NewsAndAdvices = () => {
  const newsAndAdvices = [
    {
      id: 0,
      img: '',
      details: ''
    }
  ]
  return (
    <section className='bg-slate-50 py-10'>
      <div className='text-center'>
        <h1 className='text-4xl lg:text-6xl font-bold'>Car <span className='text-red-500'>News</span>and <span className='text-red-500'>Advices</span></h1>
        <p className='text-lg lg:text-xl mt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, molestiae?</p>
      </div>
      <div>
        {
          newsAndAdvices.map((newsAndAdvice) => (
            <NewsAndAdvicesCards key={newsAndAdvice.id} img={newsAndAdvice.img} details={newsAndAdvice.details} />
          ))
        }
      </div>
    </section>
  )
}

export default NewsAndAdvices
