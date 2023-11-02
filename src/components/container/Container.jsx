import React from 'react'

function Container({children}) {
  return (
    <div className='bg-slate-400 w-screen h-screen text-center flex flex-col items-center justify-center'>{children}</div>
  )
}

export default Container