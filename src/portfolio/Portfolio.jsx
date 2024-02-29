import React, { useState } from 'react'
import projects from '../data/data.json'
import projectList from '../data/projectList.json'
import ProjectItem from './ProjectItem'

function Portfolio() {

  let catagory = 'all'
  const [projects, setProjects] = useState(projectList)
  console.log('projectList : ', projectList)

  const allProjects = () => {
    setProjects(projectList.filter((project) => project.all === 'all'))
    // <ProjectItem catagory='all' projects={projectList}/>
  }
  const personalProjects = () => {
    setProjects(projectList.filter((project) => project.catagory === 'personal'))
  }
  const professionalProjects = () => {
    setProjects(projectList.filter((project) => project.catagory === 'professional'))
  }
  return (
    <div className='porttfolio mb-16' id='portfolio'>

      <div className="porfolio-heading text-center mb-5 mt-16">
        <p className='text-zinc-600 text-base'>Explore</p>
        <h2 className='font-bold text-4xl mb-12'>My Portfolio</h2>
      </div>
      <div className="portfolio-nav">
        <ul className=' lg:flex items-center justify-center h-max mb-6 text-3xl sm:flex'>

        <li onClick={() => allProjects()} className='hover:bg-slate-200 py-1 px-5 rounded-md '>All</li>
        <li onClick={() => personalProjects()} className='hover:bg-slate-200 py-1 px-5 rounded-md'>Pesonal</li>
        <li onClick={() => professionalProjects()} className='hover:bg-slate-200 py-1 px-5 rounded-md'>Professional</li>
        </ul>
      </div>

      <div className="portfolio-projects">
        {/* <ProjectItem projects={projectList} catagory='all' /> */}


        <div className=' grid lg:grid-cols-3 gap-12 p-5 place-center sm:grid-cols-2'>
          {projects.map((project, ind) => {
            return (
              <div key={ind} className='single-project min-h-96 h-max rounded-3xl p-4'>
                <img src={project.image} alt="" className=' h-9/12 rounded-2xl mb-5'/>
                <h2 className='font-bold text-xl mb-3 px-4'>{project.title}</h2>
                <p className='text-zinc-600 mb-6 px-4'>{project.description}</p>
                <div className="projects-btn flex justify-center">
                  <a href={project.github} target='_blank'><button className='py-2 px-8 rounded-3xl mr-3 hover:bg-black hover:text-white'>GitHub</button></a>
                  <a href={project.demo} target='_blank'><button className='py-2 px-8 rounded-3xl mb-3 hover:bg-black hover:text-white'>Demo</button></a>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )

}
export default Portfolio