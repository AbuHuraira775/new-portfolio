import React from 'react'
import background from '../images/a.jpg'
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaBook, FaCertificate, FaHandHolding, FaHatCowboy, FaNetworkWired, FaWhatsapp } from 'react-icons/fa'
import books from '../images/books.jpeg'

function Resume() {
  return (
    <div className='resume px-5 h-max mb-16 px-5 ' id='resume'>

      <div className="resume-heading lg:flex flex-col items-center mb-10 sm:flex">
        <p className='text-zinc-500 text-base'>Explore my</p>
        <h2 className='font-bold text-4xl'>Profile</h2>
      </div>

      <div className="resume-about lg:grid grid-cols-2">

        <div className="resume-left mx-2 flex items-center justify-center">
          <img src={books} alt=""className='rounded-2xl h-5/6' />
        </div>
        <div className="resume-right grid grid-cols-2 gap-10 py-5 ml-3">
          <ProfileBox comp={<GrUserExpert />} title="Experience" experience_year='2+ years' description='FrontEnd Development'/>
          <ProfileBox comp={<FaBook />} title="Education" subtitle='BS Software Engineering' experience_year='2021-present' description='Sindh Madressatul Islam University, Pakistan' />
          <ProfileBox comp={<MdOutlineWorkOutline/>} title="Interships" subtitle='Interns Pakista' experience_year='June 2021 - July 2021' description='FronntEnd Development' />
          <ProfileBox comp={<FaCertificate />} title="Certificationns" subtitle='Jawan Pakistan' experience_year='2021' description='FrontEnd Development' />
        </div>
      </div>
    </div>
  )
}

const ProfileBox = (props) => {
  return (
    <div className="resume-box p-5 flex flex-col items-center justify-center rounded-xl h-45 text-center">
      {/* <img src={props.image} alt="" /> */}
      {props.comp}
      {/* <p>image here</p> */}
      <h2 className='m-2 font-bold'>{props.title}</h2>
      <p className='text-zinc-500 mb-2'>{props.subtitle}</p>
      <p className='text-zinc-500 mb-2 text-base'>{props.experience_year}</p>
      <p className='text-zinc-500 mb-2'>{props.degree_name}</p>
      <p className='text-zinc-900 mb-2'>{props.description}</p>
    </div>
  )
}
export default Resume