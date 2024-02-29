import React from 'react'
import mern from '../images/mern.png'

function About() {
  return (
    <div className='about h-max lg:flex flex-col  items-center px-5 mt-16 sm:flex' id='about'>
      <div className="about-heading mb-10 text-center">
        <p className='text-center  text-zinc-500 text-base'>Get to know more </p>
        <h2 className='font-bold text-center text-4xl'>About Me</h2>
      </div>


      <div className="about-details ">
        <div className="about-mern lg:grid grid-cols-2 sm:flex sm:flex-col-reverse sm:items-center justify-center">


          <div className="mern-right sm:mb-16 m-8 lg:mb-16">
            <h2 className='font-bold text-3xl pb-10 '>MERN STACK DEVELOPER</h2>
            <p className='text-zinc-500 pb-2 '>I'm Student of BS Software Engineering in Sindh Madressatul Islam University, Karachi.</p>
            <p className='text-zinc-500 pb-2'>I am providing services of Website Development to my clients with an attractive frontEnd with the experties of 2 years</p>
            <p className='text-zinc-500  pb-2'>And I am currently learning backend with few months of experience </p>
            <div className="mern-buttons mt-10">
              <a href="https://github.com/AbuHuraira775" target='_blank' className='rounded-full px-8 py-2 hover:bg-black hover:text-white mr-3'><button className=''>Github</button></a>
              <a href="#portfolio" className='rounded-full px-8 py-2 hover:bg-black hover:text-white'><button >Portfolio</button></a>
            </div>
          </div>

          <div className="mern-left flex itmes-start justify-center sm:mb-10 ">
            <img src={mern} alt="" className='rounded-3xl h-4/5 sm:w-full sm"bg-teal-200' />
          </div>


        </div>
      </div>

    </div>
  )
}

export default About