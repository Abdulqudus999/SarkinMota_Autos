import React from 'react'
import ceo from '../assets/mybrada2.png'
import { motion } from 'framer-motion'
import { FadeUp } from '../utility/Animation';

const CEOSarKinMota = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <div className='lg:w-1/2'>
                      <motion.img 
                      initial={{opacity:0, scale:0.5}}
                      whileInView={{opacity:1, scale:1}}
                      transition={{duration:1.4, delay:0}}
                      src={ceo} alt="" className='w-[300px] rounded-3xl border-4 border-red-200' />
                    </div>
                    <div className='lg:w-1/2 px-4 lg:px-0'>
                      <motion.p 
                        variants={FadeUp(1.8)}
                        initial="hidden"
                        animate="visible"
                        className='font-open-sans'
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cumque reprehenderit autem. Asperiores ullam reprehenderit vel eum debitis numquam veritatis!
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque sed in quidem eius minus ut libero iste ex necessitatibus nulla modi culpa dicta dolores debitis obcaecati non aspernatur labore expedita cupiditate sint facilis, quo enim omnis! Adipisci voluptate ipsam minima.
                      </motion.p>
                    </div>
            </div>
    </div>
  )
}

export default CEOSarKinMota
