import React from 'react'
import Badge from './Badge'
const ExperienceCard = ({title, timeline, skills, at, description}) => {
  return (
    <div className='bg-background-card w-1/2 p-8 rounded-xl flex flex-col gap-5'>
        <header className='flex items-center justify-between'>
            <div className='flex flex-col justify-between'>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <span className='text-foreground-muted'>{at}</span>
            </div>
            <span className='text-foreground-muted'>{timeline}</span>
        </header>
        <div className='text-foreground-muted'>
            <p className=''>{description}</p>
        </div>
        <div>
          <div className='flex flex-wrap gap-2 h-1/4  justify-start'>
            {skills.map(s => <Badge>{s}</Badge>)}
          </div>
        </div>
    </div>
  )
}

export default ExperienceCard