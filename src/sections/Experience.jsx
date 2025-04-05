import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import { experience } from '../data/data'
const Experience = () => {
  return (
    <section className='flex flex-col w-full items-center gap-2'>
      <h2 className='text-6xl font-bold'>Work Experience</h2>
      <span className='text-foreground-muted text-xl'>My proffessional journey</span>
      <div className='flex flex-col items-center my-10 gap-5 w-full'>
        {experience.map(e=> <ExperienceCard title={e.title} timeline={e.timeline} at={e.at} description={e.description} skills={e.skills}/>)}
      </div>
    </section>
  )
}

export default Experience