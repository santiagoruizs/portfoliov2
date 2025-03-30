
import React from 'react'
import Badge from './Badge'

const ProjectCard = () => {
  return (
    <div className='flex flex-col border-1 w-[450px] h-[400px] p-5 rounded-xl gap-3'>
        <h3 className='text-2xl font-bold opacity-90'>Project Title</h3>
        <span className='opacity-60'>A brief project description</span>
        <img src='https://kzmn6o41jqt0q2kqwyud.lite.vusercontent.net/placeholder.svg' className='h-full rounded-xl'/>
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