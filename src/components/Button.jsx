import React from 'react'

const Button = ({children, variant}) => {
    let style = variant === 'white' ? 'bg-white text-black hover:border-1 hover:border-white hover:text-white hover:bg-black' : 'border-1 border-white text-white hover:bg-white hover:text-black'
  return (
    <button className={'px-4 py-2 rounded-xl cursor-pointer w-fit opacity-90 ' + style}>{children}</button>
  )
}

export default Button