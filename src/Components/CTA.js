import React from 'react'

const CTA = () => {
  return (
    <div className='bg-primary-100 mx-8 px-8 py-20 md:mt-32 md:mx-32 md:p-10 text-white relative'>
      <div className='md:flex justify-between items-center'>
        <div className='font-headings text-4xl leading-18'>
          <h3>Find out more <br /> about how we work</h3>
        </div>
        <button className='bg-primary-300 uppercase z-10 px-6 py-2 mt-8 md:mt-0 font-body font-bold text-sm border-2 text-white border-white hover:text-primary-100 hover:bg-white max-w-[12rem] cursor-pointer'>
          How we work
        </button>
      </div>
      <div>
        <img src='images/bg-pattern-how-we-work-desktop.svg' alt='patterns' className='absolute hidden md:block top-0 right-0 max-w-[27.6%]'></img>
        <img src='images/bg-pattern-how-we-work-mobile.svg' alt='patterns' className='absolute md:hidden top-0 right-0 h-[90%]'></img>
      </div>
    </div>
  )
}

export default CTA
