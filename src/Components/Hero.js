import React from 'react'

const Hero = () => {

  return (
    <div className='relative'>
      <div>
        <img src='images/image-intro-mobile.jpg' className='object-cover h-full w-full md:hidden'/>
      </div>
      <div className='bg-primary-100 md:z-0 px-8 py-20 md:px-32 md:py-16 text-white relative'>
          <div>
            <img src='images/image-intro-desktop.jpg' className='md:absolute hidden md:block top-16 right-32 object-cover w-[42%] h-[100%]'/>
          </div>
          <div className='md:w-1/2 md:pr-12 md:pb-10 relative z-10'>
            <hr className='w-28 pb-8 hidden md:block'/>
            <div className=''>
              <div className='font-headings text-4xl md:text-6xl pb-4 md:pb-8 md:leading-18'>
                <h1>Humanizing <br />your insurance.</h1>
              </div>
              <p className='font-body text-sm font-normal pb-6 leading-6'>
                Get your life insurance coverage easier and faster. We blend our expertise 
                and technology to help you find the plan that’s right for you. Ensure you 
                and your loved ones are protected.
              </p>
              <button className='bg-primary-100 uppercase mt-4 px-8 py-2 font-body font-bold text-sm border-2 text-white border-white hover:text-primary-100 hover:bg-white max-w-[9.5rem] cursor-pointer'>
                View Plans
              </button>
            </div>
          </div>
          <img src='images/bg-pattern-intro-right-desktop.svg' alt='patterns' className='md:absolute hidden md:block top-0 right-0 z-10 w-[20rem] h-[24rem]' />
          <img src='images/bg-pattern-intro-left-desktop.svg' alt='patterns' className='md:absolute hidden md:block left-0 -bottom-48 w-[8.5rem]' />
          <img src='images/bg-pattern-intro-left-mobile.svg' alt='patterns' className='absolute md:hidden top-0 left-0 z-9' />
          <img src='images/bg-pattern-intro-right-mobile.svg' alt='patterns' className='absolute md:hidden -bottom-44 right-0' />

      </div>
    </div>
    
  )
}

export default Hero
