import React from 'react'

const ExperienceCard = () => {
  return (
    <div className='bg-background-card w-1/2 p-5 rounded-xl'>
        <header className='flex items-center justify-between'>
            <div className='flex flex-col justify-between'>
                <h3 className='text-2xl font-bold'>Technical Consultor</h3>
                <span className='text-foreground-muted'>Ack Logic</span>
            </div>
            <span className='text-foreground-muted'>2021 - present</span>
        </header>
        <ul className='text-foreground-muted flex flex-col gap-3 list-disc m-5'>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </ul>
        <div>
          
        </div>
    </div>
  )
}

export default ExperienceCard