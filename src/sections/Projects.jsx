import React from 'react'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/data'
const Projects = () => {
  return (
    <section className='h-screen w-full flex flex-col items-center justify-center p-10 gap-2'>
      <h2 className='text-6xl font-bold'>My Projects</h2>
      <span className='text-xl text-foreground-muted'>Check out some of my recent work</span>
      <div className='flex gap-5 my-10'>
          {projects.map(p => {
            return (<ProjectCard title={p.title} description={p.description} skills={p.skills} image={p.image} link={p.link} github={p.github}/>)
          })}
          {/* <ProjectCard />
          <ProjectCard />
          <ProjectCard /> */}
      </div>
      <Button >More on Github</Button>
    </section>
  )
}

export default Projects