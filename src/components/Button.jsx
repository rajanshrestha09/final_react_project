import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-md border text-white ${bgColor} ${className} hover:bg-blue-800 me-2`} {...props}>
        {children}
    </button>
  )
}

export default Button