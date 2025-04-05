
import React from 'react'
import Badge from './Badge'
import Button from './Button'
import { Github } from 'lucide-react'
const ProjectCard = ({title, description, skills, image, link, github}) => {
  return (
    <div className='flex flex-col justify-between bg-background-card  w-[400px] h-[500px] p-5 rounded-xl'>
      <header className='h-1/6    flex flex-col '>
        <div className='flex items-center justify-between'>
          <h3 className='text-2xl font-bold'>{title}</h3>
          <a href={github} target='_blank' rel="noreferrer"><Github /></a>
        </div>
        <span className='text-foreground-muted text-sm'>{description}</span>
      </header>
        
        <a href={link} target='_blank' rel="noreferrer" className='h-1/2  overflow-hidden'><img src={image} className='rounded-xl aspect-auto h-full w-full object-cover'/></a>
        <div className='flex flex-wrap gap-2 h-1/4  justify-start'>
            {skills.map(s => <Badge>{s}</Badge>)}
        </div>
    </div>
  )
}

export default ProjectCard