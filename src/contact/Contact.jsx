import React from 'react'
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className='contact mb-16' id="contact">
      <div className="contact-heading mb-10">
        <p className='text-center text-zinc-600'>Get in Touch</p>
        <h2 className='font-bold text-center font-bold text-3xl'>Contact Me</h2>
      </div>

      <div className="contact-box w-max m-auto px-5 py-3 rounded-3xl flex items-center">
        <div className="email-contact-box contact-option mr-8 hover:bg-slate-200 px-3 py-2 rounded-s-sm">
          <a href="mailto:abuhurairah775@gmail.com" target='_blank' className='flex items-center'>
            <FaEnvelope />
            <p className='ml-3'>abuhurairah775@gmail.com</p>
          </a>
        </div>
        <div className="linkedIn-contact-box contact-option hover:bg-slate-200 px-3 py-2 rounded-s-sm">
          <a href="https://www.linkedin.com/in/abu-huraira-a9828922a/" target='_blank' className='flex items-center'>
            <FaLinkedin />
            <p className='ml-3'>Abu Huraira</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact