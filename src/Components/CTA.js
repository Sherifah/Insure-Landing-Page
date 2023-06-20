import React from 'react'

const CTA = () => {
  return (
    <div className='bg-primary-100 mt-32 mx-32 p-10 text-white relative'>
      <div className='flex justify-between items-center'>
        <div className='font-headings text-4xl leading-18'>
          <h3>Find out more <br /> about how we work</h3>
        </div>
        <div className='bg-primary-300 z-10 px-6 py-2 font-body font-bold text-sm border-2 text-white border-white hover:text-primary-100 hover:bg-white max-w-[12rem] cursor-pointer'>
          <button className='btn uppercase'>How we work</button>
        </div>
      </div>
      <div>
        <img src='images/bg-pattern-how-we-work-desktop.svg' alt='patterns' className='absolute top-0 right-0 max-w-[27.6%]'></img>
      </div>
    </div>
  )
}

export default CTA
