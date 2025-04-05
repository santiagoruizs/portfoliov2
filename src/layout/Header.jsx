import React from 'react'
import Button from '../components/Button'

const Header = () => {
  return (
    <header className='flex items-center justify-between w-screen fixed top-0 p-5 z-10 bg-background'>
        <a className='text-2xl font-bold opacity-90' href='#'>Portfolio</a>
        <nav className='w-1/4'>
            <ul className='flex justify-between [&>li]:text-foreground-muted [&>li]:text-lg [&>li]:hover:text-foreground'>
                <li><a href="#about" className='border-b-2 border-foreground text-foreground'>About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
            </ul>
        </nav>
        <Button variant='white'>Contact Me</Button>

    </header>
  )
}

export default Header