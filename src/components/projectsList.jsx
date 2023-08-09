import React from 'react'
import "./projectsList.css"
import {projects} from "../projects"

function ProjectsList() {
  return (
      <section className="projects">
          <h2>My Projects</h2>
          <div className="projects">
            {
              projects.map((project,index)=>(
                <>
                  <img src={project.imageUrl} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel='noopener noreferrer'>View Project</a>
                </>
              ))
            }
          </div>
      </section>
  )
}

export default ProjectsList