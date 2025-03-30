import React from 'react'

const Badge = ({children}) => {
  return (
    <div className='rounded-sm bg-muted px-2 w-fit'><span className='text-foreground-muted text-xs'>{children}</span></div>
  )
}

export default Badge