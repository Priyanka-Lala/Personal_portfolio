import { assets, infolist, tools } from "@/Assets/Assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"
const Aboutme = ({isDarkMode}) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5,delay:0.3}}
      className="text-center mb-2 font-Ovo text-lg">Introduction</motion.h4>

      <motion.h2
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.5}}
      className="text-center text-5xl font-Ovo">About-me</motion.h2>


      <motion.div
       initial={{opacity:0}}
       whileInView={{opacity:1}}
       transition={{duration:0.8}}
      className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">

        <motion.div 
          initial={{opacity:0,scale:0.9}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.6}}
        className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={assets.user} alt="user" className="w-full rounded-3xl mb-80" />
        </motion.div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.8}}
        className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I'm an enthusiastic and detail-oriented professional with over 2.5
            years of experience seeking a position as a Python Full Stack
            Developer. I thrive on solving complicated challenges through unique
            solutions, utilizing my strong analytical skills and continual
            learning mentality. My path has given me a thorough understanding of
            both front-end and back-end development, enabling me to construct
            smooth and efficient applications. I am committed to improving my
            development skills and contributing to projects that have a
            significant impact. I am known for my collaborative approach and
            commitment to quality, and I hope to be a useful asset to any
            development or quality assurance team.
          </p>
          <motion.ul
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{duration:0.8,delay:1}}
          
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl'>
            {infolist.map(({icon,title,description,descrition_2,description_3,dark_icon},index)=>(
              <motion.li 
              whileHover={{scale:1.05}}
              key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 
              cursor-pointer hover:bg-LightHover 
              hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-Darkhover/50'>
                <Image src={isDarkMode? dark_icon:icon} alt={title} className="w-12 mt-3"/>
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{title}</h3>
                <p className="text-gray-600 text-sm dark:text-white/80">{description}</p>
                <p className="text-gray-600 text-sm dark:text-white/80">{descrition_2}</p>
                <p className="text-gray-600 text-sm dark:text-white/80">{description_3}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4 
           initial={{opacity:0,y:20}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.5,delay:1.3}}
          className="my-6 text-gray-700 font-Ovo  dark:text-white/80">Tools I use</motion.h4>


          <motion.ul 
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6,delay:1.5}}
          className="flex items-center gap-3 sm:gap-5">
          {tools.map((tool, index) => (
              <motion.li
              whileHover={{scale:1.1}}
              key={index} className="flex items-center justify-center w-12 sm:w-14 
              aspect-square border border-gray-400 rounded-lg cursor-pointer  hover:-translate-y-1 duration-500">
                <Image src={tool} alt="Tool" className="w-25 sm:w-7"/>
              </motion.li>
            ))}
            
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Aboutme;
