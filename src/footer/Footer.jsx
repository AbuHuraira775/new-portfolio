import React from 'react'

function Footer() {
  return (
    <div className='footer flex flex-col items-center justify-center'>
      <div className="footer-links mb-16">
          <a href="#home" className='hover:bg-slate-200 py-2 px-5 rounded-md hover:cursor-pointer'>About</a>
          <a href="#resume" className='hover:bg-slate-200 py-2 px-5 rounded-md hover:cursor-pointer'>Resume</a>
          <a href="#skills" className='hover:bg-slate-200 py-2 px-5 rounded-md hover:cursor-pointer'>Skills</a>
          <a href="#portfolio" className='hover:bg-slate-200 py-2 px-5 rounded-md hover:cursor-pointer'>Projects</a>
          <a href="#services" className='hover:bg-slate-200 py-2 px-5 rounded-md hover:cursor-pointer'>Services</a>
          <a href="#contact" className='hover:bg-slate-200 py-2 px-5 rounded-md hover:cursor-pointer'>Contact</a>
      </div>

      <div className="footer-bottom mb-5 text-zinc-700 flex flex-col items-center" >
        <p className='mb-2'>copyright © 2023 Abu Huraira.</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer