import React from 'react'
import video from '../assets/carvideo1.mp4'

const CarVideo = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div>
        <video src={video} className='w-full' autoPlay loop muted />
      </div>
    </section>
  )
}

export default CarVideo
