import React from 'react'
import ExperienceCard from '../components/ExperienceCard'

const Experience = () => {
  return (
    <section className='flex flex-col w-full items-center gap-2'>
      <h2 className='text-6xl font-bold'>Work Experience</h2>
      <span className='text-foreground-muted text-xl'>My proffessional journey</span>
      <div className='flex flex-col items-center my-10 gap-5 w-full'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  )
}

export default Experience