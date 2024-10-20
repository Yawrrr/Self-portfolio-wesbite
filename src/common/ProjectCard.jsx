import React from 'react'

function ProjectCard({src,title,description,href}) {
  return (
    <a
    className="hover"
    href={href}
    target="_blank"
  >
    <img src={src} alt={`${title} logo`}></img>
    <h3>{title}</h3>
    <p>{description}</p>
  </a>
  )
}

export default ProjectCard