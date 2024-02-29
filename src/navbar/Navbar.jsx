import React, { useState } from 'react'
import { TbLogin2 } from "react-icons/tb";
import logo from '../images/logo.png'
import { FaBaby, FaBars, FaCross, FaCrosshairs, FaCut, FaFontAwesomeLogoFull, FaMarkdown } from 'react-icons/fa';
import {FaX, FaXmark} from 'react-icons/fa6'
import MobileMenu from './MobileMenu';
function Navbar() {

  const  [mobileMenu,setMobileMenu] = useState(true)
  return (
    // <div className='navbar w-full max-h-16 flex justify-between items-center shadow-sm px-5'>
    <div className='navbar w-full max-h-16 grid grid-cols-3  shadow-sm  bg-slate-200 fixed '>

      <div className="nav-logo w-48 mt-1 grid-cols-1 flex self-center">
        <a href="#home"><img src={logo} alt="" /></a>
      </div>


      <div className="nav-links grid-cols-1 h-16  flex ">
        <ul className='w-100 lg:flex items-center justify-between sm:hidden '>
          <li className='mx-5'><a href="#home">About</a></li>
          <li className='mx-5'><a href="#resume">Resume</a></li>
          <li className='mx-5'><a href="#portfolio">Portfolio</a></li>
          <li className='mx-5'><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="nav-switches  lg:grid grid-cols-1 relative object-right sm:hidden">
        <div className="nav-visitor"></div>
        <div className="nav-admin flex justify-end text-2xl w-full h-16 object-right ">
          <button className='h-16 w-12 '><TbLogin2 /></button></div>
      </div>

      
      <div className="toogle-menu lg:hidden flex items-center justify-end mr-3 " onClick={()=>setMobileMenu(!mobileMenu)}>
       {mobileMenu ? <FaBars /> : <MobileMenu /> }
      </div>
    </div>
  )
}

export default Navbar