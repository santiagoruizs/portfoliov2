import React from 'react'

const Badge = ({children}) => {
  return (
    <div className='rounded-sm bg-[color:hsl(240_3.7%_15.9%)] px-2 w-fit'><span className='opacity-60 text-xs'>{children}</span></div>
  )
}

export default Badge