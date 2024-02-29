import React from 'react'
import profile from '../images/profile.png'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import cv from '../cv/CV.pdf'
function Home() {
  return (
    <div className='home h-max grid grid-cols-2 p-5 mb-10' id='home'>


      <div className="home-left flex items-center justify-end">
        <img src={profile} alt="" className=' h-max rounded-3xl shadow-md'  />
      </div>



      <div className="home-right h-5/6 flex flex-col justify-evenly items-center ml-16 m-auto  ">

        <div className="home-text text-center">

          <p className='text-zinc-500 '>Meet me, I'm</p>
          <p className='text-5xl font-bold'>Abu Huraira</p>
          <p><span className="title text-2xl text-zinc-700 font-bold">Web Developer</span></p>

        </div>

        <div className="home-buttons grid grid-cols-2 gap-1">
          <a href="../cv/CV.pdf" download={cv}>
            <button className='text-black px-5 py-2 rounded-full hover:bg-black hover:text-white' >Dowload CV</button>

          </a>
          <a href="#contact">
            <button className='px-5 py-2 rounded-full hover:bg-black hover:text-white'>Contact Me</button>

          </a>
        </div>
        <div className="home-links flex items-center justify-center">
          {/* <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">WhatsApp</a> */}
          <a href="https://wa.me/03132680481" target='_blank' className='mx-3 text-xl' ><FaWhatsapp /></a>
          <a href="https://www.linkedin.com/in/abu-huraira-a9828922a/" target='_blank' className='mx-3' ><FaLinkedin /></a>
          <a href="https://github.com/AbuHuraira775" target="_blank" className='mx-3'><FaGithub /></a>

        </div>

      </div>
    </div>
  )
}

export default Home