import { assets } from '@/Assets/Assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode,setIsDarkMode}) => {
    const [isScroll,setIsScroll]=useState(false)
const sideMenuRef=useRef();
const openMenu=()=>{
    sideMenuRef.current.style.transform='translateX(-16rem)'
}
const closeMenu=()=>{
    sideMenuRef.current.style.transform='translateX(16rem)'
}
useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(scrollY>50){
     setIsScroll(true)   
    }else{
        setIsScroll(false)
    }
})
},[])
  return (
    <>
    {/* <div className='fixed top-0  right-0 w-11/12 -z-10 translate-y-[-80%] '>
        <Image src={assets.background}  alt='' className='w-full object-cover' priority/>
    </div> */}
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex  items-center justify-between z-50
        ${isScroll? "bg-white bg-opacity-100 backdrop-blur-lg shadow-sm dark:bg-DarkTheme dark:shadow-white/20" :""}`} >
        <a href="#top">
            <Image src={isDarkMode ? assets.logo_dark:assets.logo} className='w-28 cursor-pointer mr-14' alt=''/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-6 rounded-full px-12 py-3  
            ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
            <li><a href='#top'className='font-Ovo'>Home</a></li>
            <li><a href='#about'className='font-Ovo'>About me</a></li>
            <li><a href='#services'className='font-Ovo'>Services</a></li>
            <li><a href='#work'className='font-Ovo'>My work</a></li>
            <li><a href='#contact'className='font-Ovo'>Contact me</a></li>
        </ul>
        
        <div className='flex items-center gap-4'> 
        <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={ isDarkMode ?assets.sun : assets.moon} alt='' className='w-8'/>
        </button>
            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-1 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
            Contact <Image src={isDarkMode ? assets.dark_arrow:assets.contact_icon} alt='' className='w-6' /></a>
            <button className='block md:hidden ml-3'>
            <Image src={isDarkMode ?assets.more : assets.web} alt='' className='w-8' onClick={openMenu}/>
        </button>
        </div>
        {/* Mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 
        bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-Darkhover dark:text-white'>
            <div className='absolute top-6 right-6' onClick={closeMenu}>
                <Image src={isDarkMode? assets.dark_close :assets.close} alt='' className='w-5 cursor-pointer'/>
            </div>
        <li><a href='#top'className='font-Ovo'onClick={closeMenu}>Home</a></li>
            <li><a href='#about'className='font-Ovo'onClick={closeMenu}>About me</a></li>
            <li><a href='#services'className='font-Ovo'onClick={closeMenu}>Services</a></li>
            <li><a href='#work'className='font-Ovo'onClick={closeMenu}>My work</a></li>
            <li><a href='#contact'className='font-Ovo'onClick={closeMenu}>Contact me</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
