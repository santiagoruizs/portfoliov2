import React from 'react'
import Header from './Header'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Projects from '../sections/Projects'
import Experience from '../sections/Experience'

const Layout = () => {
  return (
    <div>
        <Header/>
        <div className='flex flex-col justify-center min-h-screen max-w-screen items-center gap-20'>
            <Hero />
            <About />
            <Projects />
            <Experience />
        </div>
    </div>
  )
}

export default Layout