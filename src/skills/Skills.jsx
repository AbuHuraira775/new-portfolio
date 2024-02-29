import React from 'react'
import { IoShieldCheckmarkOutline } from "react-icons/io5";

function Skills() {
    return (
        <div className='skills h-max w-full px-5 mb-10' id='skills'>
            <div className="skill-heading lg:flex flex-col items-center justify-center mb-10 sm:flex">
                <p className='text-zinc-500 text-base'>Get To Know More </p>
                <h2 className='text-4xl font-bold mb-12'>About Me</h2>
            </div>

            <div className="skill-details lg:grid lg:grid-cols-2 gap-6 px-5 sm:grid sm:grid-cols-1">
                <Frontend />
                <Backend />
            </div>
        </div>
    )
}

const Frontend = () => {
    return (
        <div className="skill frontend p-5 h-120 rounded-3xl sm:mb-8">
            <div className="skill-title">
                <h2 className='text-center my-10 font-bold text-2xl text-zinc-800'>Frontend Development</h2>
            </div>

            <div className="skill-about grid grid-cols-2 gap-12">
                <SingleSkill skill_name="HTML" skill_level="Expert" />
                <SingleSkill skill_name="CSS" skill_level="Expert" />
                <SingleSkill skill_name="BOOTSTRSAP" skill_level="Expert" />
                <SingleSkill skill_name="JavaScript" skill_level="Mid Intermediate" />
                <SingleSkill skill_name="React" skill_level="Mid Intermediate" />
                <SingleSkill skill_name="Tailwind" skill_level="Intermediate" />
            </div>
        </div>
    )
}

const Backend = () => {
    return (
        <div className="skill backend p-5 h-110 rounded-3xl">
            <div className="skill-title ">
                <h2 className='text-center my-10 font-bold text-2xl text-zinc-800'>Backend Development</h2>
            </div>

            <div className="skill-about grid grid-cols-2 gap-12">
                <SingleSkill skill_name="Node" skill_level="Basic" />
                <SingleSkill skill_name="Express" skill_level="Basic" />
                <SingleSkill skill_name="Mongo" skill_level="Basic" />
                <SingleSkill skill_name="Git" skill_level="Intermediate" />

            </div>
        </div>
    )
}
const SingleSkill = (props) => {

    return (
        <div className="single-skill flex items-start justify-start hover:bg-slate-200 rounded-lg hover:cursor-pointer py-2 flex items-start justify-start">
            <div className="skill-left mt-3 mx-10"><IoShieldCheckmarkOutline /></div>
            <div className="skill-right">
                <div className="skill-name flex justify-between">
                    <p>{props.skill_name}</p>
                    {/* <p>{props.skill_percentage}</p> */}
                </div>
                <div className="skill-bar">
                    <p className='text-sm text-zinc-700'>{props.skill_level}</p>
                    {/* <input type="range" value={props.skill_percentage} readOnly/> */}
                </div>
            </div>
        </div>
    )
}
export default Skills