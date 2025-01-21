import React from 'react'
import BannerPng from "../..assests/banner-bg.jpg";
import { motion } from 'framer-motion';
import { FadeLeft } from '../../utility/animation';



const bgStyle = {
    backgroundImage: 'url(${BannerPng})',
    backgroundPosition :"center" ,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className='container mb-12'>
        <div style={bgStyle}
         className="containeer grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl">
        {/* Blank div */}
        <div>

        </div>
        

        {/* Brand Info */}
        <div className='flex flex-col justify-center'>
            <div
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{once : true}}
            className='text-center md:text-left space-y-4 lg:max-w-[400px]'> 
                <motion.h1 className='text-3xl lg:text-6xl font-bold uppercase'>
                    {""}
                    Brand Info</motion.h1>
                <motion.p 
                 variants={FadeLeft(0.7)}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once : true}}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi repudiandae tenetur perferendis,
                     sunt vitae molestiae aliquam repellat maxime, laboriosam enim quam fuga voluptate dignissimos 
                     illum harum. Explicabo debitis aspernatur veritatis?
                </motion.p>
                
                     <motion.div 
                                    variants={FadeLeft(0.9)}
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

export default Banner3