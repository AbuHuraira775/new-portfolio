import React from 'react'
import { FaBootstrap, FaCss3, FaDatabase, FaJs, FaLinkedinIn, FaNode, FaNodeJs, FaReact, FaTextWidth, FaWpexplorer } from 'react-icons/fa'

function Services() {
    return (
        <div className='services h-max flex flex-col px-5 mb-10' id='services'>
            <div className="service-heading text-center mb-10">
                <p className='text-zinc-500 text-base'>Explore my</p>
                <h2 className='font-bold font-bold text-4xl'>Services</h2>
            </div>

            <div className="services-details grid grid-cols-2 h-max gap-10 px-5">
                <Service 
                        title="FrontEnd Development" 
                        description="FrontEnd Development will be provided using these Tecgnologies React, JavaScript, Bootstrp or Taiwind CSS" 
                        react   ={<FaReact />}
                        bootstrap={<FaBootstrap />}
                        tailwind={<FaCss3 />}
                        js={<FaJs />}
                           />
                <Service 
                        title="BackEnd Development" 
                        description="BackEnd of your project will be done with Node.js Express.js and most popular Database is MongoDB"
                        node={<FaNodeJs />} 
                        // express={<FaNode />} 
                        mongo={<FaDatabase />} 
                        />
            </div>
        </div>
    )
}


const Service = (props) => {
    return (
        <div className="service b-black  rounded-3xl p-5 pb-10  hover:bg-slate-100 ">
            <img src={props.logo} alt="" />
            <h2 className='font-bold text-xl'>{props.title}</h2>
            <p className='text-zinc-500 mt-8'>{props.description}</p>
            <div className="icons flex items-center">
                <p>{props.react}</p>
                <p>{props.tailwind}</p>
                <p>{props.js}</p>
                <p>{props.bootstrap}</p>
                <p>{props.node}</p>
                <p>{props.mongo}</p>
                <p>{props.express}</p>
                
            </div>
        </div>

    )

}
export default Services