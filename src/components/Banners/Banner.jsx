import React from 'react'
import BannerPng from "../..assests/Fruits-splash.png";
import { motion } from 'framer-motion';
import { FadeUp,FadeLeft } from '../../utility/animation';

const Banner = () => {
  return (
    <section className='bg-secondary/10'>
        <div className="containeer grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        {/* Banner Image  */}
        <div className='flex justify-center items-center'>
            <motion.img 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{type : "spring", stiffness: 100, delay: 0.2}}
            viewport={{once: true}}
            src={BannerPng} alt="" className='w-[300px] md:max-w-[400px] h-full object-cover drop-shadow' />
        </div>

        {/* Brand Info */}
        <div className='flex flex-col justify-center'>
            <div
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once : true}}
            className='text-center md:text-left space-y-4 lg:max-w-[400px]'> 
                <motion.h1 className='text-3xl lg:text-6xl font-bold uppercase'>
                    {""}
                    Brand Info</motion.h1>
                <motion.p 
                 variants={FadeUp(0.7)}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once : true}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi repudiandae tenetur perferendis,
                     sunt vitae molestiae aliquam repellat maxime, laboriosam enim quam fuga voluptate dignissimos 
                     illum harum. Explicabo debitis aspernatur veritatis?
                </motion.p>
                <motion.p 
                 variants={FadeUp(0.9)}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once : true}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quam blanditiis animi ullam
                     delectus magni!
                </motion.p>
                     <motion.div 
                                    variants={FadeUp(1.1)}
                                    initial="hidden"
                                    animate="visible"
                                    className='flex justify-center md:justify-start'>
                                        <button className='primary-btn '>
                                            Learn More</button>
                    </motion.div>
            </div>
        </div>

        </div>
    </section>
  )
}

export default Banner