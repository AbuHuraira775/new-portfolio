import React from 'react'

function ProjectItem({ projects, catagory }) {
    return (
        <div>{projects.filter((project) => project.catagory === catagory)}</div>
    )
}

export default ProjectItem