import React from 'react'
import Button from '../components/Button'
import Skills from '../components/Skills'
import { FileUser } from 'lucide-react'

const About = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center p-10 gap-10'>
      <div className='flex flex-col w-1/2 gap-4 h-1/2'>
        <h2 className='text-6xl font-bold'>About Me</h2>
        <p className='text-xl text-foreground-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa, beatae pariatur adipisci eos autem quia maxime facilis dolor, amet provident velit asperiores enim itaque illum odio reiciendis sequi cum.</p>
        <Button variant ='white' >Download Resume <FileUser className='w-5 h-5 ml-2 text-foreground-muted'/></Button>
      </div>
      <div className='flex flex-col w-1/2 h-1/2 gap-10'>
        <h3 className='text-3xl font-semibold'>Skills</h3>
        <div className='flex w-full flex-wrap items-center justify-center gap-3 text-foreground-muted'>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills>
          <Skills>Skill</Skills> 

        </div>
      </div>
    </section>
  )
}

export default About