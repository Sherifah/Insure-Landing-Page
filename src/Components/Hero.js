import React from 'react'

const Hero = () => {
  return (
    <div className='bg-primary-100 px-32 py-16 text-white relative'>
      <div className='w-1/2 pr-8 pb-10'>
          <hr className='w-28 pb-8'/>
          <div className=''>
            <div className='font-headings text-6xl pb-6 leading-18'>
              <h1>Humanizing <br />your insurance.</h1>
            </div>
            <p className='font-body text-sm font-normal pb-6 leading-6'>
              Get your life insurance coverage easier and faster. We blend our expertise 
              and technology to help you find the plan that’s right for you. Ensure you 
              and your loved ones are protected.
            </p>
            <div className='bg-primary-100 px-8 py-2 font-body font-bold text-sm border-2 text-white border-white hover:text-primary-100 hover:bg-white w-[9.3rem] cursor-pointer'>
              <button className='btn uppercase'>View Plans</button>
            </div>
          </div>
        </div>
        <img src='images/bg-pattern-intro-right-desktop.svg' alt='patterns' className='absolute top-0 right-0 z-10 w-[20rem] h-[24rem]' />
        <div>
          <img src='images/image-intro-desktop.jpg' className='absolute top-16 right-32 object-cover w-[30rem] h-[32rem]'/>
        </div>
        <img src='images/bg-pattern-intro-left-desktop.svg' alt='patterns' className='absolute left-0 -bottom-48 w-[8rem]' />
    </div>
  )
}

export default Hero
