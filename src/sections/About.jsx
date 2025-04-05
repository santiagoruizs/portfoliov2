import React from 'react'
import Button from '../components/Button'
import Skills from '../components/Skills'
import { FileUser } from 'lucide-react'
import { bioIntro, bioParagraph, mainSkills } from '../data/data'

const About = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center p-10 gap-10'>
      <div className='flex flex-col w-1/2 gap-4 h-1/2'>
        <h2 className='text-6xl font-bold'>About Me</h2>
        <p className='text-xl text-foreground-muted'>{bioIntro}</p>
        <p className='text-xl text-foreground-muted'>{bioParagraph}</p>
        <Button variant ='white' >Download Resume <FileUser className='w-5 h-5 ml-2 text-foreground-muted'/></Button>
      </div>
      <div className='flex flex-col w-1/2 h-1/2 gap-10'>
        <h3 className='text-3xl font-semibold'>Main Skills</h3>
        <div className='flex w-full flex-wrap items-center justify-center gap-3 text-foreground-muted'>
          {/* {mainSkills.map(skill => 
            <Skills>{skill}</Skills>
          )} */}
          <img src='js.svg' className='h-20'/>
          <img src='html-5.svg' className='h-20'/>
          <img src='css-3.svg' className='h-20'/>
          <img src='react-2.svg' className='h-20'/>
          <img src='tailwind.svg' className='h-20'/>
          <img src='vite.svg' className='h-20'/>
          <img src='python.svg' className='h-20'/>
          <img src='sql.svg' className='h-20'/>
          <img src='PG.svg' className='h-20'/>
        
        </div>
      </div>
    </section>
  )
}

export default About