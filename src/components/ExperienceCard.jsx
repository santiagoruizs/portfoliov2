import React from 'react'

const ExperienceCard = () => {
  return (
    <div className='border-1 border-white w-1/2 p-5 rounded-xl'>
        <header className='flex items-center justify-between'>
            <div className='flex flex-col justify-between'>
                <h3 className='text-2xl font-bold opacity-90'>Technical Consultor</h3>
                <span className='opacity-60'>Ack Logic</span>
            </div>
            <span className='opacity-60'>2021 - present</span>
        </header>
        <ul className='opacity-60 flex flex-col gap-3 list-disc m-5'>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
        </ul>
    </div>
  )
}

export default ExperienceCard