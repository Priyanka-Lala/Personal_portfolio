import { assets, workData } from "@/Assets/Assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"
const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{y:-20, opacity: 0 }}
        whileInView={{y:0 ,opacity: 1 }}
        transition={{ delay:0.3,duration: 0.5}}
      className="text-center mb-2 font-Ovo text-lg">My portfolio</motion.h4>


      <motion.h2 
      initial={{y:-20, opacity: 0 }}
    whileInView={{y:0 ,opacity: 1 }}
    transition={{ delay:0.5,duration: 0.5}} className="text-center text-5xl font-Ovo">My latest work
    </motion.h2>


      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1 }}
      transition={{ delay:0.7,duration: 0.5}}
      className="text-center max-w-2xl mx-auto mt-8 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a diverse collection of
        projects that highlight my expertise in full-stack development,
        showcasing my skills in both front-end and back-end technologies.
      </motion.p>
      
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1 }}
      transition={{ delay:0.9,duration: 0.6}}
      className="grid grid-cols-auto gap-5 my-10 dark:text-black">
        {workData.map((project, index) => (
          <motion.div
          whileHover={{scale:1.05}}
          transition={{duration:0.3}}
            key={index}
            style={{ backgroundImage: `url(${project.bg_image})` }}
            className="aspect-square bg-no-repeat relative bg-center bg-cover rounded-lg cursor-pointer group"
          >
            <div className="bg-white w-10/12 absolute rounded-md bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border border-black rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <a href={project.link} target="_blank"> <Image src={assets.send} alt="send" className="w-5" /> </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1 }}
      transition={{ delay:1.1,duration: 0.5}}
        href=""
        className='w-40 flex items-center justify-center gap-2
         text-gray-700 border-[0.5px] rounded-full border-gray-700 py-3 px-5 mx-auto my-20
      hover:bg-LightHover duration-500 dark:text-white dark:border-white dark:hover:bg-Darkhover'
      >
        Show More
        <Image src={isDarkMode?assets.arrow_submit:assets.arrow_right} alt="right arrow" className="w-4" aria-disabled />
      </motion.a>
    </motion.div>
  );
};

export default Work;
