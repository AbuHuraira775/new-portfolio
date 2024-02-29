import React from 'react'
import { FaXmark } from 'react-icons/fa6'
import { TbLogin2 } from 'react-icons/tb'

function MobileMenu() {
  return (
    <div className='mobile-menu grid gap-2 fixed top-4 bg-teal-100 w-56 p-2 rounded-lg'>

        <div className="cross-icon flex items-end justify-end mb-8">
            <FaXmark />
        </div>
        <div className="mobile-menu-links">
            <ul className='flex flex-col items-center justify-end'>
                <a href="#home"><li>About</li></a>
                <a href="#resume"><li>Resume</li></a>
                <a href="#portfolio"><li>Portfolio</li></a>
                <a href="#contact"><li>Contact</li></a>
            </ul>
        </div>
        <div className="login-option flex flex-col items-center justify-end">
        <button className='h-16 w-12 '><TbLogin2 /></button></div>
        </div>
  )
}

export default MobileMenu