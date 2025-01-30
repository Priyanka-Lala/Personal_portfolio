import { assets } from '@/Assets/Assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode?assets.logo_dark:assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode?assets.dark_mail:assets.mail} alt='' className='w-8'/>
        priyankalala50@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Priyanka Lala.All rights reserved</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href='https://github.com/Priyanka-Lala?tab=repositories' target='_blank'>Github</a></li>
            <li><a href='https://www.linkedin.com/in/priyanka-lala-24641722b' target='_blank'>LinkedIn</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
