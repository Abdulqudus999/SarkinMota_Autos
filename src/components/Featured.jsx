import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import featuredCar1 from '../assets/mercedesF1.png'
import featuredCar2 from '../assets/whiteMercedesF2.png'
import featuredCar3 from '../assets/mercedesF2.png'
import featuredCar4 from '../assets/bugattiF1.png'
import featuredCar5 from '../assets/bugattiF2.png'
import featuredCar6  from '../assets/rollsroyceF1.png'
import featuredCar7 from '../assets/rollsroyceF2.png'
import featuredCar8 from '../assets/toyotaF1.png'
import featuredCar9 from '../assets/toyotaF2.png'
import featuredCar10 from '../assets/toyotaF3.png'
import featuredCar11 from '../assets/ferrariF1.png'
import featuredCar12 from '../assets/ferrariF2.png'
import FeaturedCard from './FeaturedCard';
import { motion } from 'framer-motion';
import { Fadeleft, FadeRight, FadeUp } from '../utility/Animation';


const Featured = () => {
  const featuredCars = [
    {
      id:0,
      img: featuredCar1,
      name: 'Mercedes Benz G-class',
      price: '250,000,000'
    },
    {
      id:1,
      img: featuredCar2,
      name: 'White Mercedes amg-sl63',
      price: '200,000,000'
    },
    {
      id:2,
      img: featuredCar3,
      name: 'Mercedes amg-gt luxury',
      price: '300,000,000'
    },
    {
      id:3,
      img: featuredCar4,
      name: 'Bugatti French car',
      price: '900, 000, 000'
    },
    {
      id:4,
      img: featuredCar5,
      name: 'Bugatti Veyron-164',
      price: '1,000,000,000'
    },
    {
      id:5,
      img: featuredCar6,
      name: 'Rolls Royce carrolls',
      price: '150,000,000,000'
    },
    {
      id:6,
      img: featuredCar7,
      name: 'Rolls Royce Carrolls blue',
      price: '150,000,000,000'
    },
    {
      id:7,
      img: featuredCar8,
      name: 'Toyota Land Cruiser',
      price: '450,000,000'
    },
    {
      id:8,
      img: featuredCar9,
      name: 'Toyota c-hr',
      price: '350,000,000'
    },
    {
      id:9,
      img: featuredCar10,
      name: 'Toyota ft-1 sport',
      price: '250,000,000'
    },
    {
      id:10,
      img: featuredCar11,
      name: 'White Ferrari Car',
      price: '250,000,000'
    },
    {
      id:11,
      img: featuredCar12,
      name: 'Yellow Ferrari Car',
      price: '250,000,000'
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className='bg-slate-50 overflow-hidden py-10'>
      <motion.div
      variants={Fadeleft(0.2)}
      initial="hidden"
      animate="visible"
      className='text-center'>
        <h2 className='text-4xl lg:text-6xl font-bold font-Merriweather'>Our <span className='text-red-500'>Featured Cars</span></h2>
        <p className='font-open-sans text-lg lg:text-xl mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </motion.div>
      <div className='mt-8'>
        <Slider {...settings}>
          {featuredCars.map((item)=> (
            <FeaturedCard key={item.id} img={item.img} name={item.name} price={item.price} />
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Featured
