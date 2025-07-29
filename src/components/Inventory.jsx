import React from 'react'
import Cards from './Cards'
import ourcar1 from '../assets/ourcar1.png'
import ourcar2 from '../assets/ourcar2.png'
import ourcar3 from '../assets/ourcar3.png'
import ourcar4 from '../assets/ourcar4.png'
import ourcar5 from '../assets/ourcar5.png'
import ourcar8 from '../assets/ourcar8.png'
import { ChevronRight } from 'lucide-react'

const Inventory = () => {
  const inventoryCars = [
    {
      id: 1,
      name: 'Mercedes GLE 230',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestias',
      price: '#250,000,000',
      img: ourcar1
    },
    {
      id: 2,
      name: 'Mercedes GLE 230',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestias',
      price: '#250,000,000',
      img: ourcar2
    },
    {
      id: 3,
      name: 'Mercedes GLE 230',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestias',
      price: '#250,000,000',
      img: ourcar3
    },
    {
      id: 4,
      name: 'Mercedes GLE 230',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestias',
      price: '#250,000,000',
      img: ourcar4
    },
    {
      id: 5,
      name: 'Mercedes GLE 230',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestias',
      price: '#250,000,000',
      img: ourcar5
    },
    {
      id: 6,
      name: 'Mercedes GLE 230',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, molestias',
      price: '#250,000,000',
      img: ourcar8
    },
  ]
  return (
    <section className='bg-slate-50 py-10'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col space-y-3 text-center'>
          <h2 className='text-6xl font-bold'>Our Inventory</h2>
          <p className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, in magni.</p>
          <div className='grid gap-6 grid-cols-3 pt-10'>
            {
              inventoryCars.map((item) => {
                return (
                  <Cards key={item.id} item={item} />
                )
              })
            }
          </div>
          <div className='pt-10'>
            <button className='px-4 py-2 border border-red-500 mx-auto flex rounded-lg text-red-500'>See all <ChevronRight/></button>
          </div>
        </div>
      </div>
      
      
    </section>
  )
}

export default Inventory
