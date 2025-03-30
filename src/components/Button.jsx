import React from 'react'

const Button = ({children, variant}) => {
    let style = variant === 'white' ? 'bg-foreground text-background' : 'border-1 border-foreground text-foreground'
  return (
    <button className={'px-4 py-2 flex items-center rounded-xl cursor-pointer w-fit opacity-90 hover:opacity-80 ' + style}>{children}</button>
  )
}

export default Button