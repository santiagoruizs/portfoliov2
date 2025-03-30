import React from 'react'
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-4 w-3/4 h-screen'>
        <h1 className='text-6xl font-extrabold'>Santiago Ruiz</h1>
        <h2 className='text-3xl font-bold text-foreground-muted'>Software Engineer</h2>
        <p className='text-foreground-muted text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <a href='#about' className='border-1 px-7 py-2 rounded-full text-foreground-muted flex items-center justify-center gap-2 hover:bg-muted hover:text-foreground'>About Me <ArrowDown className='w-5 h-5'/></a>
    </section>
  )
}

export default Hero