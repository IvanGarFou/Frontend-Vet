import React from 'react'

const NavegationCards = ({ text, image, alternativeText }) => {
  return (
    <div className='flex flex-col items-center bg-[#A8C3A0] p-1 md:w-[28%] md:m-1 lg:m-3 justify-center rounded-4xl'>
      
      <div className='flex flex-col items-center justify-center md:h-3/6 lg:h-4/6 justify-end w-full overflow-hidden'>
        <img src={image} alt={alternativeText} className=' w-3/6' />
      </div>
      <h1 className='h-auto md:text-2xl lg:text-4xl font-bold text-center'>{text}</h1>
    </div>
  )
}


export default NavegationCards