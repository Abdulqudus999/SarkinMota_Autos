import React, {useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import NewsAndAdvicesCards from './NewsAndAdvicesCards'
import new1 from '../assets/car-news1.jpg'
import new2 from '../assets/car-news2.jpg'
import new3 from '../assets/car-news3.jpg'
import new4 from '../assets/car-news4.jpg'
import new5 from '../assets/car-news5.jpg'
import new6 from '../assets/car-news6.jpg'
import new7 from '../assets/car-news7.jpg'
import new8 from '../assets/car-news-8.jpg'
import new9 from '../assets/car-news9.jpg'
import new10 from '../assets/car-news10.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const NewsAndAdvices = () => {

  useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: 'ease-in-sine',
          delay: 100,
        });
        AOS.refresh();
      }, [])


  const newsAndAdvices = [
    {
      id: 0,
      img: new1,
      news: 'Beta Cars Nah Sarkin Mota Autos Sell Ham, so what are you waiting for my brother, come and buy before you hear sold.'
    },
    {
      id: 1,
      img: new2,
      news: 'Beta Cars Nah Sarkin Mota Autos Sell Ham, so what are you waiting for my brother, come and buy before you hear sold.'
    },
    {
      id: 2,
      img: new3,
      news: 'Beta Cars Nah Sarkin Mota Autos Sell Ham, so what are you waiting for my brother, come and buy before you hear sold.'
    },
    {
      id: 3,
      img: new4,
      news: 'Beta Cars Nah Sarkin Mota Autos Sell Ham, so what are you waiting for my brother, come and buy before you hear sold.'
    },
    {
      id: 4,
      img: new5,
      news: 'Beta Cars Nah Sarkin Mota Autos Sell Ham, so what are you waiting for my brother, come and buy before you hear sold.'
    },
    {
      id: 5,
      img: new6,
      news: 'Beta Cars Nah Sarkin Mota Autos Sell Ham, so what are you waiting my brother, come and buy before you hear sold.'
    },
    {
      id: 6,
      img: new7,
      news: 'Do not drink while driving, always drive safely.'
    },
    {
      id: 7,
      img: new8,
      news: 'Do not over-speed, Over-speeding kills, always drive safely.'
    },
    {
      id: 8,
      img: new9,
      news: 'Do not drink while driving, always drive safely.'
    },
    {
      id: 9,
      img: new10,
      news: 'Do not over-speed, Over-speeding kills, always drive safely.'
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
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
    <section className=' bg-slate-50 py-10 overflow-hidden'>
      <div className='text-center mb-7'>
        <h1
        data-aos="zoom-in"
        data-aos-duration="1000"
        className='font-Merriweather text-4xl lg:text-6xl font-bold'>Car <span className='text-red-500'>News</span> and <span className='text-red-500'>Advices</span></h1>
        <p
        data-aos="zoom-in"
        data-aos-duration="1500" 
        className='font-open-sans text-lg lg:text-xl'>We provide you the best and latest updates about cars.</p>
      </div>
      <div>
        <Slider {...settings}>
            {
          newsAndAdvices.map((newsAndAdvice) => (
            <NewsAndAdvicesCards key={newsAndAdvice.id} img={newsAndAdvice.img} news={newsAndAdvice.news} />
          ))
        }
        </Slider>
      </div>
    </section>
  )
}

export default NewsAndAdvices
