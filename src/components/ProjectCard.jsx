
import React from 'react'
import Badge from './Badge'

const ProjectCard = () => {
  return (
    <div className='flex flex-col bg-background-card  w-[400px] h-[400px] p-5 rounded-xl gap-3'>
        <h3 className='text-2xl font-bold'>Project Title</h3>
        <span className='text-foreground-muted'>A brief project description</span>
        <img src='https://kzmn6o41jqt0q2kqwyud.lite.vusercontent.net/placeholder.svg' className='h-full rounded-xl my-3'/>
        <div className='flex flex-wrap gap-2'>
            <Badge>Javascript</Badge>
            <Badge>CSS</Badge>
            <Badge>React</Badge>
            <Badge>AVEVA MES</Badge>
        </div>
    </div>
  )
}

export default ProjectCard