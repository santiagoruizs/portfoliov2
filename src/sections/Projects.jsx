import React from 'react'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <section className='h-screen w-full flex flex-col items-center justify-center p-10 gap-2'>
      <h2 className='text-6xl font-bold opacity-90'>My Projects</h2>
      <span className='text-xl opacity-60'>Check out some of my recent work</span>
      <div className='flex gap-5 my-10'>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
      </div>
      <Button >More on Github</Button>
    </section>
  )
}

export default Projects